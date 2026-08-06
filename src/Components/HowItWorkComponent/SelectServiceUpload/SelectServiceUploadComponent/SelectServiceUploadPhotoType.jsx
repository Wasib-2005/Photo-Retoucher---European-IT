
const SelectServiceUploadPhotoType = () => {
  return (
    <div className="text-[#1B263B] flex md:flex-col flex-wrap gap-5 text-[12px] md:text-[14px] lg:text-[16px] justify-center">
      <button className="border border-[#0041FF] hover:bg-[#0041FF] hover:text-white rounded-xl w-24 md:w-28 lg:w-32 h-12 md:h-14 flex justify-center items-center">
        <p>JPG (Preferred)</p>
      </button>
      <button className="border border-[#0041FF] hover:bg-[#0041FF] hover:text-white rounded-xl w-24 md:w-28 lg:w-32 h-12 md:h-14 flex justify-center items-center">
        <p>PNG</p>
      </button>
      <button className="border border-[#0041FF] hover:bg-[#0041FF] hover:text-white rounded-xl w-24 md:w-28 lg:w-32 h-12 md:h-14 flex justify-center items-center">
        <p>PSD</p>
      </button>
      <button className="border border-[#0041FF] hover:bg-[#0041FF] hover:text-white rounded-xl w-24 md:w-28 lg:w-32 h-12 md:h-14 flex justify-center items-center">
        <p>DNG</p>
      </button>
      <button className="border border-[#0041FF] hover:bg-[#0041FF] hover:text-white rounded-xl w-24 md:w-28 lg:w-32 h-12 md:h-14 flex justify-center items-center">
        <p>PDF</p>
      </button>
      <button className="border border-[#0041FF] hover:bg-[#0041FF] hover:text-white rounded-xl w-24 md:w-28 lg:w-32 h-12 md:h-14 flex justify-center items-center">
        <p>RAW</p>
      </button>
    </div>
  );
};

export default SelectServiceUploadPhotoType;
