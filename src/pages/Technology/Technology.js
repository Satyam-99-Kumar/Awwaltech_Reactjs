import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PortfolioTalk from "../../components/Portfolio/PortfolioTalk/PortfolioTalk";
import jsonData from "../../json/technologiesData.json";

function Technology() {
  // Dynamically import components using React.lazy
  const TechnologyBanner = React.lazy(() =>
    import("../../components/Technology/TechnologyBanner/TechnologyBanner")
  );
  const TechnologyDetail = React.lazy(() =>
    import("../../components/Technology/TechnologyDetail/TechnologyDetail")
  );
  const TechnologyTech = React.lazy(() =>
    import("../../components/Technology/TechnologyTech/TechnologyTech")
  );

  return (
    <>
      <Navbar />
      {jsonData && (
        <>
          <React.Suspense fallback={<div>Loading...</div>}>
            <TechnologyBanner data={jsonData} />
            <TechnologyDetail data={jsonData} />
            {jsonData.TechnologyTech.map((tech) => (
              <TechnologyTech key={tech._id} tech={tech} />
            ))}
          </React.Suspense>
          <PortfolioTalk />
          <Footer />
        </>
      )}
    </>
  );
}

export default Technology;
