import { useState } from "react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import RegisterPhoto from "../../../assets/Register.png";
import NavIcon from "../../../assets/NavIcon.svg";
import Apple from "../../../assets/Apple.svg";
import Facebook from "../../../assets/Facebook.svg";
import Google from "../../../assets/Google.svg";
import { Link } from "react-router";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-[70%] gap-12 mt-20 mx-auto mb-10">
      {/* Left Form Card */}
      <div className="w-[49%] border border-[#0041FF] rounded-2xl flex justify-center p-10 bg-white">
        <div className="w-full flex flex-col gap-4">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={NavIcon} alt="NavIcon" />
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-[20px] text-[#0041FF] font-semibold">
              Create your account
            </h2>
            <p className="text-sm text-gray-600">
              Welcome back to us-Let’s get back to your account.
            </p>
          </div>

          <hr className="border-[#0041FF]" />

          {/* Name Input */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="registerName"
              className="text-[#1B263B] font-semibold text-sm"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="registerName"
              placeholder="Type your name..."
              className="w-full border border-[#0041FF] rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-[#0041FF]"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="registerEmail"
              className="text-[#1B263B] font-semibold text-sm"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="registerEmail"
              placeholder="email@gmail.com"
              className="w-full border border-[#0041FF] rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-[#0041FF]"
            />
          </div>

          {/* Phone Number Input with Flag Dropdown */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="registerPhone"
              className="text-[#1B263B] font-semibold text-sm"
            >
              Phone number
            </label>
            <div className="flex border border-[#0041FF] rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-[#0041FF]">
              {/* Country Code Select */}
              <select
                defaultValue="+880"
                className="bg-gray-50  px-2.5 py-2.5 text-sm outline-none cursor-pointer text-[#1B263B] font-medium shrink-0 "
              >
                <option value="+880">🇧🇩</option>
                <option value="+1">🇺🇸</option>
                <option value="+44">🇬🇧</option>
                <option value="+91">🇮🇳</option>
                <option value="+971">🇦🇪</option>
              </select>

              {/* Phone Number Field */}
              <input
                type="tel"
                name="phone"
                id="registerPhone"
                placeholder="1700 000000"
                className="w-full px-4 py-2.5 text-sm outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password Input with Eye Icon inside */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="registerPassword"
              className="text-[#1B263B] font-semibold text-sm"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="registerPassword"
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

          {/* Remember Password & Login? Link */}
          <div className="flex items-center justify-between text-sm py-1">
            <label className="flex items-center gap-2 cursor-pointer text-[#1B263B]">
              <input
                type="checkbox"
                name="remember"
                className="accent-[#0041FF] w-4 h-4 cursor-pointer"
              />
              <span>Remember Password!</span>
            </label>
            <Link
              to="/auth/login"
              className="text-[#0041FF] hover:underline font-medium"
            >
              Login?
            </Link>
          </div>

          {/* Button */}
          <button className="w-full bg-[#0041FF] text-white font-bold py-3 rounded-lg hover:bg-[#0036d9] transition-colors">
            Sign Up
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
              className="p-2.5 border border-gray-200 rounded-xl hover:border-[#0041FF] hover:bg-[#0041FF]/5 transition-all"
            >
              <img src={Google} alt="Google" className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2.5 border border-gray-200 rounded-xl hover:border-[#0041FF] hover:bg-[#0041FF]/5 transition-all"
            >
              <img src={Facebook} alt="Facebook" className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2.5 border border-gray-200 rounded-xl hover:border-[#0041FF] hover:bg-[#0041FF]/5 transition-all"
            >
              <img src={Apple} alt="Apple" className="w-5 h-5" />
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-center text-sm text-gray-600 mt-2">
            Have an account?{" "}
            <Link
              to="/auth/login"
              className="text-[#0041FF] font-semibold hover:underline"
            >
              Login now!
            </Link>
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-[51%] flex items-center">
        <img
          src={RegisterPhoto}
          alt="Register Illustration"
          className="w-full h-full "
        />
      </div>
    </div>
  );
};

export default Register;
