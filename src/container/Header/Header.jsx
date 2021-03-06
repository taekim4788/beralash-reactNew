import React from "react";

import images from "../../constants/images";
import "./Header.css";

const Header = (props) => {
  let imagePath = null;
  if (props.title === "Services") {
    imagePath = images.services;
  } else if (props.title === "Pricing") {
    imagePath = images.pricing;
  } else if (props.title === "Contact") {
    imagePath = images.contacts;
  }

  return (
    <div className="header">
      <source srcSet={imagePath} media="(min-width: 350px)"></source>
      <img src={imagePath} alt="headerImage" loading="lazy" />
      <h1 className="header-text">{props.title}</h1>
    </div>
  );
};

export default Header;
