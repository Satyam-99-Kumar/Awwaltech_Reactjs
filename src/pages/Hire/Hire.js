import { useEffect } from "react";
// Components
import Footer from "../../components/Footer/Footer";
// import GlobalIndustries from "../../components/GlobalIndestries/GlobalIndustries";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import HireBanner from "../../components/Hire/HireBanner/HireBanner";
import HireService from "../../components/Hire/HireService/HireService";
import Navbar from "../../components/Navbar/Navbar";

// import {Data} from "./DrivingEnterprizeData";
// import HireClients from "../../components/HireClients/HireClients";
import HireExperience from "../../components/Hire/HireExperience/HireExperience";
import HireFaq from "../../components/Hire/HireFaq/HireFaq";
import HireExcecutionProcess from "../../components/Hire/HireExcecutionProcess/HireExcecutionProcess";

function Hire() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <HireBanner />
      <HireService />
      {/* <GlobalIndustries data={Data} /> */}
      {/* <HireClients /> */}
      <HireExcecutionProcess />
      <HireExperience />
      <HireFaq />
      <GlobalContact />
      <Footer />
    </>
  );
}

export default Hire;
