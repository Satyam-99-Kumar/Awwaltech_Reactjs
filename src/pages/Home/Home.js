import React, {useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import GlobalIndustries from "../../components/Global/GlobalIndestries/GlobalIndustries";
import GlobalWorks from "../../components/Global/GlobalWorks/GlobalWorks";
import HomeAchievements from "../../components/Home/HomeAchievements/HomeAchievements";
import HomeBanner from "../../components/Home/HomeBanner/HomeBanner";
import HomeClients from "../../components/Home/HomeClients/HomeClients";
import HomeService from "../../components/Home/HomeService/HomeService";
import Navbar from "../../components/Navbar/Navbar";
import { Data } from "./IndustrySlideData";

import jsonData from '../../json/homeData.json'

function Home() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Home - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);


  return (
    <>
      <Navbar />
      {jsonData && (
        <>
          <HomeBanner data={jsonData}/>
          <HomeService data={jsonData} />
          <GlobalIndustries data={Data} apiData={jsonData} />
          <HomeClients data={jsonData} />
          <GlobalWorks background={`#F5F5F7`} apiData={jsonData} />
          <HomeAchievements  data={jsonData}/>
          {/* <HomeFeedback background={`#F5F5F7`} data={jsonData} /> */}
          <GlobalContact data={jsonData}/>
          <Footer data={jsonData}/>
        </>
      )}
    </>
  );
}

export default Home;
