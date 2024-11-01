import { type Root, createRoot } from "react-dom/client";

const container = document.getElementById("react-app");
if (!container) {
  throw new Error("React container element not found");
}

const root: Root = createRoot(container);

root.render(
  <div className="flex min-h-screen w-full flex-col">
    <div className="flex-1 flex items-center justify-center">
      <h1 className="text-4xl font-bold">Hello, React!</h1>
      <a href="/admin">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Admin
        </button>
      </a>
    </div>
  </div>
);
