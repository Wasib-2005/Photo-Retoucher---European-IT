import { useState } from "react";
import AllServiceCategorie from "./AllOurServicesComponent/AllServiceCategorie";
import AllOurServicesCarts from "./AllOurServicesComponent/AllOurServicesCarts";

const AllOurServicesComponent = () => {
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

  const allOurServicesCartsData = [
    {
      img: {
        rawImg: "/BaybyCloth/BaybyClothBefore.png",
        edited: "/BaybyCloth/BaybyClothBefore.png",
      },
      title: "Clipping Path",
      dec: "Hand-drawn clipping paths give you crisp, clean cutouts that you can put on any background.",
      price: "0.20",
    },
    {
      img: {
        rawImg: "/ToyBall/ToyBallBefore.png",
        edited: "/ToyBall/ToyBallAfter.png",
      },
      title: "Background Removal",
      dec: "Make product photos pop with a clean white (or any other color you choose) background.",
      price: "0.20",
    },
    {
      img: {
        rawImg: "/BaybyCloth/BaybyClothBefore.png",
        edited: "/BaybyCloth/BaybyClothBefore.png",
      },
      title: "Photo Retouching",
      dec: "Hand-drawn clipping paths give you crisp, clean cutouts that you can put on any background.",
      price: "0.20",
    },
    {
      img: {
        rawImg: "/ToyBall/ToyBallBefore.png",
        edited: "/ToyBall/ToyBallAfter.png",
      },
      title: "Ghost Mannequin",
      dec: "Make product photos pop with a clean white (or any other color you choose) background.",
      price: "0.20",
    },
    {
      img: {
        rawImg: "/Girl/GirlRaw.png",
        edited: "/Girl/GirlEdited.png",
      },
      title: " Image Masking",
      dec: "For more intricate shots (like anything involving hair or fur), image masking gives you that extra level of precision, for cutouts that look completely natural.",
      price: "0.20",
    },
    {
      img: {
        rawImg: "/JewelryRetouching/JewelryRetouchingBefore.png",
        edited: "/JewelryRetouching/JewelryRetouchingAfter.png",
      },
      title: " Jewelry Retouching",
      dec: "Natural-looking shadows make products look more realistic — and generate more sales. Add depth and make your images more visually appealing.",
      price: "0.20",
    },
    {
      img: {
        rawImg: "/Makeup/MakeupBefore.png",
        edited: "/Makeup/MakeupAfter.png",
      },
      title: "Ecommerce Photo Editing",
      dec: "Get the perfect shot, even after the fact. Correct flaws or imperfections, and make every element of your image shine.",
      price: "0.20",
    },
    {
      img: {
        rawImg: "/Shirt/ShirtBefore.png",
        edited: "/Shirt/ShirtAfter.png",
      },
      title: "Product Photo Editing",
      dec: "Remove mannequins or models to showcase the natural fit and drape of apparel, while still keeping the focus on your products.",
      price: "0.20",
    },
    {
      img: {
        rawImg: "/TShirt/TShirtBefore.png",
        edited: "/TShirt/TShirtAfter.png",
      },
      title: "Real Estate Photo Editing",
      dec: "Get perfectly symmetric apparel product photos. We mirror your photos by hand—no templates, no shortcuts. Ideal for apparel, ecommerce, and product photography.",
      price: "0.20",
    },
    {
      img: {
        rawImg: "/Women/WomenBefore.png",
        edited: "/Women/WomenAfter.png",
      },
      title: "Real Estate Photo Editing",
      dec: "Get perfectly symmetric apparel product photos. We mirror your photos by hand—no templates, no shortcuts. Ideal for apparel, ecommerce, and product photography.",
      price: "0.20",
    },
    {
      img: {
        rawImg: "",
        edited: "",
      },
      title: "Motion Graphics & Video Editing ",
      dec: "Make product photos pop with clean white ( or any color you choose) background. Put your images on any background color or setting",
      price: "0.20",
    },
    {
      img: {
        rawImg: "",
        edited: "",
      },
      title: "Web design & development",
      dec: "Make product photos pop with clean white ( or any color you choose) background. Put your images on any background color or setting",
      price: "0.20",
    },
    {
      img: {
        rawImg: "",
        edited: "",
      },
      title: "Digital Marketing ",
      dec: "Make product photos pop with clean white ( or any color you choose) background. Put your images on any background color or setting",
      price: "0.20",
    },
  ];

  const [selectedCategorieServices, setSelectedCategorieServices] = useState(
    categorieServices[0],
  );

  return (
    <div className="text-center py-5 md:py-10 lg:py-20 flex flex-col gap-4">
      <h2 className="text-[16px] text-[#0041FF]">WE’RE YOUR VIRTUAL</h2>

      <h1 className="font-semibold text-2xl md:text-[38px] lg:text-[48px] text-[#1B263B] max-w-240 mx-auto">
        All our <span className="text-[#0041FF]">photo-editin</span>g services
      </h1>

      <p className="text-[16px] md:text-[20px] max-w-150 mx-auto">
        From simple clipping paths to advanced photo retouching, we provide all
        the image solution you need.
      </p>

      <div className="h-1.5 w-10 md:w-20 bg-[#0041FF] rounded-2xl mx-auto" />

      <div className="flex flex-wrap px-2 items-center gap-1.75 mx-auto pt-3 md:pt-6 lg:pt-12">
        {categorieServices?.map((categorieService, i) => (
          <AllServiceCategorie
            key={("categorieService", i)}
            categorieService={categorieService}
            selectedCategorieServices={selectedCategorieServices}
            setSelectedCategorieServices={setSelectedCategorieServices}
          />
        ))}
      </div>

      <AllOurServicesCarts allOurServicesCartsData={allOurServicesCartsData} />
    </div>
  );
};

export default AllOurServicesComponent;
