
// import { BsAward, BsCheckCircle } from "react-icons/bs";
// import { AiOutlineCheck, AiOutlineMobile } from "react-icons/ai";


// function QAenterprizes({ apiData }) {
//   return (
//     <div>
//       <div className={style.achievements}>
//         {/* ///////////////////////////////////////////// */}
//         {/* ///////////////////////////////////////////// */}
//         <div className={style.achievements__head}>
//           <div>
//             <div className={style.logo}>
//               <BsAward />
//             </div>
//             <p>{apiData.DrivingSection.TitleTag}</p>
//             <h1>
//               <div>{apiData.DrivingSection.Title1}</div>
//               <div>{apiData.DrivingSection.Title2}</div>
//               <div>{apiData.DrivingSection.Title3}</div>
//             </h1>
//             <p>{apiData.DrivingSection.Paragraph}</p>
//           </div>
//         </div>

//         {/* ///////////////////////////////////////////// */}
//         {/* ///////////////////////////////////////////// */}
//         <div className={style.achievements__achieves}>
//           {/* column 1 */}
//           <div className={style.block1}>
//             {apiData.DrivingSection.Services.slice(0, 3).map((item, index) => {
//               return (
//                 <div className={style.achive} key={index}>
//                   <BsCheckCircle />
//                   <p>{item.Paragraph}</p>
//                 </div>
//               )
//             })}

//           </div>
//           {/* column 2 */}
//           <div className={style.block2}>
//             {apiData.DrivingSection.Services.slice(-3).map((item, index) => {
//               return (
//                 <div className={style.achive} key={index}>
//                   <BsCheckCircle />
//                   <p>{item.Paragraph}</p>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//       {/* <div className={style.Benefit}>
//         <div className={style.Benefits}>
//           <div className={style.Benefit1}>

//           </div>
//           <div className={style.Benefit2}>
//             <p className={style.heading}>Benefits</p>
//             <h1 className={style.paragraph}>Benefits Of Mobile App Development</h1>
//             <div className={style.content}>
//               <p className={style.icon}>
//                 <AiOutlineCheck />
//               </p>
//               <div>
//                 <h4 className={style.Fitness}>Food/Grocery</h4>
//                 <p className={style.smartphones}>of food are purchased using smartphone or tablets</p>
//               </div>
//             </div>
//             <div className={style.content}>
//               <p className={style.icon}>
//                 <AiOutlineCheck />
//               </p>
//               <div>
//                 <h4 className={style.Fitness}>Realtime Communication</h4>
//                 <p className={style.smartphones}>of people worldwide are using audio-video chatting on their mobile phones.</p>
//               </div>
//             </div>
//             <div className={style.content}>
//               <p className={style.icon}>
//                 <AiOutlineCheck />
//               </p>
//               <div>
//                 <h4 className={style.Fitness}>Real Estate</h4>
//                 <p className={style.smartphones}>of property are searched online using real estate apps.</p>
//               </div>
//             </div>
//             <div className={style.content}>
//               <p className={style.icon}>
//                 <AiOutlineCheck />
//               </p>
//               <div>
//                 <h4 className={style.Fitness}>Travel & Hospitality</h4>
//                 <p className={style.smartphones}>of tours are ordered from mobile devices.</p>
//               </div>
//             </div>
//             <div className={style.content}>
//               <p className={style.icon}>
//                 <AiOutlineCheck />
//               </p>
//               <div>
//                 <h4 className={style.Fitness}>Education</h4>
//                 <p className={style.smartphones}>of people worldwide are using audio-video chatting on their mobile phones.</p>
//               </div>
//             </div>
//             <div className={style.content}>
//               <p className={style.icon}>
//                 <AiOutlineCheck />
//               </p>
//               <div>
//                 <h4 className={style.Fitness}>Realtime Communication</h4>
//                 <p className={style.smartphones}>of high school students use smartphones to educate themselves, compared to 28% in 2012..</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </div>


//   );
// }

// export default QAenterprizes
// import style from "./QAenterprizes.module.scss";
import QAExpertise from "./QAExpertise";
import QAProcess from "./QAProcess"; 
export default function  QAenterprizes () {
  return(
    <div>
       <QAProcess/>
       <QAExpertise/>
    </div>
  )
}