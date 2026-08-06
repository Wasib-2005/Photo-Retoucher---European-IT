import CheckboxCircleFill from "../../assets/CheckboxCircleFill.svg";
import DownloadProfessionallyEditedImages from "../../assets/DownloadProfessionallyEditedImages.svg";

const DownloadProfessionallyEditedImagesComponent = () => {  return (
    <div className=" rounded-2xl flex flex-col lg:flex-row justify-between items-center ">
      <img className="h-full" src={DownloadProfessionallyEditedImages} alt="" />

      <div className="flex flex-col gap-2 md:gap-5 px-6 md:px-12 lg:px-18 py-6 md:py-12 ">
        <div>
          <h2 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#0041FF] font-medium">
            Step 3
          </h2>

          <h1 className="text-[18px] md:text-[24px] lg:text-[28px] text-[#1B263B] font-medium max-w-100">
            Share any details and finish up your order.
          </h1>
        </div>

        <p className="max-w-140">
          Need to share something with your designer? You can add instructions
          and attach supporting files—or skip this step if you don’t have
          anything to share.
          <br />
          <br />
          <p>
            You can also make final adjustments to timing, number of images,
            file format, and copies—and add free straightening, cropping, or
            resizing to your order. When you’re all set, finish up your order,
            and we’ll get to work.
          </p>
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
    </div>
  );
};

export default DownloadProfessionallyEditedImagesComponent;