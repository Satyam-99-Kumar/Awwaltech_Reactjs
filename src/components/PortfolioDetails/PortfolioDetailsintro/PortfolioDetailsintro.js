import React from "react";
import intro from "../PortfolioDetailsintro/PortfolioDetailsintro.module.scss";
import img2 from "../../../assets/PortfolioDetails/img 2.png";

export default function PortfolioDetailsintro() {
  return (
    <div>
      <div className={intro.intro_section}>
        <div className={intro.intro}>
          <h1>Introduction</h1>
          <p>
            Being a rising game in the IT industry across the world, we deliver
            quality services in a timely fashion to help our clients Being a
            rising game in the IT industry across the world, we deliver quality
            services in a timely fashion to help our clientsBeing a rising game
            in the IT industry across the world, we deliver quality services in
            a timely fashion to help our clients services in a timely fashion to
            help our clientsBeing a rising game in the IT industry across the
            world, we deliver quality services in a timely fashion to help our
            clients
          </p>
        </div>
        <div className={intro.img}>
          <img src={img2} alt=""></img>
        </div>
      </div>
    </div>
  );
}
