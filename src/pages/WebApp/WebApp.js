import React, { useEffect } from "react";
import WebAppBanner from "../../components/WebApp/WebAppBanner/WebAppBanner";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import { fetchMobileAppServiceData, fetchHomeData } from '../../config/apiService';

import WebEnterprizes from "../../components/WebApp/Webenterprizes/Webenterprizes";
import WebServices from "../../components/WebApp/WebServices/WebServices";
import WebSolution from "../../components/WebApp/WebSolution/WebSolution";
import jsonData from "../../json/services/webAppService.json";

function WebApp() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Web App Development - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
      <Navbar />
      {jsonData && (
        <>
          <WebAppBanner apiData={jsonData} />
          <WebServices apiData={jsonData} />
          <WebEnterprizes apiData={jsonData} />
          <WebSolution apiData={jsonData} />
          <GlobalContact />
          <Footer />
        </>
      )}
    </>
  );
}

export default WebApp;
