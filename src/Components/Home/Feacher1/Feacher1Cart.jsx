const Feacher1Cart = ({ cart }) => {

  const renderColoredText = (text) => {
    if (!text) return "";
    const parts = text.split(/(#[0-9a-fA-F]{3,6}\s+.*?#)/g);

    return parts.map((part, index) => {
      const match = part.match(/^#([0-9a-fA-F]{3,6})\s+(.*?)#$/);
      if (match) {
        return (
          <span key={index} style={{ color: `#${match[1]}` }}>
            {match[2]}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="flex flex-col  justify-between text-left w-full h-full p-6 bg-white rounded-2xl gap-3">
      <div className="flex flex-col gap-3">
        {cart?.img && <img className="px-12 w-full object-contain" src={cart.img} alt="" />}

        <h2 className="text-[18px] md:text-[20px] font-medium">
          {cart?.tiltle || cart?.title}
        </h2>

        <p className="text-[14px] md:text-[16px]">
          {renderColoredText(cart?.dec)}
        </p>
      </div>

      <div className="w-[25%] h-1.25 bg-[#0041FF] rounded-4xl mt-auto" />
    </div>
  );
};

export default Feacher1Cart;