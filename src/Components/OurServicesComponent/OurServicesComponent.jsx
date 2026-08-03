import { Link } from "react-router";
import NavbarSpece from "../Navbar/NavbarSpece";
import { FaArrowRight } from "react-icons/fa";
import OurServicesCartSmall from "./OurServicesCart/OurServicesCartSmall";

const OurServicesComponent = () => {
  const ourServicesData = [
    {
      img: {
        rawImg: "/Girl/GirlRaw.png",
        edited: "/Girl/GirlEdited.png",
      },
      title: "Product Photo",
      dec: "Clean cutouts for any background",
    },
    {
      img: {
        rawImg: "/Guitar/GuitarRaw.png",
        edited: "/Guitar/GuitarEdited.png",
      },
      title: "Background removal",
      dec: "Clean cutouts for any background",
    },
    {
      img: {
        rawImg: "/Cort/CortBefore.png",
        edited: "/Cort/CortAfter.png",
      },
      title: "Ecommerce Photo",
      dec: "Clean cutouts for any background",
    },
    {
      img: {
        rawImg: "/CarLogo/CarLogoBefore.png",
        edited: "/CarLogo/CarLogoAfter.png",
      },
      title: "Image Masking",
      dec: "Clean cutouts for any background",
    },
  ];

  return (
    <div>
      <NavbarSpece />

      <div className="mx-auto px-4 md:px-12 lg:px-20 bg-[#f3f6fd] w-full text-center py-20 flex flex-col gap-2.5">
        <h2 className="text-[#0041FF] text-[12px]">OUR SERVICES</h2>

        <h1 className="font-semibold text-2xl md:text-[38px] lg:text-[48px] text-[#1B263B] max-w-240 mx-auto">
          Photo Retoucher Ltd Is Your Virtual{" "}
          <span className="text-[#0041FF]">Photo Editing</span> Studio
        </h1>

        <p className="text-[16px] md:text-[20px] max-w-200 mx-auto">
          Upload your images and let our expert editors handle the tedious work.
          Get clean, consistent, and pixel-perfect results delivered in as
          little as 6 hours.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-7">
          <Link
            to="/"
            className="flex md:w-[192px] h-[52px] bg-[#0041FF] hover:bg-[#0036d9] rounded-lg text-white items-center justify-center gap-2 font-medium transition-colors shrink-0"
          >
            <span>Get My Image Edit</span>
            <FaArrowRight />
          </Link>
          <Link
            to="/"
            className="flex md:w-[192px] h-[52px] text-[#0041FF] border border-[#0041FF] hover:border-[#0041FF]/30 hover:bg-[#0041FF]/40 hover:text-white rounded-lg items-center justify-center gap-2 font-medium transition-colors shrink-0"
          >
            <span>How it works</span>
            <FaArrowRight />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
          {ourServicesData?.map((ourService, i) => (
            <OurServicesCartSmall key={("OurServicesCartSmall",i)} ourService={ourService} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServicesComponent;
