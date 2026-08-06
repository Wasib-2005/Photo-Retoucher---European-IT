import WeEditImages from "../../assets/WeEditImages.svg";

const WeEditImagesComponent = () => {
  return (
    <div className="bg-[#f6f5fc] rounded-2xl flex flex-col lg:flex-row justify-between items-center ">
      <div className="flex flex-col gap-2 md:gap-5 px-6 md:px-12 lg:px-18 py-6 md:py-12 ">
        <div>
          <h2 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#0041FF] font-medium">
            Step 2
          </h2>

          <h1 className="text-[18px] md:text-[24px] lg:text-[28px] text-[#1B263B] font-medium max-w-100">
            We edit your images, while you get back to the fun stuff.
          </h1>
        </div>

        <p className="max-w-140">
          Once those tedious edits are off your plate, you can get back to the
          parts of your work you enjoy most.
          <br />
          <br />
          We’ll carefully edit your images by hand. Each image will then be
          double-checked for perfection before we send you the finished files.
        </p>
      </div>

      <img className="h-full md:mr-10" src={WeEditImages} alt="" />
    </div>
  );
};

export default WeEditImagesComponent;
