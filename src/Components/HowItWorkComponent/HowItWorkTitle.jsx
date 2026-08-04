import { Link } from "react-router";
import HowItWorkTopImg from "../../assets/HowItWorkTopImg.svg";
import { FaArrowRight } from "react-icons/fa";
const HowItWorkTitle = () => {
  return (
    <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20 relative z-10 text-left bg-[#f3f6fd] ">
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <div className="flex flex-col gap-2 md:gap-6">
          <h2 className="text-[12px] text-[#0041FF]">HOW IT WORKS</h2>
          <h1 className="text-[38px] md:text-[48px] lg:text-[58px] text-[#1B263B] font-semibold max-w-133">
            The simple way to get{" "}
            <span className="text-[#0041FF]">pixel perfect</span> photo edits
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-137">
            Here’s how we make it easy to get fast, affordable product photo
            edits — all done by hand by pro designers.
          </p>
          <button className="">
            <Link
              to="/"
              className="flex p-5 w-fit h-[52px] bg-[#0041FF] hover:bg-[#0036d9] rounded-lg text-white items-center justify-center gap-2 font-medium transition-colors shrink-0"
            >
              <span>Get My Image Edit</span>
              <FaArrowRight />
            </Link>
          </button>
        </div>
        <div className=" md:w-1/2">
          <img className="w-full" src={HowItWorkTopImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorkTitle;
