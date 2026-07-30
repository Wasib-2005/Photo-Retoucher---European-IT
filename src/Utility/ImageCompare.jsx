import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";

const ImageCompare = ({ url1, url2 }) => {
  if (!url1 || !url2) {
    console.error("Must provide 2 URLs");
    return null;
  }

  // Prevent slider drag gestures from triggering the carousel swipe
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="w-full h-full min-h-[300px]"
      onMouseDown={stopPropagation}
      onTouchStart={stopPropagation}
    >
      <ReactCompareSlider
        className="w-full h-full"
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backgroundColor: "#FFFFFF",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
              border: "none",
              "--rcs-handle-color": "#1B263B",
            }}
          />
        }
        itemOne={
          <div className="w-full h-full bg-white flex items-center justify-center select-none">
            <img
              src={url1}
              alt="Before"
              className="max-h-full max-w-full object-contain pointer-events-none"
            />
          </div>
        }
        itemTwo={
          <div className="w-full h-full bg-white flex items-center justify-center select-none">
            <img
              src={url2}
              alt="After"
              className="max-h-full max-w-full object-contain pointer-events-none"
            />
          </div>
        }
      />
    </div>
  );
};

export default ImageCompare;