import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/pricing";
import Contact from "./pages/contact";

import "./App.css";
import Navigationbar from "./components/Navigationbar/Navigationbar";

const App = () => {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
