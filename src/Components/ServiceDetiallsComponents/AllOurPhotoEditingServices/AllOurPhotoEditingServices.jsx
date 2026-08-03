import ImageCompare from "../../../Utility/ImageCompare";

const AllOurPhotoEditingServices = () => {
  const allOurPhotoEditingServicesData = {
    headData: {
      title: "Fine Feather Masking",
      dec: "Fine From simple clipping paths to advanced photo retouching,",
      img: {
        imgRaw: "/bag/bag_img_raw.png",
        imgEdited: "/bag/bag_img_edited.png",
      },
    },
    extraData: [
      {
        title: "Fine Feather Masking",
        dec: "Fine From simple clipping paths to advanced photo retouching,",
        img: {
          imgRaw: "/public/ToyBall/ToyBallBefore.png",
          imgEdited: "/public/ToyBall/ToyBallAfter.png",
        },
      },
      {
        title: "Fine Feather Masking",
        dec: "Fine From simple clipping paths to advanced photo retouching,",
        img: {
          imgRaw: "/public/DontKnowWhat/DontKnowWhatRaw.png",
          imgEdited: "/public/DontKnowWhat/DontKnowWhatEdited.png",
        },
      },
      {
        title: "Fine Feather Masking",
        dec: "Fine From simple clipping paths to advanced photo retouching,",
        img: {
          imgRaw: "/public/BaybyCloth/BaybyClothBefore.png",
          imgEdited: "/public/BaybyCloth/BaybyClothAfter.png",
        },
      },
      {
        title: "Fine Feather Masking",
        dec: "Fine From simple clipping paths to advanced photo retouching,",
        img: {
          imgRaw: "/public/Girl/GirlRaw.png",
          imgEdited: "/public/Girl/GirlEdited.png",
        },
      },
    ],
  };

  return (
    <div className="flex flex-col mx-auto px-4 md:px-12 lg:px-20 pt-5 md:pt-10 lg:pt-20 pb-5 md:pb-10 lg:pb-20 justify-center text-center gap-3">
      <h2 className="text-[12px] md:text-[14px] lg:text-[16px] text-[#0041FF]">
        WE’RE YOUR VIRTUAL
      </h2>

      <h1 className="text-[28px] md:text-[38px] lg:text-[48px] text-[#1B263B] font-semibold">
        All our <span className="text-[#0041FF]"> photo-editing</span> services
      </h1>

      <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-150 mx-auto">
        From simple clipping paths to advanced photo retouching, we provide all
        the image solution you need.
      </p>
      <div className="h-1.5 w-10 md:w-18 bg-[#0041FF] rounded-2xl mx-auto" />

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 text-left">
          <div className=" rounded-2xl shadow-lg">
            <ImageCompare
              url1={allOurPhotoEditingServicesData?.headData?.img.imgRaw}
              url2={allOurPhotoEditingServicesData?.headData?.img.imgEdited}
            />
          </div>
          <div>
            <h1 className="text-[16px] md:text-[18px] lg:text-[20px] text-[#1B263B] font-medium ">
              {allOurPhotoEditingServicesData?.headData?.title}
            </h1>
            <p className="text-[12px] md:text-[14px] lg:text-[16px]">
              {allOurPhotoEditingServicesData?.headData?.dec}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {allOurPhotoEditingServicesData?.extraData?.map((img, i) => (
            <div
              key={("allOurPhotoEditingServicesData", i)}
              className=" border border-[#0041FF] rounded-xl"
            >
              <ImageCompare url1={img?.img.imgRaw} url2={img?.img.imgEdited} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllOurPhotoEditingServices;
