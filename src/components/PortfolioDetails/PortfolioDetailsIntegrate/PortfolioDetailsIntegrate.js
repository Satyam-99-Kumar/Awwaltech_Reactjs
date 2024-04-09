import React from "react";
import style from "../PortfolioDetailsIntegrate/PortfolioDetailsIntegrate.module.scss";
import java from "../../../assets/Technologies/java.png"
import javascript from "../../../assets/Technologies/node.png"
import php from "../../../assets/Technologies/php.png"
import net from "../../../assets/Technologies/net.png"
import { BsPatchCheck } from "react-icons/bs";

export default function PortfolioDetailstech() {

  return (
    <div className={style.background}>
      <div className={style.text}>
        <div className={style.logo}>
          <BsPatchCheck />
        </div>
        <h3>Developments</h3>
        <h1>Integrations</h1>
        <p>
          The back end of a website consists of a server, an application, and a
          database. A back-end developer builds and maintains the technology
          that powers those components which, together, enable the user-facing
          side of the website to even exist in the first place. In order to make
          the server, application, and database communicate with each other,
          back-end devs use server-side languages like PHP, Python, Java, and
          .Net to build an application, and tools like MySQL, Oracle, and SQL
          Server to find, save, or change data and serve it back to the user in
          front-end code..
        </p>
      </div>

      <div className={style.tech_container}
      >
        <div className={style.tech_box}>
            <img src={java} alt=""></img>
            <h3> PHP</h3>
        </div>
        <div className={style.tech_box}>
            <img src={javascript} alt=""></img>
            <h3> PHP</h3>
        </div>
        <div className={style.tech_box}>
            
            <img src={php} alt=""></img>
            <h3> PHP</h3>
        </div>

        <div className={style.tech_box}>
            <img src={net} alt=""></img>
            <h3> PHP</h3>
        </div>

      </div>
    </div>
  );
}
