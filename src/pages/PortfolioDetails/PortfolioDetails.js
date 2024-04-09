import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PortfolioTalk from '../../components/Portfolio/PortfolioTalk/PortfolioTalk'
import PortfolioDetailsBanner from '../../components/PortfolioDetails/PortfolioDetailsBanner/PortfolioDetailsBanner'
export default function PortfolioDetails() {
  return (
    <>
    <Navbar />
    <PortfolioDetailsBanner />
    <PortfolioTalk />
    <Footer />
    </>
  )
}
