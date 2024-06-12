import React from "react";
import Banner from "../components/Banner";
import "../assets/css/home.css";
import OurOfferings from "../components/OurOfferings";
import MidBanner from "../components/MidBanner";
import ConvenienceSection from "../components/ConvenienceSection";
import BenefitSection from "../components/BenefitSection";

function Home() {
  return (
    <div>
      <Banner />
      <OurOfferings />
      <ConvenienceSection />
      <MidBanner />
      <BenefitSection />
    </div>
  );
}

export default Home;
