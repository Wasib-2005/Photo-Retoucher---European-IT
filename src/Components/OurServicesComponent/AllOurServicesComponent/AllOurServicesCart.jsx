import { Link } from "react-router";
import ImageCompare from "../../../Utility/ImageCompare";
import { FaArrowRight } from "react-icons/fa";

const AllOurServicesCart = ({ allOurServicesCart, totalCart, index }) => {
  const isLastOneOdd = totalCart % 2 === 1 && index + 1 === totalCart;
  console.log(index + 1, totalCart, isLastOneOdd);
  return (
    <div
      className={`flex flex-col md:flex-row p-4 w-fit border border-[#0041FF] rounded-xl text-[#1B263B] text-left gap-5 items-center ${isLastOneOdd && " md:col-span-2 justify-self-center "}`}
    >
      <div className="min-w-60 h-56 border border-[#0041FF] rounded-xl">
        <ImageCompare
          url1={allOurServicesCart.img.rawImg}
          url2={allOurServicesCart.img.edited}
        />
      </div>

      <div className="flex flex-col gap-3">
        <h1 className=" md:text-[20px] font-bold md:font-medium">
          {allOurServicesCart?.title}
        </h1>
        <p className="text-[12px] w-67">{allOurServicesCart?.dec}</p>
        <p className="font-medium text-[#0041FF]">
          Starting at {allOurServicesCart?.price} per image
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to="/"
            className="flex bg-[#0041FF] hover:bg-[#0036d9] rounded-lg text-white items-center justify-center gap-1 transition-colors shrink-0 px-3 py-2 text-[12px]"
          >
            <span>Get My Image Edit</span>
            <FaArrowRight />
          </Link>
          <Link
            to="/"
            className="flex text-[#0041FF] border border-[#0041FF] hover:border-[#0041FF]/30 hover:bg-[#0041FF]/40 hover:text-white rounded-lg items-center justify-center gap-1 transition-colors shrink-0 px-3 py-2 text-[12px]"
          >
            <span>Get Started Free</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllOurServicesCart;
