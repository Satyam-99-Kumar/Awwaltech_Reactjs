import React, { useState, useEffect } from "react";
import AboutBanner from "../../components/About/AboutBanner/AboutBanner";
import AboutEnterprize from "../../components/About/AboutEnterprize/AboutEnterprize";
import AboutWhat from "../../components/About/AboutWhat/AboutWhat";
import Footer from "../../components/Footer/Footer";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Navbar from "../../components/Navbar/Navbar";
import { fetchAboutData } from '../../config/apiService';
import AboutInvestors from "../../components/About/AboutInvestors/AboutInvestors";

function About() {
  const [apiData, setData] = useState(null); 

  useEffect(() => {
    window.scrollTo(0,0);

    const fetchDataFromAPI = async () => { 
      try {
        const result = await fetchAboutData();
        setData(result.result[0]);
        document.title = "About Us";
        document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
      } catch (error) {
      }
    };

    fetchDataFromAPI();

  }, []);

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
