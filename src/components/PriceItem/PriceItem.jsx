import React from "react";

import "./PriceItem.css";

const PriceItem = (props) => (
  <div className="set-item">
    <h5 className="service-title">{props.title}</h5>
    <h6 className="service-content">
      {props.price} - {props.time}
    </h6>
  </div>
);

export default PriceItem;
