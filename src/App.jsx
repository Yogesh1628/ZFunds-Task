import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PersonalDetails from "./components/PersonalDetails";
import './App.css';
import FatcaDecleration from "./components/FatcaDecleration";
import KYCDetails from "./components/KYCDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/fatca-details" element={<FatcaDecleration />} />
        <Route path="/kyc-details" element={<KYCDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
