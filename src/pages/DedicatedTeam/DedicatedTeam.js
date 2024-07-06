import React, { useEffect, useState } from "react";
import DedicatedBanner from "../../components/Dedicated/DedicatedBanner/DedicatedBanner";
import DedicatedEnterprize from "../../components/Dedicated/Dedicatedenterprizes/Dedicatedenterprizes";
import DedicatedServices from "../../components/Dedicated/DedicatedServices/DedicatedServices";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import DedicatedSolution from "../../components/Dedicated/DedicatedSolution/DedicatedSolution";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import { fetchMobileAppServiceData, fetchHomeData } from '../../config/apiService';
import mobileData from "../../json/services/dedicatedDev.json";


function DedicaedTeam() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Mobile App Development - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
      <Navbar />
      <DedicatedBanner apiData={mobileData} />
      <DedicatedServices apiData={mobileData} />
      <DedicatedEnterprize apiData={mobileData} />
      {/* <GlobalWorks background={`#fff`} apiData={homeData} /> */}
      <DedicatedSolution apiData={mobileData} />
      {/* <ServiceInvestors /> */}
      <GlobalContact />
      <Footer />
    </>
  );
}

export default DedicaedTeam;
