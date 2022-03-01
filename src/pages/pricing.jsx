import React from "react";

import { Header, Footer, PriceList, Policy } from "../container";
import { SNS } from "../components";

const Pricing = () => (
  <div>
    <Header title="Pricing" />
    <SNS />
    <PriceList />
    <Policy />
    <Footer />
  </div>
);

export default Pricing;
