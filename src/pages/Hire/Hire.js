import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import HireBanner from "../../components/Hire/HireBanner/HireBanner";
import HireService from "../../components/Hire/HireService/HireService";
import Navbar from "../../components/Navbar/Navbar";
import HireExperience from "../../components/Hire/HireExperience/HireExperience";
import HireProcess from "../../components/Hire/HireProcess/HireProcess";
import HireExcecutionProcess from "../../components/Hire/HireExcecutionProcess/HireExcecutionProcess";
import HiringIncludeSection from "../../components/Hire/HiringIncludeSection/HiringIncludeSection";
import jsonData from "../../json/hireData.json";

function Hire() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Hire Developers - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);
  return (
    <>
      <Navbar />
      {jsonData && (
        <>
          <HireBanner data={jsonData} />
          <HireService data={jsonData} />
          <HireExcecutionProcess data={jsonData} />
          <HireExperience data={jsonData} />
          <HireProcess />
          <HiringIncludeSection />
          <GlobalContact />
          <Footer />
        </>
      )}
    </>
  );
}

export default Hire;
