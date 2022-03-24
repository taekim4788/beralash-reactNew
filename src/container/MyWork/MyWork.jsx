import React from "react";

import images from "../../constants/images";
import { LinkButton } from "../../components";

import "./MyWork.css";

const MyWork = () => (
  <div id="work-section">
    <h2>My Work</h2>
    <div id="instafeed"></div>
    <div id="work-image-wrapper" className="row">
      <div className="work-image col-xxl-3 col-xl-6 col-lg-6 col-md-6 shadow-2">
        <img src={images.work1} alt="work" />
      </div>
      <div className="work-image col-xxl-3 col-xl-6 col-lg-6 col-md-6">
        <img src={images.work2} alt="work" />
      </div>
      <div className="work-image col-xxl-3 col-xl-6 col-lg-6 col-md-6">
        <img src={images.work3} alt="work" />
      </div>
      <div className="work-image col-xxl-3 col-xl-6 col-lg-6 col-md-6">
        <img src={images.work4} alt="work" />
      </div>
    </div>
    <LinkButton text="View More" link="https://www.instagram.com/beralashnz/" />
  </div>
);

export default MyWork;
