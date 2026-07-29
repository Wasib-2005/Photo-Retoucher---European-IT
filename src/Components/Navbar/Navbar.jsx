import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import NavIcon from "../../assets/NavIcon.svg";
import NavbarMenu from "./NavbarMenu";
import Search from "../../assets/Search.svg";
import Arrow from "../../assets/Arrow.svg";
import AuthContext from "../../Context/Auth/AuthContext";
import { FiLogOut } from "react-icons/fi";
import useAuth from "./Auth/Hook/useAuth";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const { user } = useContext(AuthContext);
  const { logOut } = useAuth();

  const getInitials = (userObj) => {
    if (userObj?.name && userObj.name.trim().length > 0) {
      return userObj.name.trim().slice(0, 2).toUpperCase();
    }
    if (userObj?.email && userObj.email.trim().length > 0) {
      return userObj.email.trim().slice(0, 2).toUpperCase();
    }
    return "US";
  };

  const avatarUrl = user?.photoURL || user?.photoUrl;

  return (
    <nav className="px-4 md:px-12 lg:px-20 py-3 bg-white z-50 border-b border-gray-100 text-nowrap fixed top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <NavLink to="/" className="shrink-0">
          <img src={NavIcon} alt="logo" className="w-[145px] h-auto" />
        </NavLink>

        {/* Desktop Navbar Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 overflow-x-auto py-2">
          <NavbarMenu />
        </div>

        {/* Right Section: Search, Avatar / Auth Buttons, Mobile Menu */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Animated Search Input */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className={`border border-gray-300 rounded-lg py-1.5 text-sm text-gray-800 bg-white transition-all duration-300 ease-in-out focus:outline-none focus:border-[#0041FF] ${
                openSearch
                  ? "w-40 sm:w-56 px-3 opacity-100 pr-9"
                  : "w-0 px-0 opacity-0 border-none pointer-events-none"
              }`}
            />
            <button
              type="button"
              onClick={() => setOpenSearch(!openSearch)}
              className={`p-2 rounded-full hover:bg-[#0041FF]/10 transition-colors cursor-pointer ${
                openSearch ? "absolute right-1 text-gray-500" : ""
              }`}
              aria-label="Toggle search"
            >
              <img src={Search} alt="Search" className="w-5 h-5" />
            </button>
          </div>

          {/* Conditional Rendering: User Avatar or Login */}
          {user ? (
            /* Logged User Avatar & Dropdown */
            <div className="relative">
              <button
                type="button"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="w-10 h-10 rounded-full bg-[#0041FF] text-white flex items-center justify-center font-bold text-sm tracking-wider hover:opacity-90 transition-opacity focus:outline-none ring-2 ring-[#0041FF]/20 overflow-hidden cursor-pointer"
                aria-label="User menu"
              >
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>{getInitials(user)}</span>
                )}
              </button>

              {/* User Dropdown Menu */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {user?.name || "User"}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user?.email}
                    </p>
                  </div>

                  <button
                    onClick={logOut}
                    className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 font-medium transition-colors cursor-pointer"
                  >
                    <FiLogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Guest Buttons (not login ) */
            <>
              <Link
                to="/auth/login"
                className="hidden sm:block text-[#1B263B] hover:text-[#0041FF] transition-colors font-medium"
              >
                Login
              </Link>

              <Link
                to="/"
                className="hidden sm:flex w-[192px] h-[52px] bg-[#0041FF] hover:bg-[#0036d9] rounded-lg text-white items-center justify-center gap-2 font-medium transition-colors shrink-0"
              >
                <span>Get Started Free</span>
                <img src={Arrow} alt="" className="w-4 h-4" />
              </Link>
            </>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-black focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg px-6 py-5 flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <NavbarMenu onItemClick={() => setMobileMenuOpen(false)} />
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3 sm:hidden">
            {user ? (
              <button
                onClick={logOut}
                className="w-full py-2.5 text-red-600 font-medium border border-red-200 rounded-lg hover:bg-red-50 flex items-center justify-center gap-2"
              >
                <FiLogOut className="w-4 h-4" />
                <span>Logout ({user?.name || getInitials(user)})</span>
              </button>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center py-2.5 text-[#1B263B] font-medium border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  Login
                </Link>
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full h-[52px] bg-[#0041FF] text-white rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <span>Get Started Free</span>
                  <img src={Arrow} alt="" className="w-4 h-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
