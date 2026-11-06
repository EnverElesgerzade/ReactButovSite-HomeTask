import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { createRoot } from "react-dom/client";
import { Routes } from "./routes";
import "./index.css"
const router = createBrowserRouter(Routes);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
