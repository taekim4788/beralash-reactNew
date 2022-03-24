import React from "react";

import { Header, Footer, ContactList, InfoSection } from "../container";
import { EmailTemplate, SNS } from "../components";

const Contact = () => (
  <div>
    <Header title="Contact" />
    <SNS />
    <div id="contact-section" className="row content-section">
      <ContactList />
      <InfoSection />
      <EmailTemplate />
    </div>
    <Footer />
  </div>
);

export default Contact;
