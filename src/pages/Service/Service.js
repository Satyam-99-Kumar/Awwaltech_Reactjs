import React, { useEffect, useState } from "react";
import ServiceBanner from "../../components/Service/ServiceBanner/ServiceBanner";
import ServiceEnterprize from "../../components/Service/ServiceEnterprize/ServiceEnterprize";
import ServiceServices from "../../components/Service/ServiceServices/ServiceServices";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import ServiceSolution from "../../components/Service/ServiceSolution/ServiceSolution";
import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { fetchMobileAppServiceData } from '../../config/apiService';

function Service() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    window.scrollTo(0,0);
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchMobileAppServiceData();
        setApiData(result.result[0]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchDataFromAPI();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navbar />
      <ServiceBanner apiData={apiData} />
      <ServiceServices apiData={apiData} />
      <ServiceEnterprize apiData={apiData} />
      <GlobalWorks background={`#fff`} />
      <ServiceSolution apiData={apiData} />
      <ServiceInvestors />
      <GlobalContact />
      <Footer />
    </>
  );
}

export default Service;
