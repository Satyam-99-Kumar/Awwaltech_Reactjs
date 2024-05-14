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
import jsonData from '../../json/homeData.json'
// import homeserviceData from "../../json/services/mobileService.json"
function Home() {
  const [data, setdata] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      setdata(jsonData);
     console.log("===home>", jsonData)
    };

    fetchData();
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
          <GlobalWorks background={`#F5F5F7`} data={jsonData} />
          <HomeAchievements  data={jsonData}/>
          <HomeFeedback background={`#F5F5F7`} />
          <GlobalContact data={jsonData}/>
          <Footer data={jsonData}/>
        </>
      )}
    </>
  );
}

export default Home;
