import BusinessReview from "../Common/BusinessReview/BusinessReview";
import CalculatePrice from "../Common/CalculatePrice/CalculatePrice";
import CommonFeacher2 from "../Common/CommonFeacher2";
import FAQComponent from "../Common/FAQComponent/FAQComponent";
import AllOurPhotoEditingServices from "./AllOurPhotoEditingServices/AllOurPhotoEditingServices";
import HowItWorks from "./HowItWorks/HowItWorks";
import ServiceDetialls from "./ServiceDetialls/ServiceDetialls";

const ServiceDetiallsComponents = () => {
  const serviceData = {
    title: "Image masking",
    smallDec: "Remove backgrounds from hair, fur, and difficult borders",
    dec: "Outsource nitty-gritty photo masking work so you can get back to advanced edits and running your business.",
    price: "0.20",
    img: {
      imgRaw: "/Girl1/Girl1Before.png",
      imgEdited: "/Girl1/Girl1After.png",
    },
  };

  return (
    <div>
      <ServiceDetialls serviceData={serviceData} />

      <AllOurPhotoEditingServices />

      <HowItWorks />

      <div className="pt-5 md:pt-10 lg:pt-20">
        <CalculatePrice />
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 pt-5 md:pt-10 lg:pt-20 pb-5 md:pb-10 lg:pb-20">
        <CommonFeacher2 />
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 pt-5 md:pt-10 lg:pt-20 pb-5 md:pb-10 lg:pb-20">
        <BusinessReview />
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 pt-5 md:pt-10 lg:pt-20 pb-5 md:pb-10 lg:pb-20">
        <FAQComponent />
      </div>
    </div>
  );
};

export default ServiceDetiallsComponents;
