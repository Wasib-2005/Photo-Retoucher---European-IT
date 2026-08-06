import { Link } from "react-router";
import ImageCompare from "../../../../Utility/ImageCompare";
import { FaArrowRight } from "react-icons/fa";

const HowItWorkCarouselCart = ({ ourService }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-8 items-center rounded-2xl border border-[#0041FF]  w-89 md:w-auto md:h-100 p-6">
      <div className="border border-[#0041FF] h-full w-85 md:w-110 rounded-2xl ">
        <ImageCompare
          url1={ourService?.img?.rawImg}
          url2={ourService?.img?.edited}
        />
      </div>

      <div className=" flex flex-col w-fit gap-2">
        <div className="max-w-99 flex flex-col gap-1">
          <h1 className="text-[18px] md:text-[28px] text-[#1B263B] font-medium">
            {ourService?.title}
          </h1>
          <p className="text-[12px] md:text-[14px] text-[#1B263B]">
            {ourService?.dec}
          </p>

          <p className="text-[#0041FF] text-[17px] md:text-[20px] font-medium">
            Starting at <span>{ourService?.price}</span> per image
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 ">
          <Link
            to="/"
            className="flex bg-[#0041FF] hover:bg-[#0036d9] rounded-lg text-white items-center justify-center gap-1 transition-colors shrink-0 px-3 py-2 text-[16px]"
          >
            <span>Get My Image Edit</span>
            <FaArrowRight />
          </Link>
          <Link
            to="/"
            className="flex text-[#0041FF] border border-[#0041FF] hover:border-[#0041FF]/30 hover:bg-[#0041FF]/40 hover:text-white rounded-lg items-center justify-center gap-1 transition-colors shrink-0 px-3 py-2 text-[16px]"
          >
            <span>Get Started Free</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorkCarouselCart;