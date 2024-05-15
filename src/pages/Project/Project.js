import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProjectBanner from "../../components/Project/ProjectBanner/ProjectBanner";
import ProjectBody from "../../components/Project/ProjectBody/ProjectBody";
import PortfolioTalks from "../../components/Portfolio/PortfolioTalk/PortfolioTalk"

function Project() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Project - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
      <Navbar />
      <ProjectBanner />
      <ProjectBody />
      <PortfolioTalks />
      <Footer />
    </>
  );
}

export default Project;
