import React, { useEffect, useState } from "react";
import ServiceBanner from "../../components/Service/ServiceBanner/ServiceBanner";
import ServiceEnterprize from "../../components/Service/ServiceEnterprize/ServiceEnterprize";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import ServiceSolution from "../../components/Service/ServiceSolution/ServiceSolution";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { fetchMobileAppServiceData, fetchHomeData } from '../../config/apiService';
import MobileServices from "../../components/MobileApp/MobileServices/MobileServices";
import MobileEnterprizes from "../../components/MobileApp/Mobileenterprizes/MobileEnterprizes";
import MobileSolution from "../../components/MobileApp/MobileSolution/MobileSolution";
import Mobiletechnology from "../../components/MobileApp/Mobiletechnology/Mobiletechnology";
const homedata = `./json/homeData.json`;

function MobileApp() {
  const [apiData, setApiData] = useState(null);
  const [apiHomeData, setHomeApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    window.scrollTo(0,0);
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchMobileAppServiceData();
        setApiData(result.result[0]);
        setLoading(false);
        document.title = "Mobile";
        document.querySelector('meta[name="description"]').setAttribute("content", "Learn Mobile App");
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchDataFromAPI();

    const fetchHomeDataFromAPI = async () => {
      try {
        const response = await fetch(homedata);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setHomeApiData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchHomeDataFromAPI();
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
      <MobileServices apiData={apiData} />
      <MobileEnterprizes apiData={apiData} />  
      <MobileSolution apiData={apiData} />
      <GlobalWorks background={`#fff`} apiData={apiHomeData} />
    
      {/* <Mobiletechnology/> */}
      {/* <ServiceInvestors /> */}
      <GlobalContact />
      <Footer />
    </>
  );
}

export default MobileApp;
