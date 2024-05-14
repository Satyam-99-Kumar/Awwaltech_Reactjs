import React from "react";
import style from "./HireExcecutionProcess.module.scss";

function HireExcecutionProcess({data}) {
  return (
    <div className={style.heprocess}>
      <div className={style.heprocess__text}>
        <p>{data.DrivingSection.TitleTag}</p>
        <h1>{data.DrivingSection.Title}</h1>
        <span>{data.DrivingSection.Paragraph}</span>
      </div>

      <div className={style.heprocess__blocks}>
        <div className={style.block}>
        {data.DrivingSection.Services.slice(0, 3).map((item,index)=>{
          return(
            <div className={style.item} key={index}>
            <h4>{index+1}. {item.Title}</h4>
            <p>{item.Paragraph} </p>
          </div>
          )
        })}
        </div>

        <div className={style.block}>
        {data.DrivingSection.Services.slice(-3).map((item,index)=>{
          return(
            <div className={style.item} key={index+4}>
            <h4>{index+4}. {item.Title}</h4>
            <p>{item.Paragraph} </p>
          </div>
          )
        })}
        </div>
      </div>
    </div>
  );
}

export default HireExcecutionProcess;
