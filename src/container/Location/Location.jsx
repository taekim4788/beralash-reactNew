import React from "react";

import "./Location.css";

const Location = () => (
  <div id="location" class="sub-section">
    <h2>Location</h2>
    <iframe
      className="locationBox"
      title="location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.450161405341!2d174.7374681162027!3d-36.75976687995694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d3985ac0dd8a1%3A0x75c0cff09937c5c9!2s5%2F120%20Sunnynook%20Road%2C%20Sunnynook%2C%20Auckland%200620!5e0!3m2!1sen!2snz!4v1643797533260!5m2!1sen!2snz"
      width="600"
      height="450"
      style={{ borders: 0 }}
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>
);

export default Location;
