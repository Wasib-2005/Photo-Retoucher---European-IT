import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="text-[16px] text-[#4C515B] ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
