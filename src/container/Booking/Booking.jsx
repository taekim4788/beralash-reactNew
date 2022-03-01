import React from "react";

import { LinkButton } from "../../components";
import "./Booking.css";

const Booking = () => (
  <div id="booking" class="link-button sub-section">
    <h2>Book an appointment</h2>
    <LinkButton
      text="Book Now"
      link="https://www.fresha.com/a/bera-lash-auckland-5-120-sunnynook-road-ld94r2lw/booking"
    />
  </div>
);

export default Booking;