import React from "react";

import {
  Header,
  Footer,
  ContactList,
  OpeningHours,
  Booking,
  Location,
} from "../container";
import { SNS } from "../components";

const Contacts = () => (
  <div>
    <Header title="Get In Touch" />
    <SNS />
    <div id="contact-section" className="row content-section">
      <ContactList />
      <OpeningHours />
      <Booking />
      <Location />
    </div>
    <Footer />
  </div>
);

export default Contacts;
