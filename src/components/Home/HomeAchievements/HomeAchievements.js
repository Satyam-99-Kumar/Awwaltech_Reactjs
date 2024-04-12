
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
          <p>{data?.result[0]?.AchievementsSection?.Title1}</p>
          <h1>{data?.result[0]?.AchievementsSection?.Title2}</h1>
          <span>{data?.result[0]?.AchievementsSection?.Paragraph}</span>
        </div>
      </div>

      {/* ///////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////// */}
      <div className={style.achievements__achieves}>
      {/* column 1 */}
      <div className={style.block1}>
        {data?.result[0]?.AchievementsSection?.Achievements.map((achievement, index) => (
          <div key={index} className={style.achive}>
            <BsCheckCircle />
            <p>{achievement.Paragraph}</p>
          </div>
        ))}
      </div>
      {/* column 2 */}
      <div className={style.block2}>
        {data?.result[0]?.AchievementsSection?.Achievements.map((achievement, index) => (
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