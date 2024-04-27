import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PortfolioTalk from '../../components/Portfolio/PortfolioTalk/PortfolioTalk';

function Technology() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    window.scrollTo(0,0);
    const fetchDataFromAPI = async () => {
      try {
        // Dynamically import the fetchTechnologyData function
        const { fetchTechnologyData } = await import('../../config/apiService');
        const result = await fetchTechnologyData();
        setApiData(result.result[0]);
        setLoading(false);
        document.title = "Technology";
        document.querySelector('meta[name="description"]').setAttribute("content", "Learn Technology");
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchDataFromAPI();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Dynamically import components using React.lazy
  const TechnologyBanner = React.lazy(() => import("../../components/Technology/TechnologyBanner/TechnologyBanner"));
  const TechnologyDetail = React.lazy(() => import("../../components/Technology/TechnologyDetail/TechnologyDetail"));
  const TechnologyTech = React.lazy(() => import("../../components/Technology/TechnologyTech/TechnologyTech"));

  return (
    <>
      <Navbar />
      <React.Suspense fallback={<div>Loading...</div>}>
        <TechnologyBanner apiData={apiData} />
        <TechnologyDetail apiData={apiData} />
        {apiData.TechnologyTech.map(tech => <TechnologyTech key={tech._id} tech={tech} />)}
      </React.Suspense>
      <PortfolioTalk />
      <Footer />
    </>
  );
}

export default Technology;
