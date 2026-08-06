import { useState } from "react";
import AllServiceCategorie from "../../OurServicesComponent/AllOurServicesComponent/AllServiceCategorie";
import PortfolioCart from "./PortfolioCart";

const PortfolioComponentPart2 = () => {
  const categorieServices = [
    { name: "All", value: "all" },
    { name: "Product photo", value: "product_photo" },
    { name: "Photo Retouching", value: "photo_retouching" },
    { name: "Real Estate", value: "real_estate" },
    { name: "Jewellery Photo", value: "jewellery_photo" },
    { name: "Photo Restoration", value: "photo_restoration" },
    { name: "Motion & Video", value: "motion_and_video" },
    { name: "Digital Marketing ", value: "digital_marketing" },
  ];

  const [selectedCategorieServices, setSelectedCategorieServices] = useState(
    categorieServices[0],
  );

  const portfolioCartData = [
    {
      edited: "/public/Guitar/GuitarEdited.png",
      raw: "/public/Guitar/GuitarRaw.png",
    },
    {
      edited: "/public/DontKnowWhat/DontKnowWhatEdited.png",
      raw: "/public/DontKnowWhat/DontKnowWhatRaw.png",
    },
    {
      edited: "/public/BaybyCloth/BaybyClothAfter.png",
      raw: "/public/BaybyCloth/BaybyClothBefore.png",
    },
    { edited: "/public/Girl/GirlEdited.png", raw: "/public/Girl/GirlRaw.png" },
    {
      edited: "/public/ToyBall/ToyBallAfter.png",
      raw: "/public/ToyBall/ToyBallBefore.png",
    },
    {
      edited: "/public/Women/WomenAfter.png",
      raw: "/public/Women/WomenBefore.png",
    },
    {
      edited: "/public/Makeup/MakeupAfter.png",
      raw: "/public/Makeup/MakeupBefore.png",
    },
    {
      edited: "/public/TShirt/TShirtAfter.png",
      raw: "/public/TShirt/TShirtBefore.png",
    },
    {
      edited: "/public/ToyBall/ToyBallAfter.png",
      raw: "/public/ToyBall/ToyBallBefore.png",
    },
    {
      edited: "/public/Ring/RingAfter.png",
      raw: "/public/Ring/RingBefore.png",
    },
    {
      edited: "/public/DishWasher/DishWasherEdited.png",
      raw: "/public/DishWasher/DishWasherRaw.png",
    },
    {
      edited: "/public/Cort/CortAfter.png",
      raw: "/public/Cort/CortBefore.png",
    },
  ];

  return (
    <div className="flex flex-col gap-10 justify-center items-center ">
      <div className="text-center flex flex-col justify-center">
        <h2 className="text-[16px] text-[#0041FF]">WE’RE YOUR VIRTUAL</h2>
        <h1 className="font-semibold text-2xl md:text-[38px] lg:text-[48px] text-[#1B263B] max-w-240 mx-auto">
          All our <span className="text-[#0041FF]">photo-editing</span> services
        </h1>
        <p className=" text-[14px] md:text-[20px]">
          From simple clipping paths to advanced photo retouching,
          <br />
          we provide all the image solution you need.
        </p>
      </div>
      <div className="h-1.5 w-10 md:w-20 bg-[#0041FF] rounded-2xl" />

      <div className="flex flex-wrap px-2 items-center gap-1.75 mx-auto ">
        {categorieServices?.map((categorieService, i) => (
          <AllServiceCategorie
            key={("categorieService", i)}
            categorieService={categorieService}
            selectedCategorieServices={selectedCategorieServices}
            setSelectedCategorieServices={setSelectedCategorieServices}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 w-full">
        {portfolioCartData?.map((cart, i) => (
          <PortfolioCart key={i} cart={cart} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioComponentPart2;
