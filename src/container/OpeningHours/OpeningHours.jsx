import React from "react";

import "./OpeningHours.css";

const OpeningHours = () => (
  <div id="hours" className="sub-section">
    <h2>Opening Hours</h2>
    <p>We do late nights on Wednesday and Thursday</p>
    <ul id="times">
      <li>Monday: 9:30am - 6:00pm</li>
      <li>Tuesday: 9:30am - 6:00pm</li>
      <li>Wednesday: 9:30am-2:30pm, 6:00pm-10:00pm</li>
      <li>Thursday: 9:30am-2:30pm, 6:00pm-10:00pm</li>
      <li>Friday: 9:30am - 6:00pm</li>
      <li>Saturday: 9:30am - 1:30pm</li>
      <li>Sunday: Closed</li>
    </ul>
  </div>
);

export default OpeningHours;
