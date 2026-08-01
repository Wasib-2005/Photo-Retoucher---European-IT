import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/FooterComponent/Footer";

function App() {
  return (
    <div className="text-[16px] text-[#4C515B] ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
