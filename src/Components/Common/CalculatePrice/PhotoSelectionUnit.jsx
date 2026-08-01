import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PhotoSelectionUnit = ({
  minMaxNumberOfPhoto,
  numberPhoto,
  setNumberPhoto,
}) => {
  const { min, max, differentValue } = minMaxNumberOfPhoto;

  const customMarks = {};

  for (let i = min === 1 ? 0 : min; i <= max; i += differentValue) {
    if (i === 0) {
      customMarks[1] = 1;
      continue;
    }
    customMarks[i] = i.toString();
  }

  const isSteped = 1; //Fect: null will null or number as step for slider

  const handleInputChange = (e, isAdd) => {
    const value = parseInt(e.target.value);

    const Step = isSteped ? isSteped : differentValue;

    if (isAdd) {
      setNumberPhoto((prev) => Math.min(prev + Step, max));
    } else {
      setNumberPhoto((prev) => Math.max(prev - Step, min));
    }
    if (value >= min && value <= max) {
      setNumberPhoto(value);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4.5 ">
        <div className="flex border border-[#666666] rounded-lg h-10 md:h-12 items-center w-fit">
          <button
            className="h-full px-3 hover:bg-[#666666]/50 rounded-l-[7px]"
            onClick={(e) => handleInputChange(e, false)}
          >
            -
          </button>
          <input
            type="text"
            name=""
            id=""
            disabled={!isSteped ? true : false}
            value={numberPhoto}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value >= min && value <= max) {
                setNumberPhoto(value);
              }
            }}
            className="w-20 border-r border-l border-[#666666] h-full text-center"
          />
          <button
            className="h-full px-3 hover:bg-[#666666]/50 rounded-r-[7px]"
            onClick={(e) => handleInputChange(e, true)}
          >
            +
          </button>
        </div>

        <div className="w-full mt-3">
          <Slider
            value={numberPhoto || min}
            onChange={(value) => setNumberPhoto(value)}
            min={min}
            max={max}
            marks={customMarks}
            step={isSteped}
            styles={{
              track: { backgroundColor: "#0041FF", height: 11 },
              rail: { backgroundColor: "#1B263B", height: 11 },
              handle: { display: "none" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoSelectionUnit;
