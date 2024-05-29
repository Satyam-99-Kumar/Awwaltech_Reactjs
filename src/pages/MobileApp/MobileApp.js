import React, { useEffect, useState } from "react";
import ServiceBanner from "../../components/Service/ServiceBanner/ServiceBanner";
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
import jsonData from "../../json/services/mobileService.json";


function MobileApp() {
  
console.log(jsonData)
  
  return (
    <>
      <Navbar />
      {jsonData && (
        <>
          <ServiceBanner data={jsonData} />
          <MobileServices data={jsonData} />
          <MobileEnterprizes data={jsonData} />
          <MobileSolution data={jsonData} />
          <GlobalWorks background={`#F5F5F7`} data={jsonData} />

          {/* <Mobiletechnology/> */}
          {/* <ServiceInvestors /> */}
          <GlobalContact />
          <Footer />
        </>
      )}
    </>
  );
}

export default MobileApp;
