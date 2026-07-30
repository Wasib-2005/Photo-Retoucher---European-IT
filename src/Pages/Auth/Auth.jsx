import { Navigate, useParams } from "react-router";
import Right_crave from "../../assets/Right_crave.svg";
import Left_crave from "../../assets/Left_crave.svg";
import Login from "../../Components/Auth/Login";
import Register from "../../Components/Auth/Register";
import useAuth from "../../Components/Auth/Hook/useAuth";
import { useContext } from "react";
import AuthContext from "../../Context/Auth/AuthContext";

const Auth = () => {
  const { page } = useParams();
  const { signIn, signUp } = useAuth();

  const { user, waitForUser } = useContext(AuthContext);

  if (waitForUser)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <p> Waiting For User...</p>
      </div>
    );
  if (user) return <Navigate to={"/"} />; // TODO: make a good login logic so it wont always nav to home

  return (
    <>
      <div className="relative w-screen min-h-screen overflow-x-hidden bg-white pt-10 pb-20">
        {/* 1st Image: Top Right (baground) */}
        <img
          className="absolute top-0 right-0 max-w-[15%] pointer-events-none select-none"
          src={Right_crave}
          alt=""
        />

        {/* 2nd Image: Bottom Left (baground) */}
        <img
          className="absolute bottom-0 left-0 max-w-[15%] pointer-events-none select-none"
          src={Left_crave}
          alt=""
        />

        {/* Main Content Area */}

        <form
          onSubmit={(e) => (page === "login" ? signIn(e) : signUp(e))}
          className="relative z-10 flex justify-center"
        >
          {page === "login" ? <Login /> : <Register />}
        </form>
      </div>
    </>
  );
};

export default Auth;
