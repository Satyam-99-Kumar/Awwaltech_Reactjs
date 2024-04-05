// import style from "./HomeAchievements.module.scss";
// import { BsPatchCheck, BsCheckCircle } from "react-icons/bs";

// function HomeAchievements() {
//   return (
//     <div className={style.achievements}>
//       {/* ///////////////////////////////////////////// */}
//       {/* ///////////////////////////////////////////// */}
//       <div className={style.achievements__head}>
//         <div>
//           <div className={style.logo}>
//             <BsPatchCheck />
//           </div>
//           <p>Driving Enterprise</p>
//           <h1>Explore Achievements</h1>
//           <p>
//             Empowering businesses across verticals by leveraging the power of
//             mobility that help accelerate innovation, reduce costs and improve
//             performance.
//           </p>
//         </div>
//       </div>

//       {/* ///////////////////////////////////////////// */}
//       {/* ///////////////////////////////////////////// */}
//       <div className={style.achievements__achieves}>
//         {/* column 1 */}
//         <div className={style.block1}>
//           {/* -- 1 -- */}
//           <div className={style.achive}>
//             <BsCheckCircle />
//             <p>
//               Our complete spectrum of mobile app development and web solutions
//               help startups, small-medium enterprises  Our complete spectrum of mobile 
              
//             </p>
//           </div>
//           {/* -- 2 -- */}
//           <div className={style.achive}>
//             <BsCheckCircle />
//             <p>
//               Our complete spectrum of mobile app development and web solutions
//               help startups, small-medium enterprises  Our complete spectrum of mobile 
             
//             </p>
//           </div>
//           {/* -- 3 -- */}
//           <div className={style.achive}>
//             <BsCheckCircle />
//             <p>
//               Our complete spectrum of mobile app development and web solutions
//               help startups, small-medium enterprises  Our complete spectrum of mobile 
              
//             </p>
//           </div>
//         </div>
//         {/* column 2 */}
//         <div className={style.block2}>
//           {/* -- 1 -- */}
//           <div className={style.achive}>
//             <BsCheckCircle />
//             <p>
//               Our complete spectrum of mobile app development and web solutions
//               help startups.
//             </p>
//           </div>
//           {/* -- 2 -- */}
//           <div className={style.achive}>
//             <BsCheckCircle />
//             <p>
//               Our complete spectrum of mobile app development and web solutions
//               help startups.
//             </p>
//           </div>
//           {/* -- 3 -- */}
//           <div className={style.achive}>
//             <BsCheckCircle />
//             <p>
//               Our complete spectrum of mobile app development and web solutions
//               help startups.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomeAchievements;
import React, { useEffect, useState } from "react";
import { BsPatchCheck, BsCheckCircle } from "react-icons/bs";
import style from "./HomeAchievements.module.scss";

function HomeAchievements({ data }) {
  const [achievementsData, setAchievementsData] = useState(null);

  useEffect(() => {
    if (data && data.result && data.result.length > 0) {
      setAchievementsData(data.result[0].AchievementsSection);
    }
  }, [data]);

  return (
    <div className={style.achievements}>
      {achievementsData && (
        <>
          <div className={style.achievements__head}>
            <div>
              <div className={style.logo}>
                <BsPatchCheck />
              </div>
              <p>{achievementsData.Title1}</p>
              <h1>{achievementsData.Title2}</h1>
              <p>{achievementsData.Paragraph}</p>
            </div>
          </div>

          <div className={style.achievements__achieves}>
            <div className={style.block1}>
              {achievementsData.Achievements.map((achievement, index) => (
                <div className={style.achive} key={index}>
                  <BsCheckCircle />
                  <p>{achievement.Paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HomeAchievements;
