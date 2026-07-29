import { createBrowserRouter } from "react-router"; // Changed to react-router-dom
import App from "./App";
import Auth from "./Pages/Auth/Auth";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/auth/:page", element: <Auth /> }, { path: "*" }],
  },
]);

export default MainRouter;
