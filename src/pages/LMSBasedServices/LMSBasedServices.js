import React, { useEffect, useState } from "react";
import LMSBanner from "../../components/LMSBased/LMSBasedBanner/LMSBasedBanner";
import ServiceEnterprize from "../../components/Service/ServiceEnterprize/ServiceEnterprize";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import ServiceSolution from "../../components/Service/ServiceSolution/ServiceSolution";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import LSMBasedServices from "../../components/LMSBased/LMSBasedServices/LMSBasedServices";
import LSMSolution from "../../components/LMSBased/LMSBasedSolution/LMSBasedSolution";
import LSMEnterprizes from "../../components/LMSBased/LMSBasedenterprizes/LMSBasedenterprizes"
import lsmData from "../../json/services/lsmBasedServices.json";

function LMSBasedServices() {
  
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Mobile App Development - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
      <Navbar />
      {lsmData && (
        <>
          <LMSBanner apiData={lsmData} />
          <LSMBasedServices apiData={lsmData} />
          <LSMEnterprizes apiData={lsmData} />
          <LSMSolution apiData={lsmData} />
          <GlobalContact />
          <Footer />
        </>
      )}
    </>
  );
}

export default LMSBasedServices;
