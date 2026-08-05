import BusinessReview from "../../Components/Common/BusinessReview/BusinessReview";
import CalculatePrice from "../../Components/Common/CalculatePrice/CalculatePrice";
import CommonFeacher2 from "../../Components/Common/CommonFeacher2";
import FAQComponent from "../../Components/Common/FAQComponent/FAQComponent";
import ChooseTurnaroundTimeComponent from "../../Components/HowItWorkComponent/ChooseTurnaroundTimeComponent";
import DownloadProfessionallyEditedImagesComponent from "../../Components/HowItWorkComponent/DownloadProfessionallyEditedImagesComponent";
import HowItWorkTitle from "../../Components/HowItWorkComponent/HowItWorkTitle";
import SelectServiceUpload from "../../Components/HowItWorkComponent/SelectServiceUpload/SelectServiceUpload";
import ShareDetailsFinishOrderComponent from "../../Components/HowItWorkComponent/ShareDetailsFinishOrderComponent";
import WeEditImagesComponent from "../../Components/HowItWorkComponent/WeEditImagesComponent";
import NavbarSpece from "../../Components/Navbar/NavbarSpece";

const HowItWorkPage = () => {
  return (
    <div>
      <NavbarSpece />

      <HowItWorkTitle />

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20">
        <SelectServiceUpload />
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20">
        <ChooseTurnaroundTimeComponent />
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20">
        <ShareDetailsFinishOrderComponent />
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20">
        <WeEditImagesComponent />
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20">
        <DownloadProfessionallyEditedImagesComponent />
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20">
        <CommonFeacher2 />
      </div>

      {/* TODO add the figma section */}

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20">
        <CalculatePrice />
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20">
        <BusinessReview />
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20">
        <FAQComponent />
      </div>
    </div>
  );
};

export default HowItWorkPage;
