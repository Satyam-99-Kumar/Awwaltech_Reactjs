import React from 'react';
import style from './AwwaltechCard.module.scss';

const AwwaltechCard = ({ title, description, image }) => {
  return (
    <div className={style.awwaltechcard}>
      <div className={style.awwaltechcardimage}>
        <img src={image} alt={title} />
      </div>
      <div className={style.awwaltechcardcontent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AwwaltechCard;
