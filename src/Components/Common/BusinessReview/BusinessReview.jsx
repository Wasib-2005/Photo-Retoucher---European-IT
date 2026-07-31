import BusinessCarousel from "./BusinessCarousel/BusinessCarousel";

const BusinessReview = () => {
  return (
    <div className="relative p-9 px-11 pb-28 mb-69 bg-[linear-gradient(135deg,#23178B_0%,#205CD4_100%)] rounded-2xl text-white hidden lg:flex flex-col">
      <h2 className="text-[16px] font-medium text-left text-blue-200 uppercase tracking-wider">
        Testimonial
      </h2>

      <div className="text-left flex flex-col md:flex-row justify-between items-start mt-2 gap-6 mb-25">
        <h1 className="text-[48px] font-bold flex flex-col leading-tight">
          <span>Business</span>
          <span>Review</span>
        </h1>

        <p className="text-[18px] md:w-[33%] text-blue-100 text-left md:text-right">
          Explore customer reviews to understand business reputations, with
          insights on customer satisfaction, reliability, and service quality
          for better decision-making.
        </p>
      </div>

      <div className="absolute left-11 right-11 bottom-0 translate-y-2/3 z-10 ">
        <BusinessCarousel />
      </div>
    </div>
  );
};

export default BusinessReview;
