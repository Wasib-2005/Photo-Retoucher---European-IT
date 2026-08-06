import CalculatePrice from "../Common/CalculatePrice/CalculatePrice";
import FAQComponent from "../Common/FAQComponent/FAQComponent";
import PortfolioComponentPart1 from "./PortfolioComponentPart1";
import PortfolioComponentPart2 from "./PortfolioComponentPart2/PortfolioComponentPart2";

const PortfolioComponent = () => {
  return (
    <div>
      <PortfolioComponentPart1 />

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-10 md:py-20">
        <PortfolioComponentPart2 />
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-10 md:py-20">
        <CalculatePrice />
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-10 md:py-20">
        <FAQComponent />
      </div>
    </div>
  );
};

export default PortfolioComponent;
