import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PortfolioTalk from '../../components/Portfolio/PortfolioTalk/PortfolioTalk'
import PortfolioDetailsBanner from '../../components/PortfolioDetails/PortfolioDetailsBanner/PortfolioDetailsBanner'
import PortfolioDetailsintro from '../../components/PortfolioDetails/PortfolioDetailsintro/PortfolioDetailsintro'
import PortfolioDetailsmobileimg from '../../components/PortfolioDetails/PortfolioDetailsmobileimg/PortfolioDetailsmobileimg'
import PortfolioDetailscreation from '../../components/PortfolioDetails/PortfolioDetailscreation/PortfolioDetailscreation'
import PortfolioDetailsInbox from '../../components/PortfolioDetails/PortfolioDeatilsInbox/PortfolioDeatilsInbox'
import PortfolioDetailsfeatures from '../../components/PortfolioDetails/PortfolioDetailsfeatures/PortfolioDetailsfeatures'
import PortfolioDetailstech from '../../components/PortfolioDetails/PortfolioDetailstech/PortfolioDetailstech'
import PortfolioDetailsIntegrate from '../../components/PortfolioDetails/PortfolioDetailsIntegrate/PortfolioDetailsIntegrate'
import PortfolioDetailsProjects from '../../components/PortfolioDetails/PortfolioDetailsProjects/PortfolioDetailsProjects'
export default function PortfolioDetails() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Portfolio Details - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);
  return (
    <>
    <Navbar />
    <PortfolioDetailsBanner />
    <PortfolioDetailsintro />
    <PortfolioDetailsmobileimg />
    <PortfolioDetailscreation />
    <PortfolioDetailsfeatures />
    <PortfolioDetailsInbox />
    <PortfolioDetailstech />
    <PortfolioDetailsIntegrate  />
    <PortfolioDetailsProjects />
    <PortfolioTalk />
    <Footer />
    </>
  )
}
