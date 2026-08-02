import { createBrowserRouter } from "react-router"; // Changed to react-router-dom
import App from "./App";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
import OurServices from "./Pages/OurServices/OurServices";


const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/service", element: <OurServices /> },

      { path: "*" },
    ],
  },
  { path: "/auth/:page", element: <Auth /> },
]);

export default MainRouter;
