import React, { useState, useEffect } from "react";
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
import { fetchHomeData } from '../../config/apiService';


function Home() {
  const [apiData, setData] = useState(null); 

  useEffect(() => {
    window.scrollTo(0,0);
    const fetchDataFromAPI = async () => { //call API 
      try {
        const result = await fetchHomeData();
        setData(result);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchDataFromAPI();
  }, []);

  return (
    <>
      <Navbar />
      <HomeBanner data={apiData}/>
      <HomeService data={apiData} />
      <GlobalIndustries data={Data} apiData={apiData} />
      <HomeClients data={apiData} />
      <GlobalWorks background={`#F5F5F7`} />
      <HomeAchievements  data={apiData}/>
      <HomeFeedback background={`#F5F5F7`} />
      <GlobalContact data={apiData}/>
      <Footer data={apiData}/>
    </>
  );
}

export default Home;
