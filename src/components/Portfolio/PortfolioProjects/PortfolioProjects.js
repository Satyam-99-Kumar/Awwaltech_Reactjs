import React, { useEffect, useState, useMemo } from "react";
import style from "./PortfolioProjects.module.scss";
import Projects from "./Projects";

function PortfolioProjects({ data }) {
  const [active, setActive] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  
  const getCategory = (active) => {
    switch (active) {
      case 2:
        return "mobile";
      case 3:
        return "app";
      case 4:
        return "expertise";
      default:
        return "";
    }
  };

  
  const memoizedFilteredData = useMemo(() => {
    if (active === 1) {
      return data?.projectSection?.Projects || [];
    } else {
      return (
        data?.projectSection?.Projects?.filter((project) =>
          project.Type.includes(getCategory(active))
        ) || []
      );
    }
  }, [data, active]);

  useEffect(() => {
    setFilteredData(memoizedFilteredData);
  }, [memoizedFilteredData]);

 
  const filterData = (id) => {
    setActive(id);
  };

  return (
    <div className={style.projects}>
      <div className={style.options}>
        <div className={style.options__wrapper}>
          <div
            className={`${style.option} ${active === 1 ? style.active : ""}`}
            onClick={() => filterData(1)}
          >
            View all
          </div>
          <div
            className={`${style.option} ${active === 2 ? style.active : ""}`}
            onClick={() => filterData(2)}
          >
            Mobile App Development
          </div>
          <div
            className={`${style.option} ${active === 3 ? style.active : ""}`}
            onClick={() => filterData(3)}
          >
            Web Development
          </div>
          <div
            className={`${style.option} ${active === 4 ? style.active : ""}`}
            onClick={() => filterData(4)}
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
