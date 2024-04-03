import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { data } from "../../components/Technology/TechnologyTech/Data";
import TechnologyBanner from "../../components/Technology/TechnologyBanner/TechnologyBanner";
import TechnologyDetail from "../../components/Technology/TechnologyDetail/TechnologyDetail";
import TechnologyTech from "../../components/Technology/TechnologyTech/TechnologyTech";
import PortfolioTalk from '../../components/Portfolio/PortfolioTalk/PortfolioTalk';

function Technology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <TechnologyBanner />
      <TechnologyDetail />
      { data.map(tech => <TechnologyTech key={tech.id} tech={tech} />)}
      <PortfolioTalk />
      <Footer />
    </>
  );
}

export default Technology;
