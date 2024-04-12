import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import { data } from "../../components/Technology/TechnologyTech/Data";
import TechnologyBanner from "../../components/Technology/TechnologyBanner/TechnologyBanner";
import TechnologyDetail from "../../components/Technology/TechnologyDetail/TechnologyDetail";
import TechnologyTech from "../../components/Technology/TechnologyTech/TechnologyTech";
import PortfolioTalk from '../../components/Portfolio/PortfolioTalk/PortfolioTalk';
import { fetchTechnologyData } from '../../config/apiService';

function Technology() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    window.scrollTo(0,0);
    const fetchDataFromAPI = async () => {
      try {
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

  return (
    <>
      <Navbar />
      <TechnologyBanner apiData={apiData} />
      <TechnologyDetail apiData={apiData} />
      { apiData.TechnologyTech.map(tech => <TechnologyTech key={tech._id} tech={tech} />)}
      <PortfolioTalk />
      <Footer />
    </>
  );
}

export default Technology;
