import React from "react";
import style from "./HireExcecutionProcess.module.scss";

function HireExcecutionProcess() {
  return (
    <div className={style.heprocess}>
      <div className={style.heprocess__text}>
        <p>Driving Enterprise</p>
        <h1>Our Execution Process</h1>
        <p>
          From ideation and conceptualization to application development,
          ready-to-deploy assets, marketing and support, Codiant delights
          clients of all sizes through agile deliveries and simplified
          solutions.
        </p>
      </div>

      <div className={style.heprocess__blocks}>
        <div className={style.block}>
          <div className={style.item}>
            <h4>1. Discovery Workshop</h4>
            <p>
              Here, we understand your business, goals, and priorities. These
              brainstorming sessions help us to understand your future goals.
            </p>
          </div>
          <div className={style.item}>
            <h4>2. Strategy and Solution </h4>
            <p>
              Here, we understand your business, goals, and priorities. These
              brainstorming sessions help us to understand your future goals.
            </p>
          </div>
          <div className={style.item}>
            <h4>3. Development Progress</h4>
            <p>
              Here, we understand your business, goals, and priorities. These
              brainstorming sessions help us to understand your future goals.
            </p>
          </div>
        </div>

        <div className={style.block}>
        <div className={style.item}>
            <h4>4. Testing and QA Process</h4>
            <p>
              Here, we understand your business, goals, and priorities. These
              brainstorming sessions help us to understand your future goals.
            </p>
          </div>
          <div className={style.item}>
            <h4>5. Launch and Maintenance </h4>
            <p>
              Here, we understand your business, goals, and priorities. These
              brainstorming sessions help us to understand your future goals.
            </p>
          </div>
          <div className={style.item}>
            <h4>6. Customer Service</h4>
            <p>
              Here, we understand your business, goals, and priorities. These
              brainstorming sessions help us to understand your future goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireExcecutionProcess;
