import BusinessReview from "../../Components/Common/BusinessReview/BusinessReview";
import CalculatePrice from "../../Components/Common/CalculatePrice/CalculatePrice";
import FAQComponent from "../../Components/Common/FAQComponent/FAQComponent";
import AllOurServicesComponent from "../../Components/OurServicesComponent/AllOurServicesComponent";
import OurServicesComponent from "../../Components/OurServicesComponent/OurServicesComponent";

const OurServices = () => {
  return (
    <div>
      <OurServicesComponent />
      <AllOurServicesComponent />
      <div className="py-10 md:py-20">
        <CalculatePrice />
      </div>
      <div className="mx-auto px-4 md:px-12 lg:px-20 py-10 md:py-20">
        <BusinessReview />
      </div>
      <div className="mx-auto px-4 md:px-12 lg:px-20 py-10 md:py-20">
        <FAQComponent />
      </div>
    </div>
  );
};

export default OurServices;
