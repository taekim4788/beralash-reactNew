import React from "react";

import "./LinkButton.css";

const LinkButton = (props) => (
  <div className="link-button">
    <a className="btn btn-outline rounded" href={props.link}>
      {props.text}
    </a>
  </div>
);
export default LinkButton;
