import React, { useEffect, useState } from "react";
import QABanner from "../../components/QA/QABanner/QABanner";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import { fetchMobileAppServiceData, fetchHomeData } from '../../config/apiService';
import QAServices from "../../components/QA/QAServices/QAServices";
import QASolution from "../../components/QA/QASolution/QASolution";
import QAenterprizes from "../../components/QA/QAenterprizes/QAenterprizes"
import QAData from "../../json/services/qualityAssurance&Testing.json";


function QA() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Mobile App Development - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
     <Navbar />
      {QAData && (
        <>
          <QABanner apiData={QAData} />
          <QAServices apiData={QAData} />
          <QAenterprizes apiData={QAData} />
          <QASolution apiData={QAData} />
          <GlobalContact />
          <Footer />
        </>
      )}
    </>
  );
}

export default QA;
