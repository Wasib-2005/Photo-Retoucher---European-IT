import { useState } from "react";
import AllServiceCategorie from "../../OurServicesComponent/AllOurServicesComponent/AllServiceCategorie";
import Blog2Cart from "./Blog2Cart";
import Blog2Page from "./Blog2Page";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BlogPart2 = () => {
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

  const blogs = [
    {
      _id: "1",
      img: "/BlogImg/Blog1.png",
      user: "shovonahmed",
      date: "Jan 21, 2025",
      title: "How to Choose a Photo Retouching Company: 5 Red Flags To Avoid",
      read: 5,
    },
    {
      _id: "2",
      img: "/BlogImg/Blog2.png",
      user: "shovonahmed",
      date: "Jan 21, 2025",
      title: "How to Choose a Photo Retouching Company: 5 Red Flags To Avoid",
      read: 5,
    },
    {
      _id: "3",
      img: "/BlogImg/Blog3.png",
      user: "shovonahmed",
      date: "Jan 21, 2025",
      title: "How to Choose a Photo Retouching Company: 5 Red Flags To Avoid",
      read: 5,
    },
    {
      _id: "4",
      img: "/BlogImg/Blog4.png",
      user: "shovonahmed",
      date: "Jan 21, 2025",
      title: "How to Choose a Photo Retouching Company: 5 Red Flags To Avoid",
      read: 5,
    },
    {
      _id: "5",
      img: "/BlogImg/Blog5.png",
      user: "shovonahmed",
      date: "Jan 21, 2025",
      title: "How to Choose a Photo Retouching Company: 5 Red Flags To Avoid",
      read: 5,
    },
    {
      _id: "6",
      img: "/BlogImg/Blog6.png",
      user: "shovonahmed",
      date: "Jan 21, 2025",
      title: "How to Choose a Photo Retouching Company: 5 Red Flags To Avoid",
      read: 5,
    },
    {
      _id: "7",
      img: "/BlogImg/Blog7.png",
      user: "shovonahmed",
      date: "Jan 21, 2025",
      title: "How to Choose a Photo Retouching Company: 5 Red Flags To Avoid",
      read: 5,
    },
    {
      _id: "8",
      img: "/BlogImg/Blog8.png",
      user: "shovonahmed",
      date: "Jan 21, 2025",
      title: "How to Choose a Photo Retouching Company: 5 Red Flags To Avoid",
      read: 5,
    },
    {
      _id: "9",
      img: "/BlogImg/Blog9.png",
      user: "shovonahmed",
      date: "Jan 21, 2025",
      title: "How to Choose a Photo Retouching Company: 5 Red Flags To Avoid",
      read: 5,
    },
  ];

  const pages = 10;

  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <div className="flex flex-col justify-center gap-5 md:gap-11">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {blogs?.map((blogData, i) => (
          <Blog2Cart key={i} blogData={blogData} />
        ))}
      </div>
      <div className="flex items-center justify-center items-start gap-6 ">
        <button
          onClick={() => {
            if (selectedPage === 1) return;
            setSelectedPage(selectedPage - 1);
          }}
          className="px-6 py-3 border border-black/50 rounded-lg flex items-center gap-2 hover:bg-[#0041FF] hover:text-white"
        >
          <FaArrowLeft />
          <span>Preview</span>
        </button>
        <div className="flex  gap-6 w-64 overflow-auto h-16">
          {Array.from({ length: pages }, (_, index) => (
            <Blog2Page
              key={index}
              page={index + 1}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
        <button
          onClick={() => {
            if (selectedPage === pages) return;
            setSelectedPage(selectedPage + 1);
          }}
          className="px-6 py-3 border border-black/50 rounded-lg flex items-center gap-2 hover:bg-[#0041FF] hover:text-white"
        >
          <span>Next</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogPart2;
