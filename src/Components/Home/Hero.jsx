import { CustomCarousel } from "./CustomCarousel";
import StarStar from "../../assets/StarStar.svg";
import Line from "../../assets/Line.svg";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import ImgIcon from "../../assets/ImgIcon.svg";
import SmileFaceIcon from "../../assets/SmileFaceIcon.svg";
import Left_crave from "../../assets/Left_crave.svg";

const Ellipse = [
  "/Ellipse/Ellipse_1.png",
  "/Ellipse/Ellipse_2.png",
  "/Ellipse/Ellipse_3.png",
  "/Ellipse/Ellipse_4.png",
  "/Ellipse/Ellipse_5.png",
];

const Hero = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-white pt-10 pb-20 z-0">
      <img
        className="absolute bottom-0 left-0 max-w-[15%] pointer-events-none select-none -z-10"
        src={Left_crave}
        alt=""
      />
      <div className=" px-4 md:px-12 lg:px-20 relative z-10 flex flex-col-reverse md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-5">
            {/* Badge */}
            <div className="bg-[#0041FF]/10 w-fit flex gap-1 px-2.5 py-3.25 text-[12px] rounded-[44px] items-center">
              <img src={StarStar} alt="Star" width={24} />
              <h2 className="text-[#0041FF] font-semibold">
                PROFESSIONAL IMAGE EDITING SERVICE
              </h2>
            </div>

            {/* Title */}
            <h3 className="flex flex-col text-2xl md:text-3xl lg:text-6xl font-semibold max-w-150 text-[#1B263B] lg:leading-18">
              <span>Get perfectly edited images in as little as</span>
              <span className="w-fit">
                <span className="text-[#0041FF]">6 hours</span>
                <img src={Line} alt="" className="w-auto" />
              </span>
            </h3>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                to="/"
                className="flex md:w-[192px] h-[52px] bg-[#0041FF] hover:bg-[#0036d9] rounded-lg text-white items-center justify-center gap-2 font-medium transition-colors shrink-0"
              >
                <span>Get My Image Edit</span>
                <FaArrowRight />
              </Link>
              <Link
                to="/"
                className="flex md:w-[192px] h-[52px] text-[#0041FF] border border-[#0041FF] hover:border-[#0041FF]/30 hover:bg-[#0041FF]/40 hover:text-white rounded-lg items-center justify-center gap-2 font-medium transition-colors shrink-0"
              >
                <span>Get Started Free</span>
                <FaArrowRight />
              </Link>
            </div>

            {/* Description */}
            <p className="max-w-150 text-base md:text-[20px] text-gray-600">
              From simple backgrounds to complex editing, we deliver
              pixel-perfect results for e-commerce, photography and brands.
            </p>

            {/* Ellipse/Avatar List */}
            <div className="md:flex items-center gap-1">
              <div className="flex items-center -space-x-2.5 mt-2">
                {Ellipse.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`User ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <p className="text-sm md:text-[20px] text-[#1B263B]">
                Trusted by 4,200+ businesses{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Right side carousel */}
        <div className="w-full md:w-1/2 ">
          <CustomCarousel />
        </div>
      </div>

      <div className="mt-10 lg:mt-20 px-4 md:px-12 lg:px-20 relative z-10">

        <div className="flex justify-between flex-col md:flex-row flex-wrap bg-[#011045] text-lg md:text-xl font-bold lg:text-3xl text-white rounded-2xl p-5 md:px-10 md:py-12 gap-4">
          <div className="flex gap-1 md:gap-4 items-center">
            <img src={ImgIcon} alt="" />
            <div>
              <p>50,000+</p>
              <p className="text-[10px] md:text-[12px] lg:text-[16px] font-normal">
                Image Edited Daily
              </p>
            </div>
          </div>

          <div className="w-[2px] bg-[#0041FF] self-stretch my-2 hidden md:inline" />

          <div className="flex gap-1 md:gap-4 items-center">
            <img src={ImgIcon} alt="" />
            <div>
              <p>42,000+</p>
              <p className="text-[10px] md:text-[12px] lg:text-[16px] font-normal">
                Happy Clients
              </p>
            </div>
          </div>

          <div className="w-[2px] bg-[#0041FF] self-stretch my-2 hidden md:inline" />

          <div className="flex gap-1 md:gap-4 items-center">
            <img src={SmileFaceIcon} alt="" />
            <div>
              <p>98%</p>
              <p className="text-[10px] md:text-[12px] lg:text-[16px] font-normal">
                Client Satisfaction
              </p>
            </div>
          </div>

          <div className="w-[2px] bg-[#0041FF] self-stretch my-2 hidden md:inline" />

          <div className="flex gap-1 md:gap-4 items-center">
            <img src={ImgIcon} alt="" />
            <div>
              <p>6-24h</p>
              <p className="text-[10px] md:text-[12px] lg:text-[16px] font-normal">
                Average Turnarounds
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
