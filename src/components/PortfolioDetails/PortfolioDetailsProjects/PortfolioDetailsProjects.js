import React from "react";
import projects from "../PortfolioDetailsProjects/PortfolioDetailsProjects.module.scss";
import card1 from "../../../assets/PortfolioDetails/card-img-1.jpeg";
import card2 from "../../../assets/PortfolioDetails/card-img-2.jpeg";
import card3 from "../../../assets/PortfolioDetails/card-img-3.jpeg";
import { Link } from "react-router-dom";

export default function PortfolioDetailsProjects() {
  return (
    <div>
      <div className={projects.title}>
        <h1>Recent Projects</h1>
      </div>
      <div className={projects.bg}>
        <div className={projects.project_box}>
          <div className={projects.img}>
            <img src={card1} alt=""></img>
          </div>

          <h1>Madelia</h1>
          <p>Being a rising IT industry acoss the world </p>
        </div>
        <div className={projects.project_box}>
          <div className={projects.img}>
            <img src={card2} alt=""></img>
          </div>

          <h1>Madelia</h1>
          <p>Being a rising IT industry acoss the world </p>
        </div>
        <div className={projects.project_box}>
          <div className={projects.img}>
            <img src={card3} alt=""></img>
          </div>

          <h1>Madelia</h1>
          <p>Being a rising IT industry acoss the world</p>
        </div>
      </div>
      <div className={projects.link}>
        <Link  to="/portfoliodetails">View All Projects</Link>
      </div>
    </div>
  );
}
