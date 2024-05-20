import React, { useEffect, useState } from "react";
import LMSBanner from "../../components/LMSBased/LMSBasedBanner/LMSBasedBanner";
import ServiceEnterprize from "../../components/Service/ServiceEnterprize/ServiceEnterprize";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import ServiceSolution from "../../components/Service/ServiceSolution/ServiceSolution";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import MobileServices from "../../components/MobileApp/MobileServices/MobileServices";
import MobileEnterprizes from "../../components/MobileApp/Mobileenterprizes/MobileEnterprizes";
import MobileSolution from "../../components/MobileApp/MobileSolution/MobileSolution";
import Mobiletechnology from "../../components/MobileApp/Mobiletechnology/Mobiletechnology";
// import homeData from "../../json/homeData.json"
import mobileData from "../../json/services/mobileService.json";


function LMSBasedServices() {
  
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Mobile App Development - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
      <Navbar />
      <LMSBanner apiData={mobileData} />
      <ServiceEnterprize apiData={mobileData} />
      {/* <GlobalWorks background={`#fff`} apiData={homeData} /> */}
      <ServiceSolution apiData={mobileData} />
      {/* <ServiceInvestors /> */}
      <GlobalContact />
      <Footer />
    </>
  );
}

export default LMSBasedServices;
