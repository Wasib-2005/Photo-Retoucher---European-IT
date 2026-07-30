import { useRef, useState } from "react";
import { Carousel } from "flowbite-react";
import ImageCompare from "../../Utility/ImageCompare";

const slides = [
  {
    id: "bag",
    img_edited: { url: "/bag/bag_img_edited.png", alt: "bag_edited" },
    img_raw: { url: "/bag/bag_img_raw.png", alt: "bag_raw" },
  },
  {
    id: "dontknowwhat",
    img_edited: {
      url: "/DontKnowWhat/DontKnowWhatEdited.png",
      alt: "DontKnowWhatEdited",
    },
    img_raw: {
      url: "/DontKnowWhat/DontKnowWhatRaw.png",
      alt: "DontKnowWhatRaw",
    },
  },
  {
    id: "guitar",
    img_edited: { url: "/Guitar/GuitarEdited.png", alt: "GuitarEdited" },
    img_raw: { url: "/Guitar/GuitarRaw.png", alt: "GuitarRaw" },
  },
  {
    id: "guitar",
    img_edited: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKuxRyz8NPVHc-FyORThhW1KjgyPo3I9o9UN5b7xYnuGaZ9WmGDAgWV8&s=10",
      alt: "GuitarEdited",
    },
    img_raw: {
      url: "https://img.magnific.com/free-photo/beautiful-domestic-cat-laying-fence_181624-43207.jpg?semt=ais_test_b&w=740&q=80",
      alt: "GuitarRaw",
    },
  },
];

const customCarouselTheme = {
  item: {
    wrapper: {
      off: "w-full shrink-0 transform cursor-grab snap-center relative h-full",
      on: "w-full shrink-0 transform cursor-grab snap-center relative h-full",
    },
    base: "block w-full h-full",
  },
};

export function CustomCarousel() {
  const [active, setActive] = useState(0);
  const wrapperRef = useRef(null);

  const goToSlide = (index) => {
    const track = wrapperRef.current?.querySelector(".snap-x");
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
    setActive(index);
  };

  return (
    <div className="">
      <div className=" h-75 md:h-95 lg:h-123 w-full relative " ref={wrapperRef}>
        <Carousel
          theme={customCarouselTheme}
          indicators={false}
          leftControl={<></>}
          rightControl={<></>}
          slide={2000}
          onSlideChange={(index) => setActive(index)}
        >
          {slides.map((s) => (
            <div
              key={s.id}
              className="w-full h-full flex items-center justify-center "
            >
              <div className="w-full  h-full border border-[#0041FF] rounded-lg overflow-hidden">
                <ImageCompare url1={s.img_raw.url} url2={s.img_edited.url} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex justify-center items-center space-x-1 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goToSlide(i)}
            className={
              i === active
                ? "w-2 h-2 bg-[#1447E6] rounded-full transition-all duration-300"
                : "w-7 h-2 bg-[#667085] rounded-sm transition-all duration-300"
            }
          />
        ))}
      </div>
    </div>
  );
}
