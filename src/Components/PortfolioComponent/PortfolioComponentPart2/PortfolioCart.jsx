import ImageCompare from "../../../Utility/ImageCompare";

const PortfolioCart = ({ cart }) => {
  console.log(cart);
  return (
    <div className="border border-[#0041FF] rounded-2xl">
      <ImageCompare url1={cart?.raw} url2={cart?.edited} />
    </div>
  );
};

export default PortfolioCart;
