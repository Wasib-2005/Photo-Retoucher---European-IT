import { Link } from "react-router";
import FAQImg from "../../../assets/FAQImg.svg";
import SupportIcon from "../../../assets/SupportIcon.svg";
import { FaArrowRight } from "react-icons/fa";
import FAQ from "./FAQ/FAQ";

const FAQComponent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5">
      <div className=" text-left flex flex-col gap-4 md:w-1/2">
        <h2 className="lgtext-[14px] md:text-[16px] text-[#0041FF] font-medium">
          Frequently Asked Question
        </h2>
        <div>
          <img src={FAQImg} alt="" />

          <h2 className="flex flex-col text-[#1B263B] font-semibold text-[20px] lg:text-[48px]">
            <span>Read our FAQ’s for</span>
            <span className="text-[#0041FF]">Clarification</span>
          </h2>
        </div>

        <p className="text-[14px] md:text-[16px] max-w-116">
          Professional photo editing services for e-commerce, product, apparel,
          headshot, and portrait photography.
        </p>

        <div className="h-1.5 w-7 md:w-16 bg-[#0041FF] rounded-2xl" />

        <div className="bg-[#0041FF]/25 border border-[#0041FF] w-fit rounded-lg p-6 flex items-center gap-5">
          <img src={SupportIcon} alt="" />
          <div>
            <div>
              <h2 className="text-[#1B263B] text-[13px] md:text-[18px] font-semibold">
                Still have question?
              </h2>
              <p className=" text-[#000000]/70 text-[12px] md:text-[14px]">
                Our support team is here to help you.
              </p>
            </div>
            <Link className="flex items-center gap-1 text-[#0041FF]">
              <span>Contact us</span>
              <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <FAQ />
      </div>
    </div>
  );
};

export default FAQComponent;
