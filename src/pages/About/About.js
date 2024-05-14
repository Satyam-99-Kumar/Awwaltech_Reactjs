import React, { useState, useEffect } from "react";
import AboutBanner from "../../components/About/AboutBanner/AboutBanner";
import AboutEnterprize from "../../components/About/AboutEnterprize/AboutEnterprize";
import AboutWhat from "../../components/About/AboutWhat/AboutWhat";
import Footer from "../../components/Footer/Footer";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Navbar from "../../components/Navbar/Navbar";
import jsonData from "../../json/aboutData.json";
import AboutInvestors from "../../components/About/AboutInvestors/AboutInvestors";

function About() {
  return (
    <>
      <Navbar />
      {jsonData && (
        <>
          <AboutBanner data={jsonData} />
          <AboutWhat data={jsonData} />
          <AboutEnterprize data={jsonData} />
          <AboutInvestors />
          <GlobalContact />
          <Footer />
        </>
      )}
    </>
  );
}

export default About;
