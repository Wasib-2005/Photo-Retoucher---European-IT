import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import '@fontsource-variable/roboto-flex';
import { RouterProvider } from "react-router";
import MainRouter from "./Mrouter.jsx";
import AuthContextProvider from "./Context/Auth/AuthContextProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={MainRouter} />
    </AuthContextProvider>
  </StrictMode>,
);
