import React from 'react';
import style from "./QASteps.module.scss";

const QAStep = ({ number, title, description }) => {
  return (
    <div className={style.qastep}>
      <div className={style.qastepnumber}>{number}</div>
      <div className={style.qastepcontent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default QAStep;
