import Right_crave from "../../assets/Right_crave.svg";
import InfoSectionImg from "../../assets/InfoSectionImg.png";
import RocketIcon from "../../assets/RocketIcon.svg";
import MarkIcon from "../../assets/MarkIcon.svg";
import SupportIcon from "../../assets/SupportIcon.svg";
import RocketIcon2 from "../../assets/RocketIcon2.svg";
import CheckboxCircleFill from "../../assets/CheckboxCircleFill.svg";

const InfoSection = () => {
  return (
    <div className="bg-[#f0f3fa] relative pt-5 md:pt-10 lg:pt-20">
      <img
        className="absolute top-0 right-0 max-w-[15%] pointer-events-none select-none z-10"
        src={Right_crave}
        alt=""
      />

      <div className=" bg-[#f0f3fa] px-4 md:px-12 lg:px-20 absolute w-full pb-5 md:pb-10 lg:pb-20">
        <div className="relative z-20 flex flex-col lg:flex-row md:gap-6 lg:gap-11 justify-between w-full">
          <div className="md:w-1/2">
            <img src={InfoSectionImg} alt="" />
          </div>

          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-[#0041FF] font-medium text-[13px] md:text-[16px] pt-7">
              WE’RE YOUR VIRTUAL
            </h2>

            <h1 className="flex flex-col text-2xl md:text-[36px] lg:text-[48px] font-bold">
              <span className="text-[#1B263B]">Photo Editing and</span>
              <span className="text-[#0041FF]">Design Studio</span>
            </h1>

            <p className="max-w-150 text-[13px] md:text-[20px]">
              Professional photo editing services for e-commerce, product,
              apparel, headshot, and portrait photography. We’re available 24/7,
              with turnarounds in as little as six hours.
            </p>

            <div className="w-[9%] h-2 bg-[#0041FF] rounded-4xl" />

            <div className="flex gap-4 items-center w-[80%] md:w-[50%]">
              <img src={RocketIcon} alt="" />
              <div>
                <h2 className="text-[#1B263B] md:text-[20px] font-semibold">
                  Fast Turnaround
                </h2>
                <p className="text-[13px] md:text-[16px]">
                  Get your edited image within 6-24 hours. Rush Delivery
                  available.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center w-[80%] md:w-[50%]">
              <img src={MarkIcon} alt="" />
              <div>
                <h2 className="text-[#1B263B] md:text-[20px] font-semibold">
                  Pixel-Perfect Quality
                </h2>
                <p className="text-[13px] md:text-[16px]">
                  Get your edited image within 6-24 hours. Rush Delivery
                  available.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center w-[80%] md:w-[50%]">
              <img src={SupportIcon} alt="" />
              <div>
                <h2 className="text-[#1B263B] md:text-[20px] font-semibold">
                  24/7 Support
                </h2>
                <p className="text-[13px] md:text-[16px]">
                  Get your edited image within 6-24 hours. Rush Delivery
                  available.
                </p>
              </div>
            </div>

            <div className="flex justify-around bg-[#ededff] border border-[#0041FF] p-7 rounded-xl">
              <div className="flex items-center gap-5">
                <img src={RocketIcon2} alt="" />
                <div>
                  <h2>STARTING AT</h2>
                  <h3 className=" text-[#0041FF] text-[28px] font-semibold">
                    $0.25
                  </h3>
                </div>
              </div>
              <div className="w-px bg-[#4C515B]/60 " />

              <div>
                <div className="flex items-center gap-2.5">
                  <img src={CheckboxCircleFill} alt="" />
                  <p>No Setup Fee</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <img src={CheckboxCircleFill} alt="" />
                  <p>Bulk Discounts</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <img src={CheckboxCircleFill} alt="" />
                  <p>Satisfaction Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
