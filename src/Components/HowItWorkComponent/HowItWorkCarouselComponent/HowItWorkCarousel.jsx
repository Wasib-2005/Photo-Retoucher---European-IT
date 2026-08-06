import { useEffect, useRef, useState } from "react";
import HowItWorkCarouselCart from "./HowItWorkCarousel/HowItWorkCarouselCart";
import Uil_Arrow from "../../../assets/Uil_Arrow.svg";

const HowItWorkCarousel = ({ allOurServicesCartsData = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const total = allOurServicesCartsData?.length || 0;

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);

  useEffect(() => {
    const recalc = () => {
      const container = containerRef.current;
      const activeCard = cardRefs.current[activeIndex];
      if (!container || !activeCard) return;

      const containerWidth = container.offsetWidth;
      const cardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;

      setOffset(containerWidth / 2 - cardCenter);
    };

    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [activeIndex, total]);

  if (!total) return null;

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <div
        className="flex items-center gap-10 w-fit transition-transform duration-500 ease-out"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {allOurServicesCartsData.map((ourService, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`shrink-0 transition-all duration-500 ease-out ${
                isActive ? "scale-100 opacity-100" : "scale-[0.7] opacity-50"
              }`}
            >
              <HowItWorkCarouselCart ourService={ourService} />
            </div>
          );
        })}
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rotate-180 cursor-pointer"
          >
            <img src={Uil_Arrow} alt="" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
          >
            <img src={Uil_Arrow} alt="" />
          </button>
        </>
      )}
    </div>
  );
};

export default HowItWorkCarousel;