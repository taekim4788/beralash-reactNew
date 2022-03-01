import React from "react";

import "./PriceHeader.css";

const PriceHeader = (props) => (
  <div className="set-header">
    <h3 className="service-category">{props.title}</h3>
  </div>
);

export default PriceHeader;
