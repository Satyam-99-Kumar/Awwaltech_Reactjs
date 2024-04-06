import React from "react";
import style from "./GlobalIndustries.module.scss";
import { AiOutlineCheck } from "react-icons/ai";
// import { FaHeart } from "react-icons/fa";
import img1 from "../../../assets/Home/Industries/unsplash_jjhvyxm34nY.png";

function Detail({ option, data }) {
  return (
    <>
      <div className={style.heading}>
        <h3>{data[option - 1].head}</h3>
        <span>{data[option - 1].optionLogo}</span>
      </div>

      <div className={style.elements}>
        <div className={style.image}>
          <img src={img1} alt="" />
        </div>
        <div className={style.text}>
          <p>{data[option - 1].text}</p>
          <h4>Our Expertise</h4>
          <ul className={style.listInDesktop}>
            {data[option - 1].services.map((d) => (
              <li key={d.id}>
                <div>
                  <AiOutlineCheck />
                </div>
                <div>{d.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <>
        <h4 className={style.headInMobile}>Our Expertise</h4>
        <ul className={style.listInMobile}>
          {data[option - 1].services.map((d) => (
            <li key={d.id}>
              <div>
                <AiOutlineCheck />
              </div>
              <div>{d.name}</div>
            </li>
          ))}
        </ul>
      </>
    </>
  );
}

export default Detail;
