import React from "react";
import mobilepic from "../PortfolioDetailsmobileimg/PortfolioDetailsmobileimg.module.scss";
import img3 from "../../../assets/PortfolioDetails/img 3.png";


export default function PortfolioDetailsmobileimg() {
  return (
    <div>
      <div className={mobilepic.mobile_img}>
      <img src={img3} alt=""></img>

      </div>

    </div>
  );
}
