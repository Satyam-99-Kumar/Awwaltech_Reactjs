import React, { useEffect, useState } from "react";
import CyberBanner from "../../components/Cyber/CyberBanner/CyberBanner";
import CybeEnterprize from "../../components/Cyber/Cyberenterprizes/Cyberenterprizes";
import CybeServices from "../../components/Cyber/CyberServices/CyberServices";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import CybeSolution from "../../components/Cyber/CyberSolution/CyberSolution";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import { fetchMobileAppServiceData, fetchHomeData } from '../../config/apiService';
import mobileData from "../../json/services/cyberSecurity.json";


function CyberSecurity() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Mobile App Development - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
      <Navbar />
      <CyberBanner apiData={mobileData} />
      <CybeServices apiData={mobileData} />
      <CybeEnterprize apiData={mobileData} />
      {/* <GlobalWorks background={`#fff`} apiData={homeData} /> */}
      <CybeSolution apiData={mobileData} />
      {/* <ServiceInvestors /> */}
      <GlobalContact />
      <Footer />
    </>
  );
}

export default CyberSecurity;
