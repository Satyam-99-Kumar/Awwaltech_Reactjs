import React, { useEffect } from "react";
import CareerBanner from "../../components/Career/CareerBanner/CareerBanner";
import CareerOpening from "../../components/Career/CareerOpening/CareerOpening";
import PortfolioTalk from "../../components/Portfolio/PortfolioTalk/PortfolioTalk";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Career() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Career - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);


  return (
    <>
      <Navbar />
      <CareerBanner />
      <CareerOpening />
      <PortfolioTalk />
      <Footer />
    </>
  );
}

export default Career;
