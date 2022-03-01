import React from "react";

import images from "../../constants/images";
import "./Header.css";

const Header = (props) => {
  let imagePath = null;
  if (props.title === "Welcome") {
    imagePath = images.welcome;
  } else if (props.title === "Pricing") {
    imagePath = images.pricing;
  } else if (props.title === "Get In Touch") {
    imagePath = images.contacts;
  }

  return (
    <div className="header">
      <picture className="header-image">
        <source srcSet={imagePath} media="(min-width: 350px)"></source>
        <img src={imagePath} alt="headerImage" />
      </picture>
      <h1 className="header-text">{props.title}</h1>
    </div>
  );
};

export default Header;
