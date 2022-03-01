import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div id="footer-section">
      <h3>Follow Us</h3>
      <div id="footer-image-wrapper">
        <a
          href="https://www.instagram.com/beralashnz/"
          title="Follow on Instagram"
        >
          <i id="footer-instagram" className="fab fa-instagram fa-2x"></i>
        </a>
      </div>

      <p>©Copyright 2021, Beralashnz | All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
