import { useState } from "react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import LoginPhoto from "../../assets/Login.png";
import NavIcon from "../../assets/NavIcon.svg";
import Apple from "../../assets/Apple.svg";
import Facebook from "../../assets/Facebook.svg";
import Google from "../../assets/Google.svg";
import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-[90%] h gap-12 mt-20 mx-auto">
      <div className="w-[47%] border border-[#0041FF] rounded-2xl flex justify-center p-10 bg-white">
        <div className="w-full flex flex-col gap-4">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={NavIcon} alt="NavIcon" />
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-[20px] text-[#0041FF] font-semibold">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-600">
              Welcome back to us-Let’s get back to your account.
            </p>
          </div>

          <hr className="border-[#0041FF]" />

          {/* Email Input */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="loginEmail"
              className="text-[#1B263B] font-semibold text-sm"
            >
              Email
            </label>
            <input
              required="true"
              type="email"
              name="email"
              id="loginEmail"
              placeholder="email@gmail.com"
              className="w-full border border-[#0041FF] rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-[#0041FF]"
            />
          </div>

          {/* Password Input with Eye Icon inside */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="loginPassword"
              className="text-[#1B263B] font-semibold text-sm"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <input
                required="true"
                type={showPassword ? "text" : "password"}
                name="password"
                id="loginPassword"
                placeholder="********"
                className="w-full border border-[#0041FF] rounded-lg px-4 py-2.5 pr-10 text-sm outline-none focus:ring-1 focus:ring-[#0041FF]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-500 hover:text-[#0041FF]"
              >
                {showPassword ? (
                  <PiEyeSlash size={20} />
                ) : (
                  <PiEyeLight size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Remember Password & Forgot Password Row */}
          <div className="flex items-center justify-between text-sm py-1">
            <label className="flex items-center gap-2 cursor-pointer text-[#1B263B]">
              <input
                type="checkbox"
                name="remember"
                className="accent-[#0041FF] w-4 h-4 cursor-pointer"
              />
              <span>Remember Password!</span>
            </label>
            <Link to="#" className="text-[#0041FF] hover:underline font-medium">
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#0041FF] text-white font-bold py-3 rounded-lg hover:bg-[#0036d9] transition-colors"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2 my-1">
            <hr className="border-[#0041FF] w-full" />
            <span className="text-sm text-gray-500">Or</span>
            <hr className="border-[#0041FF] w-full" />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-4">
            <button
              type="button"
              className="p-2.5 rounded-xl hover:border-[#0041FF] hover:bg-[#0041FF]/5 transition-all"
            >
              <img src={Google} alt="Google" className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2.5 rounded-xl hover:border-[#0041FF] hover:bg-[#0041FF]/5 transition-all"
            >
              <img src={Facebook} alt="Facebook" className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2.5 rounded-xl hover:border-[#0041FF] hover:bg-[#0041FF]/5 transition-all"
            >
              <img src={Apple} alt="Apple" className="w-5 h-5" />
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-center text-sm text-gray-600 mt-2">
            Don’t have an account?{" "}
            <Link
              to="/auth/register"
              className="text-[#0041FF] font-semibold hover:underline"
            >
              Register now!
            </Link>
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-[53%] flex items-center">
        <img
          src={LoginPhoto}
          alt="Login Illustration"
          className="w-full h-full "
        />
      </div>
    </div>
  );
};

export default Login;
