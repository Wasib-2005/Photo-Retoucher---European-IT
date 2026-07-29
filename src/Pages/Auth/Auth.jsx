import { useParams } from "react-router";
import Right_crave from "../../assets/Right_crave.svg";
import Left_crave from "../../assets/Left_crave.svg";
import Login from "../../Components/Navbar/Auth/Login";

const Auth = () => {
  const { page } = useParams();

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      {/* 1st Image: Top Left */}
      <img
        className="absolute top-0 right-0 max-w-[15%] pointer-events-none select-none"
        src={Right_crave}
        alt=""
      />

      {/* 2nd Image: Bottom Right */}
      <img
        className="absolute bottom-0 left-0 max-w-[15%] pointer-events-none select-none"
        src={Left_crave}
        alt=""
      />

      {/* Main Content Area */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {page === "login" ? (
          <>
            <Login />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Auth;
