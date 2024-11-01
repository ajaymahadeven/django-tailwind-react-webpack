import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import webpack, { type Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';


const buildDirectory = "../static/compiled/";

// Extend Configuration interface to include plugins and optimization
interface ExtendedConfiguration extends Configuration {
  optimization?: {
    minimize: boolean;
    minimizer: (TerserPlugin | webpack.WebpackPluginInstance)[];
  };
}

const config: ExtendedConfiguration = {
  entry: {
    index: ["./react/app/page.tsx"],
  },
  output: {
    path: path.join(__dirname, buildDirectory),
    filename: "[name].js",
  },
  mode: "production",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 5,
          compress: {
            unused: true,
            dead_code: true,
          },
        },
        parallel: true,
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
      verbose: true,
      dry: false,
    }),
  ],
};

export default config;