import React, { useEffect } from "react";
import ServiceBanner from "../../components/Service/ServiceBanner/ServiceBanner";
import ServiceEnterprize from "../../components/Service/ServiceEnterprize/ServiceEnterprize";
import ServiceServices from "../../components/Service/ServiceServices/ServiceServices";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import ServiceSolution from "../../components/Service/ServiceSolution/ServiceSolution";
import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Service() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <Navbar />
      <ServiceBanner />
      <ServiceServices />
      <ServiceEnterprize />
      <GlobalWorks background={`#fff`} />
      <ServiceSolution />
      <ServiceInvestors />
      <GlobalContact />
      <Footer />
    </>
  );
}

export default Service;
