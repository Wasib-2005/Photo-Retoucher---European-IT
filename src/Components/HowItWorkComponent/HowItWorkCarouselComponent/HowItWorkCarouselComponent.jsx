import HowItWorkCarousel from "./HowItWorkCarousel";

const HowItWorkCarouselComponent = () => {

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

  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-10 lg:gap-15">
      <div className="flex flex-col text-center justify-center items-center gap-4">
        <h2 className="text-[#0041FF] font-medium text-[14px] md:text-[16px]">
          OUR SERVICES
        </h2>
        <h1 className="text-[#1B263B] text-[20px] md:text-[48px] max-w-190 md:max-w-260 font-semibold">
          Starting at USD .20 per image
        </h1>
        <p className="max-w-100 md:max-w-140 text-[14px] md:text-[20px]">
          From simple clipping paths to advanced photo retouching, Outsourced
          image editing services are ideal if you are…
        </p>
        <div className="h-1.5 w-10 md:w-19 bg-[#0041FF] rounded-2xl" />
      </div>

      <HowItWorkCarousel allOurServicesCartsData={allOurServicesCartsData} />
    </div>
  );
};

export default HowItWorkCarouselComponent;
