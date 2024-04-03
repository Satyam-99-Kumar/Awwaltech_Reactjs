import React, { useEffect } from 'react'
import PorfolioAproject from '../../components/Portfolio/PorfolioAproject/PorfolioAproject'
import PortfolioBanner from '../../components/Portfolio/PortfolioBanner/PortfolioBanner'
import PortfolioClients from '../../components/Portfolio/PortfolioClients/PortfolioClients'
import PortfolioHighlight from '../../components/Portfolio/PortfolioHighlight/PortfolioHighlight'
import PortfolioProjects from '../../components/Portfolio/PortfolioProjects/PortfolioProjects'
import PortfolioTalk from '../../components/Portfolio/PortfolioTalk/PortfolioTalk'
import HomeFeedback from "../../components/Home/HomeFeedback/HomeFeedback"
import Footer from "../../components/Footer/Footer";
import Navbar from '../../components/Navbar/Navbar'

function Portfolio() {
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
        <Navbar />
        <PortfolioBanner />
        <PortfolioClients />
        <PorfolioAproject />
        <PortfolioProjects />
        <PortfolioHighlight />
        <HomeFeedback background={`#fff`} />
        <PortfolioTalk />
        <Footer />
    </>
  )
}

export default Portfolio