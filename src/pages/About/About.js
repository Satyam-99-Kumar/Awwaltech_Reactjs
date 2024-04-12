import React, { useState, useEffect } from "react";
import AboutBanner from "../../components/About/AboutBanner/AboutBanner";
import AboutEnterprize from "../../components/About/AboutEnterprize/AboutEnterprize";
// import AboutInvestors from "../../components/About/AboutInvestors/AboutInvestors";
import AboutWhat from "../../components/About/AboutWhat/AboutWhat";
import Footer from "../../components/Footer/Footer";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Navbar from "../../components/Navbar/Navbar";
import { fetchAboutData } from '../../config/apiService';
import AboutInvestors from "../../components/About/AboutInvestors/AboutInvestors";

function About() {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchAboutData();
        setApiData(result.result[0]);
      } catch (error) {
        setError(error);
      }
    };
    fetchDataFromAPI();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <>
      <Navbar />
      <AboutBanner data={apiData} />
      <AboutWhat data={apiData} />
      <AboutEnterprize data={apiData} />
      <AboutInvestors />
      <GlobalContact />
      <Footer />
    </>
  );
}

export default About;
