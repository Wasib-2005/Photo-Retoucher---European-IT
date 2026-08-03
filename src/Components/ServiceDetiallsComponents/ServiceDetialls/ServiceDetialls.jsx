import ImageCompare from "../../../Utility/ImageCompare";

const ServiceDetialls = ({ serviceData }) => {
  return (
    <div className="mx-auto px-4 md:px-12 lg:px-20 pt-5 md:pt-10 lg:pt-20 pb-5 md:pb-10 lg:pb-20 bg-[#f3f6fd]">
      <div className="flex flex-col md:flex-row justify-between gap-18">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className=" text-[12px] text-[#0041FF]">
              PROFESSIONAL IMAGE EDITING SERVICE
            </h2>

            <h1 className="font-semibold text-[28px] md:text-[48px] lg:text-[58px] text-[#1B263B] flex flex-col">
              <span>{serviceData.title}</span>
              <span className="text-[#0041FF]">services</span>
            </h1>
          </div>

          <p className="text-[14px] md:text-[16px] lg:text-[22px] text-[#1B263B]">
            {serviceData?.smallDec}
          </p>

          <p className="text-[12px] md:text-[14px] lg:text-[18px]">
            {serviceData?.dec}
          </p>

          <p className="text-[12px] md:text-[14px] lg:text-[18px]">
            Starting at{" "}
            <span
              className="text-[16px] md:text-[18px]
          lg:text-[24px] text-[#0041FF] font-medium"
            >
              $ {serviceData.price}
            </span>{" "}
            per image
          </p>
        </div>

        <div className="md:w-[48%] border-2 border-[#0041FF] rounded-2xl">
          <ImageCompare
            url1={serviceData.img.imgRaw}
            url2={serviceData.img.imgEdited}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetialls;
