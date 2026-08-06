import Upload from "../.../../../../../assets/Upload_NoCloud.svg";
import Img1 from "../../../../assets/SelectServiceUploadImages/Img1.png";
import Img2 from "../../../../assets/SelectServiceUploadImages/Img2.png";
import Img3 from "../../../../assets/SelectServiceUploadImages/Img3.png";
import Img4 from "../../../../assets/SelectServiceUploadImages/Img4.png";
import Img5 from "../../../../assets/SelectServiceUploadImages/Img5.png";

const SelectServiceUploadPhotoFile = () => {
  return (
    <div className="flex flex-col gap-2.5 border border-[#0041FF] rounded-2xl p-4">
      <div className="flex flex-col justify-center items-center gap-4 px-10 md:px-15 lg:px-20 py-13 border border-[#0041FF] border-dashed rounded-xl">
        <div>
          <img className="w-22" src={Upload} alt="" />
        </div>
        <div className="flex flex-col text-center gap-2.5">
          <h1 className="font-medium text-[#1B263B] text-[16px] md:text-xl lg:text-2xl">
            Drag & drop your images here
          </h1>
          <h1 className="font-medium text-[#1B263B] text-[16px] md:text-xl lg:text-2xl">
            or <span>Browse file</span>
          </h1>
          <p className="text-[14px] md:text-[15px] lg:text-[16px]">
            Support .jpeg, .png, .PSD, .RAW
          </p>
        </div>
      </div>

      <div className="flex justify-between text-[12px] md:text-[14px] lg:text-[16px] text-[#1B263B]">
        <p>254 images</p>
        <div className=" flex gap-3 md:gap-5">
          <p>254MB</p>
          <div className="flex relative w-30 h-5 md:h-6 md:w-52 bg-[#0041FF]/10 rounded-2xl">
            <div className="w-[57%] bg-[#0041FF] rounded-2xl">
              <p className="absolute left-2 text-gray-200">Uploading....</p>
            </div>
            <p className="absolute right-2 text-[#0041FF]">57%</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between overflow-auto md:overscroll-none gap-2">
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
        <img src={Img5} alt="" />
      </div>
    </div>
  );
};

export default SelectServiceUploadPhotoFile;
