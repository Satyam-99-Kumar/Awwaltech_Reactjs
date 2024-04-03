import React, { useEffect } from "react";
import AboutBanner from "../../components/About/AboutBanner/AboutBanner";
import AboutEnterprize from "../../components/About/AboutEnterprize/AboutEnterprize";
import AboutInvestors from "../../components/About/AboutInvestors/AboutInvestors";
import AboutWhat from "../../components/About/AboutWhat/AboutWhat";
import Footer from "../../components/Footer/Footer";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Navbar from "../../components/Navbar/Navbar";

function About() {
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);


  return (
    <>
      <Navbar />
      <AboutBanner />
      <AboutWhat />
      <AboutEnterprize />
      <AboutInvestors />
      <GlobalContact />
      <Footer />
    </>
  );
}

export default About;
