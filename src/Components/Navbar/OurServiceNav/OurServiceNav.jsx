import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router";
import ServicesContext from "../../../Context/Services/ServicesContext";

const OurServiceNav = ({ onItemClick, navClass }) => {
  const { services } = useContext(ServicesContext);
  const [ourServiceNavOpen, setOurServiceNavOpen] = useState(false);
  const { pathname } = useLocation();

  const locationArray = pathname.split("/");

  const isNavActive = ourServiceNavOpen || locationArray.includes("service");

  return (
    <div className=" w-full lg:w-auto text-left">
      <button
        type="button"
        onClick={() => setOurServiceNavOpen((prev) => !prev)}
        className="flex items-center justify-between lg:justify-start w-full lg:w-auto py-1 gap-1 focus:outline-none cursor-pointer"
      >
        <span
          className={`font-medium ${
            isNavActive ? "text-[#0041FF]" : "text-[#1B263B]"
          }`}
        >
          Our Services
        </span>
        <IoIosArrowDown
          className={`transform transition-transform duration-300 ${
            isNavActive ? "text-[#0041FF]" : "text-[#1B263B]"
          } ${ourServiceNavOpen ? "rotate-180" : ""}`}
          size={17}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out flex flex-col md:absolute bg-white md:border md:border-gray-300/50 md:rounded-2xl ${
          ourServiceNavOpen
            ? "grid-rows-[1fr] opacity-100 pointer-events-auto"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden p-2 pl-5 md:pl-2 flex flex-col">
          {services?.map((service, i) => (
            <NavLink
              to={`service/${service.path}`}
              key={`navOurService-${i}`}
              onClick={() => {
                setOurServiceNavOpen(false);
                if (onItemClick) onItemClick();
              }}
              className={navClass}
            >
              {service.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServiceNav;
