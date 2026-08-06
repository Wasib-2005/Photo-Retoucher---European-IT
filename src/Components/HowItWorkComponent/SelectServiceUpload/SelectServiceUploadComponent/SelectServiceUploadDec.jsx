import CheckboxCircleFill from "../../../../assets/CheckboxCircleFill.svg";

const SelectServiceUploadDec = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-5 px-5 lg:px-10 ">
      <div>
        <h2 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#0041FF] font-medium">
          Step 1
        </h2>

        <h1 className="text-[18px] md:text-[24px] lg:text-[28px] text-[#1B263B] font-medium max-w-100">
          Select a service and upload your images.
        </h1>
      </div>

      <p className="max-w-140">
        When you start a new order, we’ll use your service selections and images
        to give you an accurate price for your order—without having to wait for
        a quote.
        <br />
        <br />
        Everything is secure and encrypted. You can upload any of these file
        types:
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
  );
};

export default SelectServiceUploadDec;
