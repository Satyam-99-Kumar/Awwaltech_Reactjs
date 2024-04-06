import React, { useEffect, useState } from 'react'
import PorfolioAproject from '../../components/Portfolio/PorfolioAproject/PorfolioAproject'
import PortfolioBanner from '../../components/Portfolio/PortfolioBanner/PortfolioBanner'
import PortfolioClients from '../../components/Portfolio/PortfolioClients/PortfolioClients'
import PortfolioHighlight from '../../components/Portfolio/PortfolioHighlight/PortfolioHighlight'
import PortfolioProjects from '../../components/Portfolio/PortfolioProjects/PortfolioProjects'
import PortfolioTalk from '../../components/Portfolio/PortfolioTalk/PortfolioTalk'
import HomeFeedback from "../../components/Home/HomeFeedback/HomeFeedback"
import Footer from "../../components/Footer/Footer";
import Navbar from '../../components/Navbar/Navbar'
import { fetchPortfolioData } from '../../config/apiService';

function Portfolio() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    window.scrollTo(0,0);
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchPortfolioData();
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
        <PortfolioBanner data={apiData} />
        <PortfolioClients  />
        <PorfolioAproject data={apiData} />
        <PortfolioProjects data={apiData} />
        <PortfolioHighlight />
        <HomeFeedback background={`#fff`} />
        <PortfolioTalk />
        <Footer />
    </>
  )
}

export default Portfolio