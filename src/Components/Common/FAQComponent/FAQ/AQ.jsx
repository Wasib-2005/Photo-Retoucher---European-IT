import MinusCircle from "../../../../assets/MinusCircle.svg";
import PlusCircle from "../../../../assets/PlusCircle.svg";

const AQ = ({ item, openAq, setOpenAq }) => {
  const isAqOpen = item._id === openAq?._id;
  return (
    <button
      onClick={() => {
        setOpenAq(item);
      }}
      className="p-4 bg-white rounded-2xl border border-[#a6beee] text-left font-medium w-full "
    >
      <div className="flex items-start gap-5 ">
        <img
          className={` transition  ${isAqOpen ? "rotate-180" : ""} duration-500 w-9`}
          src={isAqOpen ? MinusCircle : PlusCircle}
          alt=""
        />

        <div>
          <h2 className="text-[#1B263B] font-medium">{item.question}</h2>
          <div
            className={`grid transition-[grid-template-rows] duration-500 linear ${
              isAqOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-[#4C515B]/60 mt-4 ">{item.answer}</p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default AQ;
