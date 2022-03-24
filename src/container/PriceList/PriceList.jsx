import React from "react";

import { PriceHeader, PriceItem } from "../../components";
import { priceData } from "../../constants";

import "./PriceList.css";

const PriceList = () => {
  return (
    <div id="price-content-section" className="content-section">
      <div id="lashes" className="container">
        <div className="row align-items-center">
          <div className="section-1 col-lg-6">
            <PriceHeader title="Classic Lashes" />
            {priceData.classicLashes.map((lash, index) => (
              <PriceItem
                key={lash.title + index}
                title={lash.title}
                time={lash.time}
                price={lash.price}
              />
            ))}
          </div>
          <div className="section-2 col log-6">
            <PriceHeader title="Volume Lashes" />
            {priceData.volumeLashes.map((lash, index) => (
              <PriceItem
                key={lash.title + index}
                title={lash.title}
                time={lash.time}
                price={lash.price}
              />
            ))}
          </div>
        </div>
      </div>

      <div id="infills" className="container">
        <div className="row align-items-center">
          <div className="section-1 col-lg-6">
            <PriceHeader title="Classic Infills" />
            {priceData.classicInfills.map((Infill, index) => (
              <PriceItem
                key={Infill.title + index}
                title={Infill.title}
                time={Infill.time}
                price={Infill.price}
              />
            ))}
          </div>
          <div className="section-2 col log-6">
            <PriceHeader title="Volume Infills" />
            {priceData.volumeInfills.map((infill, index) => (
              <PriceItem
                key={infill.title + index}
                title={infill.title}
                time={infill.time}
                price={infill.price}
              />
            ))}
          </div>
        </div>
      </div>

      <div id="removal" className="container">
        <div className="row align-items-center">
          <div className="section-1 col-lg-6">
            <PriceHeader title="Removal" />
            {priceData.lashRemovals.map((removal, index) => (
              <PriceItem
                key={removal.title + index}
                title={removal.title}
                time={removal.time}
                price={removal.price}
              />
            ))}
          </div>
          <div className="section-2 col log-6" id="lift">
            <PriceHeader title="Lash Lift" />
            {priceData.lashLifts.map((lift, index) => (
              <PriceItem
                key={lift.title + index}
                title={lift.title}
                time={lift.time}
                price={lift.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
