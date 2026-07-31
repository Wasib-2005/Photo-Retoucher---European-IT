import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";

const ImageCompare = ({ url1, url2 }) => {
  if (!url1 || !url2) {
    console.error("Must provide 2 URLs");
    return null;
  }

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="@container relative w-full h-full overflow-hidden select-none rounded-2xl"
      onMouseDown={stopPropagation}
      onTouchStart={stopPropagation}
    >
      <style>{`
        .rcs-handle-force .__rcs-handle-button {
          width: clamp(24px, 8cqw, 56px) !important;
          height: clamp(24px, 8cqw, 56px) !important;
        }
        .rcs-handle-force .__rcs-handle-arrow {
          border-top-width: clamp(4px, 1.6cqw, 8px) !important;
          border-bottom-width: clamp(4px, 1.6cqw, 8px) !important;
          border-right-width: clamp(5px, 2cqw, 10px) !important;
        }
      `}</style>
      <ReactCompareSlider
        className="w-full h-full"
        handle={
          <ReactCompareSliderHandle
            className="rcs-handle-force"
            buttonStyle={{
              backgroundColor: "#FFFFFF",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
              border: "none",
              color: "#000000",
            }}
            linesStyle={{
              color: "#FFFFFF",
            }}
          />
        }
        itemOne={
          <div className="w-full h-full relative bg-white flex items-center justify-center">
            <img
              src={url1}
              alt="Before"
              className="max-h-full max-w-full object-contain pointer-events-none"
            />
            <p className="absolute top-[4cqw] left-[4cqw] py-[1.2cqw] px-[2.5cqw] rounded-[2cqw] bg-[#1B263B] text-white text-[clamp(10px,2.5cqw,18px)] font-medium leading-none shadow-sm">
              Before
            </p>
          </div>
        }
        itemTwo={
          <div className="w-full h-full relative bg-white flex items-center justify-center">
            <img
              src={url2}
              alt="After"
              className="max-h-full max-w-full object-contain pointer-events-none"
            />
            <p className="absolute top-[4cqw] right-[4cqw] py-[1.2cqw] px-[2.5cqw] rounded-[2cqw] bg-[#0041FF] text-white text-[clamp(10px,2.5cqw,18px)] font-medium leading-none shadow-sm">
              After
            </p>
          </div>
        }
      />
    </div>
  );
};

export default ImageCompare;