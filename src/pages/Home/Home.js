import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import GlobalIndustries from "../../components/Global/GlobalIndestries/GlobalIndustries";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import HomeAchievements from "../../components/Home/HomeAchievements/HomeAchievements";
import HomeBanner from "../../components/Home/HomeBanner/HomeBanner";
import HomeClients from "../../components/Home/HomeClients/HomeClients";
import HomeFeedback from "../../components/Home/HomeFeedback/HomeFeedback";
import HomeService from "../../components/Home/HomeService/HomeService";
import Navbar from "../../components/Navbar/Navbar";

import { Data } from "./IndustrySlideData";

function Home() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);


  return (
    <>
      <Navbar />
      <HomeBanner />
      <HomeService />
      <GlobalIndustries data={Data} />
      <HomeClients />
      <GlobalWorks background={`#F5F5F7`} />
      <HomeAchievements />
      <HomeFeedback background={`#F5F5F7`} />
      <GlobalContact />
      <Footer />
    </>
  );
}

export default Home;
