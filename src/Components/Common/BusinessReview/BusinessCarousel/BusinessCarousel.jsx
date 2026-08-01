import { useEffect, useRef, useState } from "react";
import BusinessCarouselCart from "./BusinessCarouselCart";

const businessCarouselData = [
  [
    {
      headerImg: "/BusinessCarousel/Company.svg",
      header: "Dutch Design Studio",
      headerUrl: "www.company.com",
      dec: "Dutch Design Studio has been a game-changer for our business! Claiming our profile was simple, boosted our online presence significantly. The platform makes managing customer reviews, plus the subscription options provide great value.",
      user: {
        username: "John Jack",
        profileUrl: "/BusinessCarousel/Avator.svg",
        jobTitle: "CEO",
        rating: 3.5,
      },
    },
    {
      headerImg: "/BusinessCarousel/Company.svg",
      header: "Dutch Design Studio",
      headerUrl: "www.company.com",
      dec: "Dutch Design Studio has been a game-changer for our business! Claiming our profile was simple, boosted our online presence significantly. The platform makes managing customer reviews, plus the subscription options provide great value.",
      user: {
        username: "John Jack",
        profileUrl: "/BusinessCarousel/Avator.svg",
        jobTitle: "CEO",
        rating: 3.5,
      },
    },
    {
      headerImg: "/BusinessCarousel/Company.svg",
      header: "Dutch Design Studio",
      headerUrl: "www.company.com",
      dec: "Dutch Design Studio has been a game-changer for our business! Claiming our profile was simple, boosted our online presence significantly. The platform makes managing customer reviews, plus the subscription options provide great value.",
      user: {
        username: "John Jack",
        profileUrl: "/BusinessCarousel/Avator.svg",
        jobTitle: "CEO",
        rating: 3.5,
      },
    },
  ],
  [
    {
      headerImg: "/BusinessCarousel/Company.svg",
      header: "Dutch Design Studio",
      headerUrl: "www.company.com",
      dec: "Dutch Design Studio has been a game-changer for our business! Claiming our profile was simple, boosted our online presence significantly. The platform makes managing customer reviews, plus the subscription options provide great value.",
      user: {
        username: "John Jack",
        profileUrl: "/BusinessCarousel/Avator.svg",
        jobTitle: "CEO",
        rating: 3.5,
      },
    },
    {
      headerImg: "/BusinessCarousel/Company.svg",
      header: "Dutch Design Studio",
      headerUrl: "www.company.com",
      dec: "Dutch Design Studio has been a game-changer for our business! Claiming our profile was simple, boosted our online presence significantly. The platform makes managing customer reviews, plus the subscription options provide great value.",
      user: {
        username: "John Jack",
        profileUrl: "/BusinessCarousel/Avator.svg",
        jobTitle: "CEO",
        rating: 3.5,
      },
    },
    {
      headerImg: "/BusinessCarousel/Company.svg",
      header: "Dutch Design Studio",
      headerUrl: "www.company.com",
      dec: "Dutch Design Studio has been a game-changer for our business! Claiming our profile was simple, boosted our online presence significantly. The platform makes managing customer reviews, plus the subscription options provide great value.",
      user: {
        username: "John Jack",
        profileUrl: "/BusinessCarousel/Avator.svg",
        jobTitle: "CEO",
        rating: 3.5,
      },
    },
  ],
  [
    {
      headerImg: "/BusinessCarousel/Company.svg",
      header: "Dutch Design Studio",
      headerUrl: "www.company.com",
      dec: "Dutch Design Studio has been a game-changer for our business! Claiming our profile was simple, boosted our online presence significantly. The platform makes managing customer reviews, plus the subscription options provide great value.",
      user: {
        username: "John Jack",
        profileUrl: "/BusinessCarousel/Avator.svg",
        jobTitle: "CEO",
        rating: 3.5,
      },
    },
    {
      headerImg: "/BusinessCarousel/Company.svg",
      header: "Dutch Design Studio",
      headerUrl: "www.company.com",
      dec: "Dutch Design Studio has been a game-changer for our business! Claiming our profile was simple, boosted our online presence significantly. The platform makes managing customer reviews, plus the subscription options provide great value.",
      user: {
        username: "John Jack",
        profileUrl: "/BusinessCarousel/Avator.svg",
        jobTitle: "CEO",
        rating: 3.5,
      },
    },
    {
      headerImg: "/BusinessCarousel/Company.svg",
      header: "Dutch Design Studio",
      headerUrl: "www.company.com",
      dec: "Dutch Design Studio has been a game-changer for our business! Claiming our profile was simple, boosted our online presence significantly. The platform makes managing customer reviews, plus the subscription options provide great value.",
      user: {
        username: "John Jack",
        profileUrl: "/BusinessCarousel/Avator.svg",
        jobTitle: "CEO",
        rating: 3.5,
      },
    },
  ],
  [
    {
      headerImg: "/BusinessCarousel/Company.svg",
      header: "Dutch Design Studio",
      headerUrl: "www.company.com",
      dec: "Dutch Design Studio has been a game-changer for our business! Claiming our profile was simple, boosted our online presence significantly. The platform makes managing customer reviews, plus the subscription options provide great value.",
      user: {
        username: "John Jack",
        profileUrl: "/BusinessCarousel/Avator.svg",
        jobTitle: "CEO",
        rating: 3.5,
      },
    },
    {
      headerImg: "/BusinessCarousel/Company.svg",
      header: "Dutch Design Studio",
      headerUrl: "www.company.com",
      dec: "Dutch Design Studio has been a game-changer for our business! Claiming our profile was simple, boosted our online presence significantly. The platform makes managing customer reviews, plus the subscription options provide great value.",
      user: {
        username: "John Jack",
        profileUrl: "/BusinessCarousel/Avator.svg",
        jobTitle: "CEO",
        rating: 3.5,
      },
    },
    {
      headerImg: "/BusinessCarousel/Company.svg",
      header: "Dutch Design Studio",
      headerUrl: "www.company.com",
      dec: "Dutch Design Studio has been a game-changer for our business! Claiming our profile was simple, boosted our online presence significantly. The platform makes managing customer reviews, plus the subscription options provide great value.",
      user: {
        username: "John Jack",
        profileUrl: "/BusinessCarousel/Avator.svg",
        jobTitle: "CEO",
        rating: 3.5,
      },
    },
  ],
];

const CarouselTimeig = Number(import.meta.env.VITE_CAROUSEL_MOVE) || 4000;

const BusinessCarousel = () => {
  const [active, setActive] = useState(0);
  const total = businessCarouselData.length;
  const timerRef = useRef(null);

  const goToSlide = (index) => {
    setActive((index + total) % total);
  };

  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, CarouselTimeig);
    return () => clearInterval(timerRef.current);
  }, [active, total]);

  return (
    <div>
      <div className="w-[95%] m-auto overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {businessCarouselData.map((carouselGroup, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <BusinessCarouselCart carouselGroup={carouselGroup} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center space-x-1 mt-7 gap-4">
        {businessCarouselData.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goToSlide(i)}
            className={
              i === active
                ? "w-5 h-5 bg-[#0041FF] rounded-full transition-all duration-300"
                : "w-11 h-5 bg-[#667085] rounded-2xl transition-all duration-300"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default BusinessCarousel;
