import React, { useEffect, useState } from "react";
import ServiceBanner from "../../components/Service/ServiceBanner/ServiceBanner";
import ServiceEnterprize from "../../components/Service/ServiceEnterprize/ServiceEnterprize";
import ServiceServices from "../../components/Service/ServiceServices/ServiceServices";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import ServiceSolution from "../../components/Service/ServiceSolution/ServiceSolution";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { fetchMobileAppServiceData, fetchHomeData } from '../../config/apiService';
const homedata = `./json/homeData.json`;

function Service() {
  const [apiData, setApiData] = useState(null);
  const [apiHomeData, setHomeApiData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0,0);
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchMobileAppServiceData();
        setApiData(result.result[0]);
        document.title = "Mobile App";
        document.querySelector('meta[name="description"]').setAttribute("content", "Mobile App");
      } catch (error) {
        setError(error);
      }
    };

    const fetchHomeDataFromAPI = async () => {
      try {
        const response = await fetch(homedata);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setHomeApiData(result);
      } catch (error) {
        setError(error);
      } finally {
        // setLoading(false);
      }
    };

    fetchDataFromAPI();
    fetchHomeDataFromAPI();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  // Check if apiData is still null, meaning the API call hasn't completed yet
  if (apiData === null) {
    return null; // or any other placeholder while waiting for the API call to complete
  }

  return (
    <>
      <Navbar />
      <ServiceBanner apiData={apiData} />
      <ServiceServices apiData={apiData} />
      <ServiceEnterprize apiData={apiData} />
      <GlobalWorks background={`#fff`} apiData={apiHomeData} />
      <ServiceSolution apiData={apiData} />
      {/* <ServiceInvestors /> */}
      <GlobalContact />
      <Footer />
    </>
  );
}

export default Service;
