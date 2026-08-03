import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router";
import OurServiceNav from "./OurServiceNav/OurServiceNav";

const NavbarMenu = ({ onItemClick }) => {
  const navClass = ({ isActive }) =>
    `transition-colors hover:text-[#0041FF] flex items-center py-1 ${
      isActive ? "text-[#0041FF] font-semibold" : ""
    }`;

  return (
    <>
      <OurServiceNav onItemClick={onItemClick} navClass={navClass}/>

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
