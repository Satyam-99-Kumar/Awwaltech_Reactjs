import React, { useEffect, useState } from "react";
import style from "./PortfolioProjects.module.scss";
import { data } from "./Data";
import Projects from "./Projects";

function PortfolioProjects() {
  const [active, setActive] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const filterData = (id, tp) => {
    setActive(id);

    if (tp === "all") {
      setFilteredData(data);
    } else {
      let fd = [];
      data.forEach((d) => {
        if (d.type.includes(tp)) {
          fd.push(d);
        }
      });
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
            className={
              active === 1
                ? `${style.option} ${style.active}`
                : `${style.option}`
            }
            onClick={() => filterData(1, "all")}
          >
            Veiw all
          </div>
          <div
            className={
              active === 2
                ? `${style.option} ${style.active}`
                : `${style.option}`
            }
            onClick={() => filterData(2, "mobile")}
          >
            Mobile App Development
          </div>
          <div
            className={
              active === 3
                ? `${style.option} ${style.active}`
                : `${style.option}`
            }
            onClick={() => filterData(3, "app")}
          >
            Web Development
          </div>
          <div
            className={
              active === 4
                ? `${style.option} ${style.active}`
                : `${style.option}`
            }
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
