import React from "react";

import { Header, Services, MyWork, Footer } from "../container";
import { SNS } from "../components";

const Welcome = () => {
  return (
    <div>
      <Header title="Welcome" />
      <SNS />
      <Services />
      <MyWork />
      <Footer />
    </div>
  );
};

export default Welcome;
