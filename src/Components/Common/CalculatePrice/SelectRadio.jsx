const SelectRadio = ({
  selectRadioValue,
  selectedRadioValue,
  setSelectedRadioValue,
}) => {
  const isSelected = selectRadioValue._id === selectedRadioValue._id;

  return (
    <button
      onClick={() => setSelectedRadioValue(selectRadioValue)}
      className={`flex flex-col gap-1 border-2 ${
        isSelected
          ? "border-[#0541ff] hover:border-[#0541ff]/50 hover:bg-[#0541ff]/50"
          : "border-[#4d4d4d] hover:border-[#4d4d4d]/50 hover:bg-[#4d4d4d]/50"
      } rounded-lg px-15 py-4 justify-center `}
    >
      <div className="flex justify-center">
        <img src={selectRadioValue.imgUrl} alt="" />
      </div>
      <h2 className="font-medium">{selectRadioValue.time}</h2>
      <h3>{selectRadioValue.radito}</h3>
    </button>
  );
};

export default SelectRadio;
