import React, { useEffect, useState } from "react";
import ITBanner from "../../components/IT/ITBanner/ITBanner";
import ITEnterprize from "../../components/IT/ITenterprizes/ITenterprizes";
import ITServices from "../../components/IT/ITServices/ITServices";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import ITSolution from "../../components/IT/ITSolution/ITSolution";
import ITTimeline from "../../components/IT/ITTimeline/ITTimeline";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import { fetchMobileAppServiceData, fetchHomeData } from '../../config/apiService';
import mobileData from "../../json/services/ITconsulting.json";


function ITConsulting() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Mobile App Development - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
      <Navbar />
      <ITBanner apiData={mobileData} />
      <ITServices apiData={mobileData} />
      <ITEnterprize apiData={mobileData} />
      {/* <GlobalWorks background={`#fff`} apiData={homeData} /> */}
      <ITSolution apiData={mobileData} />
      {/* <ServiceInvestors /> */}
      <ITTimeline />
      <GlobalContact />
      <Footer />
    </>
  );
}

export default ITConsulting;
