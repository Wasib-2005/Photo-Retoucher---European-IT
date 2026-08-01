import Right_crave from "../../assets/Right_crave.svg";
import InfoSectionImg from "../../assets/InfoSectionImg.png";
import RocketIcon from "../../assets/RocketIcon.svg";
import MarkIcon from "../../assets/MarkIcon.svg";
import SupportIcon from "../../assets/SupportIcon.svg";
import RocketIcon2 from "../../assets/RocketIcon2.svg";
import CheckboxCircleFill from "../../assets/CheckboxCircleFill.svg";

const InfoSection = () => {
  return (
    <section className="bg-[#f0f3fa] relative py-12 md:py-16 lg:py-24">
      <img
        className="absolute top-0 right-0 max-w-[15%] pointer-events-none select-none z-10"
        src={Right_crave}
        alt=""
      />

      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <img 
              src={InfoSectionImg} 
              alt="Info Section Illustration" 
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* Text Content Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div>
              <h2 className="text-[#0041FF] font-medium text-xs md:text-sm tracking-wider uppercase mb-1">
                WE’RE YOUR VIRTUAL
              </h2>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-[#1B263B] block">Photo Editing and</span>
                <span className="text-[#0041FF]">Design Studio</span>
              </h1>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Professional photo editing services for e-commerce, product,
              apparel, headshot, and portrait photography. We’re available 24/7,
              with turnarounds in as little as six hours.
            </p>

            <div className="w-12 h-1.5 bg-[#0041FF] rounded-full" />

            {/* Features List */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-start">
                <img src={RocketIcon} alt="" className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-[#1B263B] text-base md:text-lg font-semibold">
                    Fast Turnaround
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Get your edited image within 6-24 hours. Rush Delivery available.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <img src={MarkIcon} alt="" className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-[#1B263B] text-base md:text-lg font-semibold">
                    Pixel-Perfect Quality
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    High-end retouching with meticulous attention to every pixel.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <img src={SupportIcon} alt="" className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-[#1B263B] text-base md:text-lg font-semibold">
                    24/7 Support
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Dedicated support team ready to assist you anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>

            {/* Price Box */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#ededff] border border-[#0041FF] p-6 rounded-xl mt-2">
              <div className="flex items-center gap-4">
                <img src={RocketIcon2} alt="" className="w-8 h-8" />
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block">STARTING AT</span>
                  <span className="text-[#0041FF] text-2xl md:text-3xl font-bold">
                    $0.25
                  </span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-[#4C515B]/30" />

              <div className="flex flex-col gap-1.5 text-xs md:text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <img src={CheckboxCircleFill} alt="" className="w-4 h-4" />
                  <span>No Setup Fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={CheckboxCircleFill} alt="" className="w-4 h-4" />
                  <span>Bulk Discounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={CheckboxCircleFill} alt="" className="w-4 h-4" />
                  <span>Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;