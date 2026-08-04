import SelectServiceUploadDec from "./SelectServiceUploadComponent/SelectServiceUploadDec";
import SelectServiceUploadPhotoFile from "./SelectServiceUploadComponent/SelectServiceUploadPhotoFile";
import SelectServiceUploadPhotoType from "./SelectServiceUploadComponent/SelectServiceUploadPhotoType";

const SelectServiceUpload = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        <SelectServiceUploadPhotoType />

        <SelectServiceUploadPhotoFile />

        <SelectServiceUploadDec />
      </div>
    </div>
  );
};

export default SelectServiceUpload;
