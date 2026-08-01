import { Link } from "react-router";
import FooterImg from "../../../assets/FooterImg.svg";
import YourBestWorkOurEdting from "../../../assets/YourBestWorkOurEdting.svg";
import { FaArrowRight } from "react-icons/fa";

const Pices1 = () => {
  return (
    <div className="relative mt-20">
      <div className="md:flex h-45 md:h-90 ">
        <div className="w-full h-45 md:h-full">
          <img
            className="h-full object-cover object-left rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl"
            src={FooterImg}
            alt=""
          />
        </div>
        <div className="bg-[#23168b] h-7 md:hidden"/>
        <div className="w-full h-45 md:h-full overflow-hidden">
          <img
            className="h-full object-cover object-right rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl"
            src={FooterImg}
            alt=""
          />
        </div>
      </div>
      <div className="absolute top-25 md:top-0  w-full h-full flex flex-col md:flex-row gap-4 md:gap-35 items-center justify-center text-white p-10 md:px-50 md:py-6">
        <div className=" w-full md:w-1/2 flex flex-col gap-3">
          <div>
            <img src={YourBestWorkOurEdting} alt="" />
          </div>
          <h2 className="md:text-[40px] font-semibold">
            Read to save time and scale your business?
          </h2>
          <p className=" md:w-[65%] text-[12px] md:text-[16px]">
            Join thousands of businesses that trust Path for high-quality image
            editing, every time.
          </p>
        </div>

        <div className=" md:h-full md:w-1 bg-[#736cb5]" />

        <div className="flex flex-col  md:w-1/2 w-full gap-4">
          <h2 className=" md:text-[40px] font-semibold">Let’s get started</h2>
          <p className="text-[12px] md:text-[16px] md:w-[50%]">
            Upload your images and receive your first edit within 6 hour..
          </p>
          <button>
            <Link
              to="/"
              className="flex md:w-[192px] h-8 md:h-[52px] text-[12px] md:text-[16px] text-[#0041FF]  bg-white border hover:border-[#0041FF]/30 hover:bg-[#0041FF] hover:text-white rounded-lg items-center justify-center gap-2 font-medium transition-colors shrink-0"
            >
              <span>Get Started Free</span>
              <FaArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pices1;
