import React from "react";
import BannerImg from "../assets/images/Home - Banner 2 BG.jpg";
import { Button } from "reactstrap";

function MidBanner() {
  return (
    <div className="banner-container">
      <div className="banner-text-container right">
        <div className="text-inner-cont">
          <h1 className="banner-heading">
            Get Your own <br /> Account Today!
          </h1>
          <div className="banner-sub-heading my-lg-2">
            Our online account opening takes just couple of <br /> minutes, and
            opens world of possibilities for our <br /> clients.
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
}

export default MidBanner;
