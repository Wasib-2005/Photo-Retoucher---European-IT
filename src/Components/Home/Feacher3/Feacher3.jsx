import Bottom_carve from "../../../assets/Bottom_carve.svg";
import CalculatePrice from "../../Common/CalculatePrice/CalculatePrice";

const Feacher3 = () => {
  return (
    <section className="bg-[#f0f3fa] relative overflow-hidden py-12 md:py-25 text-[#1B263B] ">
      <img
        src={Bottom_carve}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 max-w-[15%] pointer-events-none select-none z-0"
      />

      {/* Main Content Container */}
      <div className="mx-auto px-4 md:px-12 lg:px-20 relative z-10 text-center">
        <CalculatePrice />
      </div>
    </section>
  );
};

export default Feacher3;
