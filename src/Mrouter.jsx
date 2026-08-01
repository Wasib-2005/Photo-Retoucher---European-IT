import { createBrowserRouter } from "react-router"; // Changed to react-router-dom
import App from "./App";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Home /> }, { path: "*" }],
  },
  { path: "/auth/:page", element: <Auth /> },
]);

export default MainRouter;
