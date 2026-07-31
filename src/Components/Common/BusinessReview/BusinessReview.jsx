import BusinessCarousel from "./BusinessCarousel/BusinessCarousel";

const BusinessReview = () => {
  return (
    <div className="p-9 px-11 pb-25 bg-[linear-gradient(135deg,#23178B_0%,#205CD4_100%)] rounded-2xl text-white">
      <h2 className="text-[16px] font-medium text-left">Testimonial</h2>

      <div className="text-left flex justify-between">
        <h1 className="text-[48px] font-bold flex flex-col">
          <span>Business</span>
          <span>Review</span>
        </h1>

        <p className="text-[20px] w-[33%] text-right">
          Explore customer reviews to understand business reputations, with
          insights on customer satisfaction, reliability, and service quality
          for better decision-making.
        </p>
      </div>
      <div className=" absolute mt-10">
        <BusinessCarousel
      </div>
    </div>
  );
};

export default BusinessReview;
