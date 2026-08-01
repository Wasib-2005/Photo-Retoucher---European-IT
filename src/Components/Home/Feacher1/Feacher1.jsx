import Top_carve from "../../../assets/Top_carve.svg";
import Bottom_carve from "../../../assets/Bottom_carve.svg";
import { FaArrowRight } from "react-icons/fa";
import Feacher1Cart from "./Feacher1Cart";
import BusinessReview from "../../Common/BusinessReview/BusinessReview";

const Feacher1 = () => {
  const cartDataFeacher1 = [
    {
      tiltle: "Edited by hand",
      img: "/Fact/Fact1.svg",
      dec: "Every edit is done by a professional retouches, not a machine, for a complete control and the cleanest edges.",
    },
    {
      tiltle: "Pixel perfect results",
      img: "/Fact/Fact2.svg",
      dec: "Our designers can handle even the most complex cutouts — no straight polygonal lasso lines where they shouldn’t be.",
    },
    {
      tiltle: "24/7 support",
      img: "/Fact/Fact3.svg",
      dec: "Your dedicated customer support team is ready to help, whenever you need us.",
    },
    {
      tiltle: "6-hour turnaround",
      img: "/Fact/Fact4.svg",
      dec: "Get your images back in as little as six hours, even if you have thousands of shots to get through.",
    },
    {
      tiltle: "Under budget",
      img: "/Fact/Fact5.svg",
      dec: "Edits start at just $0.25 per image, way less than it would cost to do it in-house. #0041FF view our pricing options #",
    },
    {
      tiltle: "Every format",
      img: "/Fact/Fact6.svg",
      dec: "Get consistent, quality images in every format you need.",
    },
  ];

  return (
    <section className="bg-[#f0f3fa] relative overflow-hidden py-12 md:py-25 text-[#1B263B] ">
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
      <div className="mx-auto px-4 md:px-12 lg:px-20 relative z-10 text-center">
        <div className="flex flex-col justify-center items-center gap-5 md:gap-10">
          <h2 className="text-[#0041FF] font-medium text-[14px] md:text-[16px]">
            WE’RE YOUR VIRTUAL
          </h2>

          <h2 className="text-[#1B263B] text-[20px] md:text-[48px] max-w-190 md:max-w-220 font-semibold">
            <span>
              Professional <span className="text-[#0041FF]">image editing</span>{" "}
              services to grow your business
            </span>
          </h2>

          <p className="max-w-100 md:max-w-140 text-[14px] md:text-[20px]">
            From simple clipping paths to advanced photo retouching, we provide
            all the image solution you need.
          </p>

          <div className="h-1.5 w-10 md:w-20 bg-[#0041FF] rounded-2xl" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch lg:px-38">
            {cartDataFeacher1.map((cart, i) => (
              <Feacher1Cart key={i} cart={cart} />
            ))}
          </div>
        </div>

        <div className=" pt-5 md:pt-10 lg:pt-20 ">
          <BusinessReview />
        </div>
      </div>
    </section>
  );
};

export default Feacher1;
