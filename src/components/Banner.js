import React from "react";
import BannerImg from "../assets/images/Home - Banner 1 BG.jpg";
import { Button } from "reactstrap";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-text-container left">
        <div className="text-inner-cont">
          <h1 className="banner-heading">Simplicity, Value & Convenience</h1>
          <div className="banner-sub-heading my-lg-2">
            Morden private bank, servicing all your needs in one place
          </div>
          <div className="mt-lg-2">
            <Button className="banner-btn primary-bg">Apply Now</Button>
          </div>
        </div>
      </div>
      <img
        src={BannerImg}
        alt="home-bg-banner"
        className="home-banner-bg"
      ></img>
    </div>
  );
};

export default Banner;
