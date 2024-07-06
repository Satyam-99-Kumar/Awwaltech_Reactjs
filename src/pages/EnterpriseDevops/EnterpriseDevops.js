import React, { useEffect, useState } from "react";
import EnterpriseBanner from "../../components/EnterpriseDevops/EnterpriseBanner/EnterpriseBanner";
import EnterpriseEnterprizes from "../../components/EnterpriseDevops/EnterpriseEnterprizes/EnterpriseEnterprizes";
import EnterpriseServices from "../../components/EnterpriseDevops/EnterpriseServices/EnterpriseServices";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import EnterpriseSolution from "../../components/EnterpriseDevops/EnterpriseSolution/EnterpriseSolution";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import mobileData from "../../json/services/enterpriseDevops.json";


function EnterpriseDevops() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Mobile App Development - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
      <Navbar />
      <EnterpriseBanner apiData={mobileData} />
      <EnterpriseServices apiData={mobileData} />
      <EnterpriseEnterprizes apiData={mobileData} />
      {/* <GlobalWorks background={`#fff`} apiData={homeData} /> */}
      <EnterpriseSolution apiData={mobileData} />
      {/* <ServiceInvestors /> */}
      <GlobalContact />
      <Footer />
    </>
  );
}

export default EnterpriseDevops;
