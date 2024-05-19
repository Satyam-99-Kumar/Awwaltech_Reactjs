import React from "react";
import style from "./GlobalWorks.module.scss";
// Images
import img1 from "../../../assets/Global/Projects/1.png";
import img2 from "../../../assets/Global/Projects/gomedii-app.png";
// import img2 from "../../../assets/Global/Projects/2.png"
// import img3 from "../../../assets/Global/Projects/3.png"
import { Link } from "react-router-dom";

function Work({ project }) {
  return (
    <div className={style.work}>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
       
        <div className={style.work__container}>
          <div
            className={style.image}
            style={{
              background: `url(${project.Image}) no-repeat center center / cover`,
            }}
          ></div>
          <div className={style.content}>
            <h4>{project.ProjectName}</h4>
            <p>{project.Paragraph}</p>
            <Link to="/">{project.type}</Link>
          </div>
        </div>
        </a>
    </div>
  );
}

export default Work;
