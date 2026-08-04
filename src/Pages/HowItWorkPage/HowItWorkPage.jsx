import HowItWorkTitle from "../../Components/HowItWorkComponent/HowItWorkTitle";
import SelectServiceUpload from "../../Components/HowItWorkComponent/SelectServiceUpload/SelectServiceUpload";
import NavbarSpece from "../../Components/Navbar/NavbarSpece";

const HowItWorkPage = () => {
  return (
    <div>
      <NavbarSpece />

      <HowItWorkTitle />

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20">
        <SelectServiceUpload />
      </div>
    </div>
  );
};

export default HowItWorkPage;
