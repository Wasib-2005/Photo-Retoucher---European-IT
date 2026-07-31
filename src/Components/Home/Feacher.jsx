import Top_carve from "../../assets/Top_carve.svg";
import Bottom_carve from "../../assets/Bottom_carve.svg";
import HomeCart from "./HomeCart";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const Feacher = () => {
  const homeCartData = [
    {
      img: {
        rawImg: "/DontKnowWhat/DontKnowWhatRaw.png",
        edited: "/DontKnowWhat/DontKnowWhatEdited.png",
      },
      title: "Clipping path",
      dec: "Enhance property photos with sky replacement, color correction",
    },
    {
      img: {
        rawImg: "/Guitar/GuitarRaw.png",
        edited: "/Guitar/GuitarEdited.png",
      },
      title: "Background removal",
      dec: "Enhance property photos with sky replacement, color correction",
    },
    {
      img: {
        rawImg: "/Girl/GirlRaw.png",
        edited: "/Girl/GirlEdited.png",
      },
      title: "Background removal",
      dec: "Enhance property photos with sky replacement, color correction",
    },
    {
      img: {
        rawImg: "/DishWasher/DishWasherRaw.png",
        edited: "/DishWasher/DishWasherEdited.png",
      },
      title: "Ghost Mannequin",
      dec: "Enhance property photos with sky replacement, color correction",
    },
    {
      img: {
        rawImg: "/public/Cort/CortBefore.png",
        edited: "/public/Cort/CortAfter.png",
      },
      title: "Image Masking",
      dec: "Enhance property photos with sky replacement, color correction",
    },
    {
      img: {
        rawImg: "/public/Women/WomenBefore.png",
        edited: "/public/Women/WomenAfter.png",
      },
      title: "Jewelry Retouching",
      dec: "Enhance property photos with sky replacement, color correction",
    },
    {
      img: {
        rawImg: "/public/Ring/RingBefore.png",
        edited: "/public/Ring/RingAfter.png",
      },
      title: "Photo Ecommerce Photo",
      dec: "Enhance property photos with sky replacement, color correction",
    },
    {
      img: {
        rawImg: "/public/CarLogo/CarLogoBefore.png",
        edited: "/public/CarLogo/CarLogoAfter.png",
      },
      title: "Product Photo",
      dec: "Enhance property photos with sky replacement, color correction",
    },
  ];

  return (
    <section className="bg-[#f0f3fa] relative overflow-hidden py-12 md:py-25 text-[#1B263B]">
      {/* Top Right Decorative SVG */}
      <img
        src={Top_carve}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 max-w-[15%] pointer-events-none select-none z-0"
      />

      {/* Bottom Left Decorative SVG */}
      <img
        src={Bottom_carve}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 max-w-[15%] pointer-events-none select-none z-0"
      />

      {/* Main Content Container */}
      <div className=" mx-auto px-4 md:px-12 lg:px-20 relative z-10 text-center">
        <div className="flex flex-col justify-center items-center gap-5 md:gap-10">
          <h2 className="text-[#0041FF] font-medium text-[14px] md:text-[16px]">
            WE’RE YOUR VIRTUAL
          </h2>

          <h2 className="text-[#1B263B] text-[20px] md:text-[48px] max-w-190 md:max-w-220 font-semibold ">
            <span>Professional image editing services to grow your </span>
            <span className="text-[#0041FF]">business</span>
          </h2>

          <p className="max-w-100 md:max-w-140 text-[14px] md:text-[20px]">
            From simple clipping paths to advanced photo retouching, we provide
            all the image solution you need.
          </p>

          <div className="h-1.5 w-20 bg-[#0041FF] rounded-2xl" />

          <div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-8 ">
            {homeCartData.map((cart) => (
              <div>
                <HomeCart cart={cart} />
              </div>
            ))}
          </div>

          <Link
            to="/"
            className="flex md:w-[192px] h-[52px] bg-[#0041FF] hover:bg-[#0036d9] rounded-lg text-white items-center justify-center gap-2 font-medium transition-colors shrink-0"
          >
            <span>View All Services</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feacher;
