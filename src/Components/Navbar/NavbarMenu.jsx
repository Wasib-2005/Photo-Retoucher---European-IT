import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router";

const NavbarMenu = ({ onItemClick }) => {
  const navClass = ({ isActive }) =>
    `transition-colors hover:text-[#0041FF] flex items-center py-1 ${
      isActive ? "text-[#0041FF] font-semibold" : ""
    }`;

  return (
    <>
      <NavLink
        to="/services"
        onClick={onItemClick}
        className={({ isActive }) =>
          `transition-colors hover:text-[#0041FF] flex items-center gap-1.25 py-1  font-semibold ${
            isActive ? "text-[#0041FF]" : "text-black"
          }`
        }
      >
        <span>Our Services</span>
        <IoIosArrowDown size={17} />
      </NavLink>

      <NavLink to="/about" onClick={onItemClick} className={navClass}>
        About us
      </NavLink>
      <NavLink to="/portfolio" onClick={onItemClick} className={navClass}>
        Portfolio
      </NavLink>
      <NavLink to="/how-it-works" onClick={onItemClick} className={navClass}>
        How it works
      </NavLink>
      <NavLink to="/pricing" onClick={onItemClick} className={navClass}>
        Pricing
      </NavLink>
      <NavLink to="/blog" onClick={onItemClick} className={navClass}>
        Blog
      </NavLink>
      <NavLink to="/contact" onClick={onItemClick} className={navClass}>
        Contact us
      </NavLink>
    </>
  );
};

export default NavbarMenu;