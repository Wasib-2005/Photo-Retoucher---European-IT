import { useContext } from "react";
import Bottom_carve from "../../../assets/Bottom_carve.svg";
import Left_crave from "../../../assets/Left_crave.svg";
import ServicesContext from "../../../Context/Services/ServicesContext";
import FooterIcon from "../../../assets/FooterIcon.svg";
import FooterFacebook from "../../../assets/FooterFacebook.svg";
import FooterInsta from "../../../assets/FooterInsta.svg";
import FooterLinkdin from "../../../assets/FooterLinkdin.svg";
import FooterPinster from "../../../assets/FooterPinster.svg";
import Gard from "../../../assets/Gard.svg";
import { Link, NavLink } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Pices2 = () => {
  const navClass = ({ isActive }) =>
    `transition-colors hover:text-[#0041FF] flex items-center gap-1.5 py-1 ${
      isActive ? "text-[#0041FF] font-semibold" : ""
    }`;

  const { services } = useContext(ServicesContext);

  return (
    <section className="bg-[#f0f3fa] relative overflow-hidden py-12 md:py-20 text-[#1B263B]">
      <img
        src={Left_crave}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 max-w-[15%] pointer-events-none select-none z-0"
      />
      <img
        src={Bottom_carve}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 max-w-[15%] pointer-events-none select-none z-0"
      />

      <div className="mx-auto px-6 md:px-12 lg:px-16 relative z-10 ">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10">
          <div className="w-full md:w-1/4 flex flex-col gap-5 md:pr-6">
            <div>
              <img src={FooterIcon} alt="Footer Logo" />
            </div>
            <p className="text-sm leading-relaxed">
              Your virtual photo editing and design studio. Fast, reliable, and
              built for your success.
            </p>
            <div className="flex gap-3 pt-2">
              <img src={FooterFacebook} alt="Facebook" />
              <img src={FooterInsta} alt="Instagram" />
              <img src={FooterPinster} alt="Pinterest" />
              <img src={FooterLinkdin} alt="LinkedIn" />
            </div>
          </div>

          <div className="hidden md:block bg-[#b5b9bd] w-px self-stretch" />

          <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
            {/* COMPANY */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[#1B263B] font-medium text-[18px] uppercase">
                Company
              </h2>
              <div className="flex flex-col text-sm">
                <NavLink to="/about" className={navClass}>
                  About
                </NavLink>
                <NavLink to="/how-it-works" className={navClass}>
                  How it works
                </NavLink>
                <NavLink to="/blog" className={navClass}>
                  Blog
                </NavLink>
                <NavLink to="/testimonials" className={navClass}>
                  Testimonials
                </NavLink>
                <NavLink to="/careers" className={navClass}>
                  Careers
                </NavLink>
                <NavLink to="/contact" className={navClass}>
                  Contact
                </NavLink>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-[#1B263B] font-medium text-[18px] uppercase">
                Services
              </h2>
              <div className="flex flex-col text-sm">
                {services?.map((e, index) => (
                  <NavLink
                    key={e?.path || index}
                    to={e?.path}
                    className={navClass}
                  >
                    {e?.name}
                  </NavLink>
                ))}
                <NavLink to="/" className={navClass}>
                  <span>View all services</span>
                  <FaArrowRight size={12} />
                </NavLink>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
              <h2 className="text-[#1B263B] font-medium text-[18px] uppercase">
                Resources
              </h2>
              <div className="flex flex-col text-sm">
                <NavLink to="/pricing" className={navClass}>
                  Pricing
                </NavLink>
                <NavLink to="/credits" className={navClass}>
                  Credits
                </NavLink>
                <NavLink to="/help-center" className={navClass}>
                  Help Center
                </NavLink>
                <NavLink to="/affiliate" className={navClass}>
                  Affiliate Program
                </NavLink>
              </div>
            </div>
          </div>

          <div className="hidden md:block bg-[#b5b9bd] w-px self-stretch" />

          <div className="w-full md:w-1/4 flex flex-col gap-3">
            <h2 className="text-[#1B263B] font-medium text-[18px] uppercase">
              Services
            </h2>

            <div className="flex flex-col gap-2.5">
              <p className="flex items-center gap-1">
                <MdOutlineEmail size={18} />
                <a href="mailto:hello@pathedits.com">hello@pathedits.com</a>
              </p>

              <p className="flex items-center gap-1">
                <MdOutlineLocalPhone size={18} />
                <a href="tel:855737-0370">US toll-free: (855) 737-0370</a>
              </p>

              <p className="flex items-center gap-1">
                <MdOutlineLocalPhone size={18} />
                <a href="tel:+448081960370">UK toll-free: +44 8081 960370</a>
              </p>

              <p className="flex items-center gap-1">
                <IoLocationOutline size={18} />
                <a href="https://en.wikipedia.org/wiki/HTTP_404">
                  heeeeeello@gamil.com
                </a>
              </p>
            </div>

            <div className="px-4 py-5 flex items-center gap-2.5 border border-[#0041FF] bg-[#dcdcff] rounded-2xl w-fit">
              <div>
                <img src={Gard} alt="" />
              </div>
              <div>
                <h2 className=" text-[#0041FF] ">100% Security Guaranteed</h2>
                <p className="text-[#1B263B] text-[14px]">
                  Your images are safe with us.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-[#b5b9bd] mt-10" />
        <div className="mt-16 text-black flex flex-col md:flex-row justify-between gap-5">
          <p className="">
            Path is a brand of Outsource Experts Ltd. © 2025 All rights
            reserved.
          </p>
          <div className=" flex flex-col md:flex-row justify-center md:gap-5">
            <Link className=" hover:text-[#0041FF]">Privacy policy</Link>
            <div className="hidden md:block bg-[#b5b9bd] w-px self-stretch" />
            <Link className=" hover:text-[#0041FF]">Terms & Conditions</Link>
            <div className="hidden md:block bg-[#b5b9bd] w-px self-stretch" />
            <Link className=" hover:text-[#0041FF]">Help & Support</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pices2;
