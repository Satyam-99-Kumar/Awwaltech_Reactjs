import React from "react";
import tech from "../PortfolioDetailstech/PortfolioDetailstech.module.scss";
import java from "../../../assets/PortfolioDetails/slide-img-1.png";

export default function PortfolioDetailstech() {
  return (
    <div>
      <div className={tech.tech_sect}>
        <p>Technologies</p>
        <h1>Technologies We Used</h1>
        <p>
          From idealation and concepualization to application development,
          ready-to-deploy aseetsFrom idealation and concepualization to
          application development, ready-to-deploy aseets
        </p>
        <div className={tech.box_container}>
          <div className={tech.box_row}>
            <div className={tech.tech_box}>
              <img src={java} alt=""></img>
              <div className={tech.name}>
              <p>JAVA</p>
              </div>
           
              
            </div>
            
            <div className={tech.tech_box}>
              <img src={java} alt=""></img>
              <p>JAVA</p>
            </div>
            <div className={tech.tech_box}>
              <img src={java} alt=""></img>
              <p>JAVA</p>
            </div>
            <div className={tech.tech_box}>
              <img src={java} alt=""></img>
              <p>JAVA</p>
            </div>
            <div className={tech.tech_box}>
              <img src={java} alt=""></img>
              <p>JAVA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
