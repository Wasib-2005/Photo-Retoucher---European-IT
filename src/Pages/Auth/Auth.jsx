import { useParams } from "react-router";
import Right_crave from "../../assets/Right_crave.svg";
import Left_crave from "../../assets/Left_crave.svg";
import Login from "../../Components/Navbar/Auth/Login";
import Register from "../../Components/Navbar/Auth/Register";

const Auth = () => {
  const { page } = useParams();

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-white pt-10">
      {/* 1st Image: Top Right */}
      <img
        className="absolute top-0 right-0 max-w-[15%] pointer-events-none select-none"
        src={Right_crave}
        alt=""
      />

      {/* 2nd Image: Bottom Left */}
      <img
        className="absolute bottom-0 left-0 max-w-[15%] pointer-events-none select-none"
        src={Left_crave}
        alt=""
      />

      {/* Main Content Area */}
      <div className="relative z-10 flex justify-center">
        {page === "login" ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default Auth;