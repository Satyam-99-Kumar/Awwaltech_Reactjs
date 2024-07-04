import React, { useEffect, useState } from "react";
import CustomerBanner from "../../components/CustomerSoftware/CustomerBanner/CustomerBanner";
import ServiceEnterprize from "../../components/Service/ServiceEnterprize/ServiceEnterprize";
import ServiceServices from "../../components/Service/ServiceServices/ServiceServices";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import ServiceSolution from "../../components/Service/ServiceSolution/ServiceSolution";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import { fetchMobileAppServiceData, fetchHomeData } from '../../config/apiService';
import mobileData from "../../json/services/customerSoftware.json";


function CustomerSoftware() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Mobile App Development - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
      <Navbar />
      <CustomerBanner apiData={mobileData} />
      <ServiceServices apiData={mobileData} />
      <ServiceEnterprize apiData={mobileData} />
      {/* <GlobalWorks background={`#fff`} apiData={homeData} /> */}
      <ServiceSolution apiData={mobileData} />
      {/* <ServiceInvestors /> */}
      <GlobalContact />
      <Footer />
    </>
  );
}

export default CustomerSoftware;
