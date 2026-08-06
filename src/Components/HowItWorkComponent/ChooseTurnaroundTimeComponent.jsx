import ChooseTurnaroundTime from "../../assets/ChooseTurnaroundTime.svg";
import CheckboxCircleFill from "../../assets/CheckboxCircleFill.svg";

const ChooseTurnaroundTimeComponent = () => {
  return (
    <div className="bg-[#f9f9fd] rounded-2xl flex flex-col lg:flex-row justify-between items-center ">
      <div className="flex flex-col gap-2 md:gap-5 px-6 md:px-12 lg:px-18 py-6 md:py-12 ">
        <div>
          <h2 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#0041FF] font-medium">
            Step 2
          </h2>

          <h1 className="text-[18px] md:text-[24px] lg:text-[28px] text-[#1B263B] font-medium max-w-100">
            Choose your turnaround time.
          </h1>
        </div>

        <p className="max-w-140">
          Our default turnaround time for image edits is 24 hours, but you can
          opt for a faster turnaround if needed. Not in a rush? Choose a longer
          turnaround time and get a lower cost.
        </p>

        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <img src={CheckboxCircleFill} alt="" />
            <p>Bulk Upload</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={CheckboxCircleFill} alt="" />
            <p>Secure & Safe</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={CheckboxCircleFill} alt="" />
            <p>All file formats supports</p>
          </div>
        </div>
      </div>

      <img className="h-full" src={ChooseTurnaroundTime} alt="" />
    </div>
  );
};

export default ChooseTurnaroundTimeComponent;
