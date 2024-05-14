
import React from "react";
import { BsPatchCheck, BsCheckCircle } from "react-icons/bs";
import style from "./HomeAchievements.module.scss";


function HomeAchievements({ data }) {
  return (
    <div className={style.achievements}>
      {/* ///////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////// */}
      <div className={style.achievements__head}>
        <div>
          <div className={style.logo}>
            <BsPatchCheck />
          </div>
          <p>{data.AchievementsSection?.Title1}</p>
          <h1>{data.AchievementsSection?.Title2}</h1>
          <span>{data.AchievementsSection?.Paragraph}</span>
        </div>
      </div>

      {/* ///////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////// */}
      <div className={style.achievements__achieves}>
      {/* column 1 */}
      <div className={style.block1}>
        {data.AchievementsSection?.Achievements.slice(0,3).map((achievement, index) => (
          <div key={index} className={style.achive}>
            <BsCheckCircle />
            <p>{achievement.Paragraph}</p>
          </div>
        ))}
      </div>
      {/* column 2 */}
      <div className={style.block2}>
        {data.AchievementsSection?.Achievements.slice(-3).map((achievement, index) => (
          <div key={index} className={style.achive}>
            <BsCheckCircle />
            <p>{achievement.Paragraph}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default HomeAchievements;