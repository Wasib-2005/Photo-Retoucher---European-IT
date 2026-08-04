import { createBrowserRouter } from "react-router"; // Changed to react-router-dom
import App from "./App";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
import OurServices from "./Pages/OurServices/OurServices";
import ServiceDetiallsPage from "./Pages/ServiceDetialls/ServiceDetiallsPage";
import HowItWorkPage from "./Pages/HowItWorkPage/HowItWorkPage";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/service", element: <OurServices /> },
      { path: "/service/:serviceName", element: <ServiceDetiallsPage /> },
      { path: "/how-it-works", element: <HowItWorkPage /> },

      { path: "*" },
    ],
  },
  { path: "/auth/:page", element: <Auth /> },
]);

export default MainRouter;
