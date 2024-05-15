import React, { useEffect, useState } from "react";
import ServiceBanner from "../../components/Service/ServiceBanner/ServiceBanner";
import ServiceEnterprize from "../../components/Service/ServiceEnterprize/ServiceEnterprize";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import ServiceSolution from "../../components/Service/ServiceSolution/ServiceSolution";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import jsonData from "../../json/services/mobileService.json";
import MobileServices from "../../components/MobileApp/MobileServices/MobileServices";
import MobileEnterprizes from "../../components/MobileApp/Mobileenterprizes/MobileEnterprizes";
import MobileSolution from "../../components/MobileApp/MobileSolution/MobileSolution";
import Mobiletechnology from "../../components/MobileApp/Mobiletechnology/Mobiletechnology";
import homeData from "../../json/homeData.json"

function MobileApp() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Mobile App Development - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);
  return (
    <>
      <Navbar />
      {jsonData && (
        <>
          <ServiceBanner data={jsonData} />
          <MobileServices data={jsonData} />
          <MobileEnterprizes data={jsonData} />
          <MobileSolution data={jsonData} />
          <GlobalWorks background={`#fff`} data={homeData} />

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
