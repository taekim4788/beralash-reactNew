import React from "react";

import { PriceHeader, PriceItem } from "../../components";
import "./PriceSection.css";

const PriceSection = () => (
  <div id="content-row" class="container">
    <div class="row align-items-center">
      <div class="section-1 col-lg-6">
        <PriceHeader title="Classic Lashes" />
        <PriceItem title="Natural Set" time="45min" price="$60" />
        <div class="set-item">
          <h5 class="service-title">Medium Set</h5>
          <h6 class="service-content">1h</h6>
          <h6 class="service-content">$75</h6>
        </div>
        <div class="set-item">
          <h5 class="service-title">Full Set</h5>
          <h6 class="service-content">1h 15min</h6>
          <h6 class="service-content">$90</h6>
        </div>
      </div>
      <div class="section-2 col log-6">
        <PriceHeader title="Volume Lashes" />
        <div class="set-item">
          <h5 class="service-title">Light Volume Set</h5>
          <h6 class="service-content">1h</h6>
          <h6 class="service-content">$100</h6>
        </div>
        <div class="set-item">
          <h5 class="service-title">Medium Volume Set</h5>
          <h6 class="service-content">1h 15min</h6>
          <h6 class="service-content">$120</h6>
        </div>
        <div class="set-item">
          <h5 class="service-title">Glam Volume Set</h5>
          <h6 class="service-content">1h 30min</h6>
          <h6 class="service-content">$140</h6>
        </div>
      </div>
    </div>
  </div>
);

export default PriceSection;
