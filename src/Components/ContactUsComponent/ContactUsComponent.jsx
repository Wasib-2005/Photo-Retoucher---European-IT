import CalculatePrice from "../Common/CalculatePrice/CalculatePrice";
import FAQComponent from "../Common/FAQComponent/FAQComponent";
import ContactUsComponentPart1 from "./ContactUsComponentPart1";
import ContactUsForm from "./ContactUsForm";

const ContactUsComponent = () => {
  return (
    <div>
      <ContactUsComponentPart1 />

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20 relative z-10 text-left ">
        <ContactUsForm />
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20 relative z-10 text-left ">
        <CalculatePrice />
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20 relative z-10 text-left ">
        <FAQComponent />
      </div>
    </div>
  );
};

export default ContactUsComponent;
