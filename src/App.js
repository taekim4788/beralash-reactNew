import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Pricing from "./pages/pricing";
import Contacts from "./pages/contacts";

import "./App.css";
import Navigationbar from "./components/Navigationbar/Navigationbar";

const App = () => {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default App;
