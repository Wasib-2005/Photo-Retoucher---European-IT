import React from "react";
import NavbarSpece from "../../Components/Navbar/NavbarSpece";
import Hero from "../../Components/Home/Hero";
import Right_crave from "../../assets/Right_crave.svg";
import Left_crave from "../../assets/Left_crave.svg";
import InfoSection from "../../Components/Home/InfoSection";
import Feacher from "../../Components/Home/Feacher";
const Home = () => {
  return (
    <>
      <div className="">
        \{/* 2nd Image: Bottom Left (baground) */}
        {/* Main Content Area */}
        <NavbarSpece />
        <div className="">
          <Hero />
          <InfoSection />
          <Feacher />
        </div>
      </div>
    </>
  );
};

export default Home;
