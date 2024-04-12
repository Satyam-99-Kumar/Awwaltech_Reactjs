import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import HireBanner from "../../components/Hire/HireBanner/HireBanner";
import HireService from "../../components/Hire/HireService/HireService";
import Navbar from "../../components/Navbar/Navbar";
import HireExperience from "../../components/Hire/HireExperience/HireExperience";
import HireFaq from "../../components/Hire/HireFaq/HireFaq";
import HireExcecutionProcess from "../../components/Hire/HireExcecutionProcess/HireExcecutionProcess";
import { fetchHireData } from '../../config/apiService';

function Hire() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0,0);
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchHireData();
        setApiData(result.result[0]);
        setLoading(false);
        
        document.title = "Hire Us";
        document.querySelector('meta[name="description"]').setAttribute("content", "Hire Us for inquiries");
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
      <HireBanner apiData={apiData} />
      <HireService apiData={apiData} />
      <HireExcecutionProcess  apiData={apiData} />
      <HireExperience apiData={apiData} />
      <HireFaq />
      <GlobalContact />
      <Footer />
    </>
  );
}

export default Hire;
