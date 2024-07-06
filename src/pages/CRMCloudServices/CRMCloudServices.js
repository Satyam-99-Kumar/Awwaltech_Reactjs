import React, { useEffect, useState } from "react";
import CRMBanner from "../../components/CRM/CRMBanner/CRMBanner";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import { fetchMobileAppServiceData, fetchHomeData } from '../../config/apiService';
import CRMServices from "../../components/CRM/CRMServices/CRMServices";
import CRMSolution from "../../components/CRM/CRMSolution/CRMSolution";
import CRMenterprizes from "../../components/CRM/CRMenterprizes/CRMenterprizes";
import crmData from "../../json/services/crmCloudServices.json";


function CRMCloudServices() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Mobile App Development - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
      <Navbar />
      {crmData && (
        <>
          <CRMBanner apiData={crmData} />
          <CRMServices apiData={crmData} />
          <CRMenterprizes apiData={crmData} />
          <CRMSolution apiData={crmData} />
          <GlobalContact />
          <Footer />
        </>
      )}
    </>
  );
}

export default CRMCloudServices;
