import React, { useEffect, useState } from "react";
import CloudBanner from "../../components/CloudBased/CloudBanner/CloudBanner";
import CloudEnterprize from "../../components/CloudBased/CloudBasedenterprizes/CloudBasedenterprizes";
import CloudServices from "../../components/CloudBased/CloudBasedServices/CloudBasedServices";
import CloudSolution from "../../components/CloudBased/CloudBasedSolution/CloudBasedSolution";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import { fetchMobileAppServiceData, fetchHomeData } from '../../config/apiService';
import mobileData from "../../json/services/cloudBased.json";


function CloudBased() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Mobile App Development - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
      <Navbar />
      <CloudBanner apiData={mobileData} />
      <CloudServices apiData={mobileData} />
      <CloudEnterprize apiData={mobileData} />
     
     
      <CloudSolution apiData={mobileData} />
   
      <GlobalContact />
      <Footer />
    </>
  );
}

export default CloudBased;
