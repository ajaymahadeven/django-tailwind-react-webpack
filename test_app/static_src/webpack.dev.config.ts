import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import path from "path";
import webpack, { type Configuration } from "webpack";

const buildDirectory = "../static/compiled/";

interface ExtendedConfiguration extends Configuration {
  devServer?: {
    port?: number;
    static: {
      directory: string;
    };
    devMiddleware: {
      writeToDisk: boolean;
    };
  };
}

const config: ExtendedConfiguration = {
  entry: {
     index:['./react/app/page.tsx'],
  },
  output: {
    path: path.join(__dirname, buildDirectory),
    filename: "[name].js",
  },
  mode: "development",
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, buildDirectory),
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
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
          options: {
            plugins: [require.resolve("react-refresh/babel")],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader", // Add PostCSS loader for Tailwind
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
      verbose: true,
      dry: false,
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  watchOptions: {
    aggregateTimeout: 50,
    ignored: /node_modules/,
  },
  cache: {
    type: "filesystem",
  },
};

export default config;