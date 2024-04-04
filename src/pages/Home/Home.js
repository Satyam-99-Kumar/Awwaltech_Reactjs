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
        console.log("==>", result)
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
      <GlobalIndustries data={Data} />
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
// {
//   "status": true,
//   "statusCode": 200,
//   "message": "Get content Successfully!!",
//   "result": [
//       {
//           "MetaData": {
//               "Title": "Main Title",
//               "Description": "home page Description"
//           },
//           "Banner": {
//               "BannerImage": "sdsdsd",
//               "BannerTitle": "sdsdsdsdsd",
//               "BannerSubtitle": "hvsdfjhvdhj"
//           },
//           "ServicesSection": {
//               "Title": "hbdbfbdfkjbkdjf",
//               "Paragraph": "ghggh",
//               "Services": [
//                   {
//                       "ServiceName": "l;l;l;l;",
//                       "Paragraph": "oooopp",
//                       "Link": "iopiuyh",
//                       "_id": "660e0662fb8b85f3efc26043"
//                   },
//                   {
//                       "ServiceName": "l;l;l;l;",
//                       "Paragraph": "oooopp",
//                       "Link": "iopiuyh",
//                       "_id": "660e0662fb8b85f3efc26044"
//                   }
//               ]
//           },
//           "IndustriesSection": {
//               "Title1": "jhhjhj",
//               "Title2": "hjhjhjhjhj",
//               "Paragraph": "sfgsfdfsgfsfg",
//               "Industries": [
//                   {
//                       "IndustryName": "werwerwerwerwe",
//                       "Paragraph": "fhfhfghgfhfg",
//                       "OurExpertise": "gjghjhfjhfjghj",
//                       "Image": "fhfghfghfgh",
//                       "Link": "fhyjfghfhgf",
//                       "_id": "660e0662fb8b85f3efc26045"
//                   }
//               ]
//           },
//           "ClientsSection": {
//               "Title1": "CLients",
//               "Title2": "welcome",
//               "Paragraph": "welcome clients",
//               "Clients": [
//                   {
//                       "ClientName": "abcd",
//                       "Paragraph": "xyz",
//                       "Image": "xyz",
//                       "Link": "xyz",
//                       "_id": "660e0662fb8b85f3efc26046"
//                   }
//               ]
//           },
//           "RecentWorkSection": {
//               "Title1": "Project",
//               "Paragraph": "welcome clients",
//               "Projects": [
//                   {
//                       "ProjectName": "abcd",
//                       "Paragraph": "xyz",
//                       "Image": "xyz",
//                       "Link": "xyz",
//                       "_id": "660e0662fb8b85f3efc26047"
//                   }
//               ]
//           },
//           "AchievementsSection": {
//               "Title1": "Project",
//               "Title2": "welcome",
//               "Paragraph": "welcome clients",
//               "Achievements": [
//                   {
//                       "Achievement": "abcd",
//                       "Paragraph": "xyz",
//                       "Image": "xyz",
//                       "Link": "xyz",
//                       "_id": "660e0662fb8b85f3efc26048"
//                   }
//               ]
//           },
//           "ClientFeedbackSection": {
//               "Title1": "Project",
//               "Title2": "welcome",
//               "Paragraph": "welcome clients",
//               "CilentFeedback": [
//                   {
//                       "Feedback": "abcd",
//                       "Paragraph": "xyz",
//                       "Image": "xyz",
//                       "Link": "xyz",
//                       "_id": "660e0662fb8b85f3efc26049"
//                   }
//               ]
//           },
//           "_id": "660e0662fb8b85f3efc26042",
//           "__v": 0
//       },
//       {
//           "MetaData": {
//               "Title": "Main Title",
//               "Description": "home page Description"
//           },
//           "Banner": {
//               "BannerImage": "https://sandips2.sg-host.com/static/media/unsplash_1lfI7wkGWZ4.8c9f9689ff354d34f8ef.png",
//               "BannerTitle": "The Ultimate Mobile App & Web Solutions for Every Trade",
//               "BannerSubtitle": "Experience A New Degree Of Innovation"
//           },
//           "ServicesSection": {
//               "Title": "Exclusive Mobile App & Web Development Company",
//               "Paragraph": "Our complete spectrum of mobile app development and web solutions help startups, small-medium enterprises, and organizations to create outcome-focused solutions with enhanced agility that help them to rapidly reshape, renew and build new capabilities for their business.",
//               "Services": [
//                   {
//                       "ServiceName": "Web Development",
//                       "Paragraph": "Our complete spectrum of mobile app development and web solutions help startups, small-medium enterprises, and organizations to create outcome",
//                       "Link": "iopiuyh",
//                       "_id": "660e8d1dfb8b85f3efc263ec"
//                   },
//                   {
//                       "ServiceName": "Web Development",
//                       "Paragraph": "Our complete spectrum of mobile app development and web solutions help startups, small-medium enterprises, and organizations to create outcome",
//                       "Link": "iopiuyh",
//                       "_id": "660e8d1dfb8b85f3efc263ed"
//                   }
//               ]
//           },
//           "IndustriesSection": {
//               "Title1": "Driving Enterprise",
//               "Title2": "Industries We Serve",
//               "Paragraph": "Empowering businesses across verticals by leveraging the power of mobility that help accelerate innovation, reduce costs and improve performance.",
//               "Industries": [
//                   {
//                       "IndustryName": "Healthcare and Fitness",
//                       "Paragraph": "Achieve new levels of efficiency, performance, and customer satisfaction- faster and easier than ever before. Codiant’s Enterprise Solutions and services are designed for large-scale businesses and enterprises with deep functional fit built-in that accurately aligns with your unique business processes.",
//                       "OurExpertise": "Our Expertise",
//                       "Image": "https://sandips2.sg-host.com/static/media/unsplash_jjhvyxm34nY.5f0fde847eb70b3000be.png",
//                       "Link": "fhyjfghfhgf",
//                       "_id": "660e8d1dfb8b85f3efc263ee"
//                   }
//               ]
//           },
//           "ClientsSection": {
//               "Title1": "CLients",
//               "Title2": "welcome",
//               "Paragraph": "welcome clients",
//               "Clients": [
//                   {
//                       "ClientName": "abcd",
//                       "Paragraph": "xyz",
//                       "Image": "xyz",
//                       "Link": "xyz",
//                       "_id": "660e8d1dfb8b85f3efc263ef"
//                   }
//               ]
//           },
//           "RecentWorkSection": {
//               "Title1": "Project",
//               "Paragraph": "welcome clients",
//               "Projects": [
//                   {
//                       "ProjectName": "abcd",
//                       "Paragraph": "xyz",
//                       "Image": "xyz",
//                       "Link": "xyz",
//                       "_id": "660e8d1dfb8b85f3efc263f0"
//                   }
//               ]
//           },
//           "AchievementsSection": {
//               "Title1": "Project",
//               "Title2": "welcome",
//               "Paragraph": "welcome clients",
//               "Achievements": [
//                   {
//                       "Achievement": "abcd",
//                       "Paragraph": "xyz",
//                       "Image": "xyz",
//                       "Link": "xyz",
//                       "_id": "660e8d1dfb8b85f3efc263f1"
//                   }
//               ]
//           },
//           "ClientFeedbackSection": {
//               "Title1": "Project",
//               "Title2": "welcome",
//               "Paragraph": "welcome clients",
//               "CilentFeedback": [
//                   {
//                       "Feedback": "abcd",
//                       "Paragraph": "xyz",
//                       "Image": "xyz",
//                       "Link": "xyz",
//                       "_id": "660e8d1dfb8b85f3efc263f2"
//                   }
//               ]
//           },
//           "_id": "660e8d1dfb8b85f3efc263eb",
//           "__v": 0
//       }
//   ]
// }