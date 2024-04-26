import React, { useEffect, useState } from "react";
import style from "./PortfolioProjects.module.scss";
// import { data } from "./Data";
import Projects from "./Projects";

function PortfolioProjects({ apiData }) {
  const [active, setActive] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const filterData = (id, tp) => {
    setActive(id); 

    if (tp === "all") {
      setFilteredData(apiData?.projectSection?.Projects);
      console.log("all==>", apiData?.projectSection?.Projects);
    } else {
      let fd = [];
      apiData?.projectSection?.Projects.forEach((d) => {
        if (d.Type.includes(tp)) {
          fd.push(d);
        }
      });
      console.log("fd==>", fd);
      setFilteredData(fd);
    }
  };

  useEffect(() => {
    filterData(1, "all");
  }, []);

  return (
    <div className={style.projects}>
      <div className={style.options}>
        <div className={style.options__wrapper}>
          <div
            className={`${style.option} ${active === 1 ? style.active : ''}`}
            onClick={() => filterData(1, "all")}
          >
            View all
          </div>
          <div
            className={`${style.option} ${active === 2 ? style.active : ''}`}
            onClick={() => filterData(2, "mobile")}
          >
            Mobile App Development
          </div>
          <div
            className={`${style.option} ${active === 3 ? style.active : ''}`}
            onClick={() => filterData(3, "app")}
          >
            Web Development
          </div>
          <div
            className={`${style.option} ${active === 4 ? style.active : ''}`}
            onClick={() => filterData(4, "expertise")}
          >
            Enterprise Devops
          </div>
        </div>
      </div>

      <Projects projects={filteredData} />
    </div>
  );
}

export default PortfolioProjects;
