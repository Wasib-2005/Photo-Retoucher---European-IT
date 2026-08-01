import React from "react";
import NavbarSpece from "../../Components/Navbar/NavbarSpece";
import Hero from "../../Components/Home/Hero";
import Right_crave from "../../assets/Right_crave.svg";
import Left_crave from "../../assets/Left_crave.svg";
import InfoSection from "../../Components/Home/InfoSection";
import Feacher from "../../Components/Home/Feacher/Feacher";
import Feacher1 from "../../Components/Home/Feacher1/Feacher1";
import Feacher2 from "../../Components/Home/Feacher2/Feacher2";
import Feacher3 from "../../Components/Home/Feacher3/Feacher3";

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
          <Feacher1/>
          <Feacher2/>
          <Feacher3/>

        </div>
      </div>
    </>
  );
};

export default Home;
