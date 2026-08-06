import Left_crave from "../../../assets/Left_crave.svg";
import CommonFeacher2 from "../../Common/CommonFeacher2";

const Feacher2 = () => {
  return (
    <section className="bg-[#f0f3fa] relative overflow-hidden py-12 md:py-25 text-[#1B263B] ">
      {/* Bottom Left Decorative SVG */}
      <img
        src={Left_crave}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 max-w-[15%] pointer-events-none select-none z-0"
      />

      {/* Main Content Container */}
      <div className="mx-auto px-4 md:px-12 lg:px-20 relative z-10 text-center">
        <CommonFeacher2 />
      </div>
    </section>
  );
};

export default Feacher2;
