import React, { useEffect, useState } from "react";
import StrategicUXBanner from "../../components/StrategicUX/StrategicUXBanner/StrategicUXBanner";
import StrategicUXEnterprizes from "../../components/StrategicUX/StrategicUXEnterprizes/StrategicUXEnterprizes";
import StrategicUXServices from "../../components/StrategicUX/StrategicUXServices/StrategicUXServices"
import StrategicUXSolution from "../../components/StrategicUX/StrategicUXSolution/StrategicUXSolution"
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import ServiceSolution from "../../components/Service/ServiceSolution/ServiceSolution";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import { fetchMobileAppServiceData, fetchHomeData } from '../../config/apiService';
import mobileData from "../../json/services/strategicUX.json";


function StrategicUXDev() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Mobile App Development - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
      <Navbar />
      <StrategicUXBanner apiData={mobileData} />
      <StrategicUXServices apiData={mobileData} />
      <StrategicUXEnterprizes apiData={mobileData} />
    
      <StrategicUXSolution apiData={mobileData} />
  
      <GlobalContact />
      <Footer />
    </>
  );
}

export default StrategicUXDev;
