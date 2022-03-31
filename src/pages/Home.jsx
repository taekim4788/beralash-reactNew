import React from "react";

import { Header, Services, MyWork, Footer, Instagram } from "../container";
import { SNS } from "../components";

const Welcome = () => {
  return (
    <div>
      <Header title="Services" />
      <SNS />
      <Services />
      <Instagram />
      <Footer />
    </div>
  );
};

export default Welcome;
