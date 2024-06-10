import React from 'react';
import { Link } from 'react-router-dom';
import style from './AboutBanner.module.scss';
import img1 from "../../../assets/About/f1.png";
import img2 from "../../../assets/About/f2.png";
import img3 from "../../../assets/About/f3.png";

function AboutBanner({ data }) {
  return (
    <div className={style.aboutBanner}>
      
      <div className={style.aboutBanner__left}>
        <div>
          <p>{data?.Banner?.BannerTitle}</p>
          <h1>
            <div>{data?.Banner?.Title1}</div>
            <div>{data?.Banner?.Title2}</div>
            <div>{data?.Banner?.Title3}</div>
          </h1>
          <Link to='/about'>Get a quote</Link>
        </div>
      </div>

      <div className={style.aboutBanner__right}>
        <div className={style.frame1}>
          <img src={img1} alt="" />
        </div>
        <div className={style.frame2}>
          <img src={img2} alt="" />
        </div>
        <div className={style.frame3}>
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
