import React from 'react';
import style from'./QAExpertiseCard.module.scss';

const QAExpertiseCard = ({ title, points, image }) => {
  return (
    <div className={style.qaexpertisecard}>
      <div className={style.qaexpertisecardimage}>
        <img src={image} alt={title} />
      </div>
      <div className={style.qaexpertisecardcontent}>
        <h2>{title}</h2>
        <ul>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QAExpertiseCard;
