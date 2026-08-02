import { Link } from "react-router";
import FooterImg from "../../../assets/FooterImg.svg";
import YourBestWorkOurEdting from "../../../assets/YourBestWorkOurEdting.svg";
import { FaArrowRight } from "react-icons/fa";

const Pices1 = () => {
  return (
    <div className="px-4 md:px-12 lg:px-20 relative mt-12 md:mt-20">
      <div className="relative min-h-[420px] md:min-h-[360px] w-full rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:px-16 md:py-8 text-white">
        <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
          <img
            className="w-full h-1/2 md:h-full md:w-1/2 object-cover object-left"
            src={FooterImg}
            alt=""
          />
          <div className="bg-[#23168b] h-2 md:hidden" />
          <img
            className="w-full h-1/2 md:h-full md:w-1/2 object-cover object-right"
            src={FooterImg}
            alt=""
          />
        </div>

        <div className="relative z-10 w-full flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between my-auto">
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <div>
              <img
                src={YourBestWorkOurEdting}
                alt=""
                className="max-w-[200px] md:max-w-none"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-semibold leading-tight">
              Ready to save time and scale your business?
            </h2>
            <p className="text-xs sm:text-sm md:text-base opacity-90">
              Join thousands of businesses that trust Path for high-quality
              image editing, every time.
            </p>
          </div>

          {/* Divider Line */}
          <div className="w-full md:w-px h-px md:h-48 bg-[#736cb5] shrink-0" />

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-semibold leading-tight">
              Let’s get started
            </h2>
            <p className="text-xs sm:text-sm md:text-base opacity-90">
              Upload your images and receive your first edit within 6 hours.
            </p>
            <div>
              <Link
                to="/"
                className="inline-flex w-full sm:w-[192px] h-10 md:h-[52px] text-xs sm:text-sm md:text-base text-[#0041FF] bg-white border hover:border-[#0041FF]/30 hover:bg-[#0041FF] hover:text-white rounded-lg items-center justify-center gap-2 font-medium transition-colors"
              >
                <span>Get Started Free</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pices1;
