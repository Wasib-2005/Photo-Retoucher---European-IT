import Left_crave from "../../assets/Left_crave.svg";
import FAQComponent from "../Common/FAQComponent/FAQComponent";

const FAQHome = () => {
  return (
    <section className="bg-[rgb(240,243,250)] relative overflow-hidden py-12 md:py-25 text-[#1B263B]">
      <img
        src={Left_crave}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 max-w-[15%] pointer-events-none select-none z-0"
      />

      {/* Main Content Container */}
      <div className="mx-auto px-4 md:px-12 lg:px-20 relative z-10 text-center">
        <FAQComponent />
      </div>
    </section>
  );
};

export default FAQHome;
