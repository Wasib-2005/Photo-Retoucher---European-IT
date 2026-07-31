import { Link } from "react-router";
import ImageCompare from "../../Utility/ImageCompare";
import { FaArrowRight } from "react-icons/fa";

const HomeCart = ({ cart }) => {
  return (
    <div className="w-64 p-4 border border-[#808080] rounded-2xl flex flex-col gap-2 bg-white h-full">
      <div className=" h-46 border border-[#0041FF] rounded-2xl overflow-hidden">
        <ImageCompare url1={cart?.img?.rawImg} url2={cart?.img?.edited} />
      </div>
      <div className="text-left flex flex-col gap-1 mt-2 flex-1 justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-[#1B263B] font-semibold text-[16px] md:text-[20px]">
            {cart?.title}
          </h1>
          <p className=" text-gray-600 text-[12px] md:text-[16px]">
            {cart?.dec}
          </p>
        </div>
        <Link
          to="#"
          className="flex items-center gap-2 pt-2 text-[#0041FF] text-[14px] md:text-[18px] font-medium mt-auto"
        >
          <span>Learn More</span>
          <FaArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default HomeCart;
