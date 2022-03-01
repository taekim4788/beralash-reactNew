import React from "react";

import images from "../../constants/images";
import { LinkButton } from "../../components";
import "./Services.css";

const Services = (props) => (
  <div className="service-list content-section">
    <h2>Services</h2>
    <div id="service-row" className="container">
      <div className="row align-items-center">
        <div className="service-section-1 col-lg-4">
          <div className="service-list-item">
            <h6 className="service-list-content">Classic Lashes</h6>
            <h6 className="service-list-content">Volume Lashes</h6>
          </div>
        </div>
        <div className="service-section-2 col-lg-4">
          <div className="service-list-item">
            <h6 className="service-list-content">Classic Infills</h6>
            <h6 className="service-list-content">Volume Infills</h6>
          </div>
        </div>
        <div className="service-section-3 col-lg-4">
          <div className="service-list-item">
            <h6 className="service-list-content">Lash Removal</h6>
            <h6 className="service-list-content">Lash Lift</h6>
          </div>
        </div>
      </div>
    </div>

    {/* Attempt to modify with bootstrap */}
    <LinkButton text="Get Prices" link="/pricing" />
  </div>
);

export default Services;
