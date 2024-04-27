import React, { Suspense, lazy, useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PortfolioBanner from "../../components/Portfolio/PortfolioBanner/PortfolioBanner";
import PortfolioProjects from "../../components/Portfolio/PortfolioProjects/PortfolioProjects";
import HomeFeedback from "../../components/Home/HomeFeedback/HomeFeedback";
import PortfolioTalk from "../../components/Portfolio/PortfolioTalk/PortfolioTalk";
import Footer from "../../components/Footer/Footer";
import { fetchPortfolioData } from "../../config/apiService";

// Import PortfolioHighlight using React.lazy
const PortfolioHighlight = lazy(() => import("../../components/Portfolio/PortfolioHighlight/PortfolioHighlight"));

function Portfolio() {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    try {
      const result = await fetchPortfolioData();
      setApiData(result?.result[0]);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navbar />
      {apiData && (
        <>
          <PortfolioBanner data={apiData} />
          <PortfolioProjects apiData={apiData} />
          {/* Wrap PortfolioHighlight with Suspense and fallback */}
          <Suspense fallback={<div>Loading...</div>}>
            <PortfolioHighlight apiData={apiData} />
          </Suspense>
          <HomeFeedback background={`#fff`} />
          <PortfolioTalk />
          <Footer />
        </>
      )}
    </>
  );
}

export default Portfolio;
