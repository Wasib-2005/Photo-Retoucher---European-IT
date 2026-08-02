import ImageCompare from "../../../Utility/ImageCompare";

const OurServicesCartSmall = ({ ourService }) => {
  return (
    <div className="w-76  p-4 border border-[#0041FF] rounded-xl ">
      <div className=" w-full border border-[#0041FF] rounded-xl ">
        <ImageCompare
          url1={ourService?.img.rawImg}
          url2={ourService?.img.edited}
        />
      </div>
      <h1 className="text-[#1B263B] font-medium mt-3">{ourService?.title}</h1>
      <p className="text-[14px] mt-1">{ourService?.dec}</p>
    </div>
  );
};

export default OurServicesCartSmall;
