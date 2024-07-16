// import style from "./StrategicUXenterprizes.module.scss";
// import { BsAward, BsCheckCircle } from "react-icons/bs";
// import { AiOutlineCheck, AiOutlineMobile } from "react-icons/ai";


// function StrategicUXEnterprizes({ apiData }) {
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

// export default StrategicUXEnterprizes

import style from "./StrategicUXenterprizes.module.scss";
import React from 'react';
import Technology from "./technology";
import Nickefox from "./Nickefox";

   
export default function StrategicUXEnterprizes () {
    const Services = [
        {
            title: "User Experience Design",
            description:  "Crafting intuitive user experiences (UX) through information architecture, user flows, wireframes, and interactive prototypes."
        },
        {
            title: "User Interface Design",
            description: "Designing visually appealing interfaces, visual design elements, and interactive components that reflect your brand identity."
        }, 
        {
            title: "Responsive Design",
            description: "Optimizing designs to be responsive and adaptable across various devices and screen sizes, ensuring a consistent user experience."
        },
        {
            title: "System Design",
            description:  "Developing comprehensive system designs and style guides that maintain consistency across the product and enable efficient design scalability."
        },
        {
            title: "Mobile App Design ",
            description: "Mobile app UI UX design services to ensure your Android and iOS app is not only visually appealing but also easy to navigate and use."
        }, 
        {
            title: "Interaction Design",
            description: "Defining how users interact with the interface, including micro-interactions, animations, and transitions that enhance engagement and usability."
        },
    ];
    return(
        <>
            <div className={style.UXservices}>
              <h2 className={style.heading}>Our UI/UX Design Services</h2>
              <p className={style.subtitle}>Elevate your digital presence with Nickelfox, a trusted UI/UX design company. Our UI/UX design services encompass a wide range of offerings aimed at creating exceptional digital experiences.</p>
              <div className={style.Services}>
              {Services.map((Services,index) => (
                <div key={index} className={style.Servicescard}>
                    <h3>{Services.title}</h3>
                    <p>{Services.description}</p>
                </div>
              ))}
              </div> 
              <h2 className={style.Subheading}>Your one-stop destination for UI/UX designs</h2>  
              <button className={style.btn}>GET IN TOUCH</button>
              <Technology/>
              <Nickefox/>
              <div className={style.ctasection}>
                 <h1>Enhance user interface with tailored UI/UX design services</h1>
                 <button className={style.ctabutton}>CONTACT US</button>
                </div>
            </div>
       </>
    )
}





















