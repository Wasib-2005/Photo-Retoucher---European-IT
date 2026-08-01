import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<MdStar key={i} size={20} color="#FB651E" />);
    } else if (rating >= i - 0.5) {
      stars.push(<MdStarHalf key={i} size={20} color="#FB651E" />);
    } else {
      stars.push(<MdStarBorder key={i} size={20} color="#ffd9c7" />);
    }
  }
  return <div className="flex items-center">{stars}</div>;
};

const BusinessCarouselCart = ({ carouselGroup }) => {
  return (
    <div className=" flex justify-between">
      {carouselGroup?.map((carousel, i) => (
        <div
          key={("carousel", i)}
          className="rounded-3xl text-black text-left w-[30%] bg-white"
        >
          <div className="flex items-center gap-3 bg-[#e9effb] rounded-t-3xl pt-6 px-4 pb-5">
            <img src={carousel.headerImg} alt="" />

            <div>
              <h1 className="text-[18px] font-medium">{carousel.header}</h1>
              <h2 className="text-[12px]">{carousel.headerUrl}</h2>
            </div>
          </div>

          <div className=" p-4 pb-6">
            <p>{carousel.dec}</p>

            <div className="flex items-center gap-3 pt-4">
              <img src={carousel?.user.profileUrl} alt="" />

              <div>
                <h1 className="text-[20px] text-[#1B263B] font-medium">
                  {carousel?.user.username}
                </h1>
                <p className="text-[16px] text-[#1B263B]">
                  {carousel?.user.jobTitle}
                </p>
                <div>
                  <div>{renderStars(carousel.user.rating)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessCarouselCart;
