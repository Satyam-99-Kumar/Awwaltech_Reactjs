import React, { Suspense, lazy, useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PortfolioBanner from "../../components/Portfolio/PortfolioBanner/PortfolioBanner";
import PortfolioProjects from "../../components/Portfolio/PortfolioProjects/PortfolioProjects";
import HomeFeedback from "../../components/Home/HomeFeedback/HomeFeedback";
import PortfolioTalk from "../../components/Portfolio/PortfolioTalk/PortfolioTalk";
import Footer from "../../components/Footer/Footer";
import jsonData from "../../json/portfolioData.json"

// Import PortfolioHighlight using React.lazy
const PortfolioHighlight = lazy(() => import("../../components/Portfolio/PortfolioHighlight/PortfolioHighlight"));

function Portfolio() {


  return (
    <>
      <Navbar />
      {jsonData && (
        <>
          <PortfolioBanner data={jsonData} />
          <PortfolioProjects data={jsonData} />
          {/* Wrap PortfolioHighlight with Suspense and fallback */}
          <Suspense fallback={<div>Loading...</div>}>
            <PortfolioHighlight data={jsonData} />
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
