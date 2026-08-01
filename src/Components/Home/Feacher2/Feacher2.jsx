import { Link } from "react-router";
import Left_crave from "../../../assets/Left_crave.svg";
import { FaArrowRight } from "react-icons/fa";

const Feacher2 = () => {
  return (
    <section className="bg-[#f0f3fa] relative overflow-hidden py-12 md:py-25 text-[#1B263B] ">
      {/* Bottom Left Decorative SVG */}
      <img
        src={Left_crave}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 max-w-[15%] pointer-events-none select-none z-0"
      />

      {/* Main Content Container */}
      <div className="mx-auto px-4 md:px-12 lg:px-20 relative z-10 text-center">
        <div className="flex flex-col justify-center items-center gap-5 md:gap-10">
          <h2 className="text-[#0041FF] font-medium text-[14px] md:text-[16px]">
            PERFECT FOR EVERYONE
          </h2>

          <h2 className="text-[#1B263B] text-[20px] md:text-[48px] max-w-190 md:max-w-260 font-semibold">
            <span>
              You don’t have to do everything{" "}
              <span className="text-[#0041FF]">yourself</span>
            </span>
          </h2>

          <p className="max-w-100 md:max-w-140 text-[14px] md:text-[20px]">
            From simple clipping paths to advanced photo retouching, Outsourced
            image editing services are ideal if you are…
          </p>

          <div className="h-1.5 w-10 md:w-20 bg-[#0041FF] rounded-2xl" />

          <div className="flex flex-col md:flex-row gap-6 ">
            <div className="bg-white flex flex-col p-5 md:px-13 md:py-9 border border-[#0041FF] rounded-2xl ">
              <img src="/public/Fact_2/Fact_2_1.svg" alt="" />
              <h2 className=" lg:text-[20px] font-medium text-black">
                An ecommerce pro
              </h2>
              <p className="w-70">
                who wants to use your time to move the needle instead of
                fiddling around in Photoshop
              </p>
            </div>

            <div className="flex flex-col gap-6 md:text-left">
              <div className="bg-white flex flex-col md:flex-row px-13 py-9 border border-[#0041FF] rounded-2xl gap-3 items-center">
                <img src="/public/Fact_2/Fact_2_2.svg" alt="" />

                <div>
                  <h2 className=" lg:text-[20px] font-medium text-black">
                    A busy sports photographer
                  </h2>
                  <p className="w-60">
                    with batches of edits due from a recent event
                  </p>
                </div>
              </div>

              <div className="bg-white flex flex-col md:flex-row px-13 py-9 border border-[#0041FF] rounded-2xl gap-3 items-center">
                <img src="/public/Fact_2/Fact_2_3.svg" alt="" />

                <div>
                  <h2 className=" lg:text-[20px] font-medium text-black">
                    An ecommerce pro
                  </h2>
                  <p className="w-60">
                    who wants to use your time to move the needle instead of
                    fiddling around in Photoshop
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/"
            className=" flex w-[192px] h-[52px] bg-[#0041FF] hover:bg-[#0036d9] rounded-lg text-white items-center justify-center gap-2 font-medium transition-colors shrink-0"
          >
            <span>Get Started Free</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feacher2;
