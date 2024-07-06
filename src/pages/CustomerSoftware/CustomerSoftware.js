import React, { useEffect, useState } from "react";
import CustomerBanner from "../../components/CustomerSoftware/CustomerBanner/CustomerBanner";
import CustomerEnterprize from "../../components/CustomerSoftware/CustomerSoftwareenterprizes/CustomerSoftwareenterprizes";
import CustomerServices from "../../components/CustomerSoftware/CustomerSoftwareServices/CustomerSoftwareServices";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import CustomerSolution from "../../components/CustomerSoftware/CustomerSoftwareSolution/CustomerSoftwareSolution";
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
      <CustomerServices apiData={mobileData} />
      <CustomerEnterprize apiData={mobileData} />
      {/* <GlobalWorks background={`#fff`} apiData={homeData} /> */}
      <CustomerSolution apiData={mobileData} />
      {/* <ServiceInvestors /> */}
      <GlobalContact />
      <Footer />
    </>
  );
}

export default CustomerSoftware;
