// 
// import { BsChevronRight } from "react-icons/bs";
// import { Card, Grid } from "@mui/material";
// import { useState } from "react";

// function StrategicUXServices({ apiData }) {
//   const [contacts] = useState([
//     {
//       number: "1.",
//       title: "Iphone App",
//       info: "Development",
//     },
//     {
//       number: "2.",
//       title: "Android App",
//       info: "Development",
//     },
//     {
//       number: "3.",
//       title: "Wearable App",
//       info: "Development",
//     },
//     {
//       number: "4.",
//       title: "IPad App",
//       info: "Development",
//     },
//     {
//       number: "5.",
//       title: "Cross ",
//       info: "Platform",
//     },
//     {
//       number: "6.",
//       title: "Progressiveweb App",
//       info: "Development",
//     },
//   ]);
//   return (
//     <div className={style.solve}>
//       {/* ///////////////////////////////////// */}
//       {/* short desc */}
//       {/* ///////////////////////////////////// */}
//       <div className={style.solve__identity}>
//         <div className={style.head}>
//           <p>{apiData.MobileAppSolutionSection.Title1}</p>
//           <h2>
//             <div>{apiData.MobileAppSolutionSection.Title2}</div>
//             <div>{apiData.MobileAppSolutionSection.Title3}</div>
//             <div className={style.headMobile}>
//               {apiData.MobileAppSolutionSection.Title2}{" "}
//               {apiData.MobileAppSolutionSection.Title2}{" "}
//               {apiData.MobileAppSolutionSection.Title3}
//             </div>
//           </h2>
//         </div>
//         <div className={style.text}>
//           <p>{apiData.MobileAppSolutionSection.Paragraph1}</p>
//           <p>
//           {apiData.MobileAppSolutionSection.Paragraph2}
//           </p>
          
//         </div>
//       </div>

//       {/* ///////////////////////////////////// */}
//       {/* solutions */}
//       {/* ///////////////////////////////////// */}
//       {/* <div className={style.maingridstl}>
//         <Grid
//           className={style.gridmain}
//           container
//           spacing={2}
//           justifyContent={"center"}
//         >
//           {contacts.map((contact, index) => (
//             <Grid item sm={2} xs={12} key={index}>
//               <Card className={style.card}>
//                 <div className={style.number}>{contact.number}</div>
//                 <div>
//                   <span className={style.span}>{contact.title}</span>
//                 </div>
//                 <div className={style.span}>{contact.info}</div>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//         <div className={style.mbsrbtn}>
//           <button>Inquire now <span>
//           <BsChevronRight />
//         </span></button>
//         </div>
//       </div> */}
//     </div>
//   );
// }

// export default StrategicUXServices


import React from 'react';
import style from "./StrategicUXServices.module.scss";
import image1 from "../../../assets/UX/image-8.webp"; 
import image2 from "../../../assets/UX/image-9.webp"
import image3 from "../../../assets/UX/image-10.webp"
import image4 from "../../../assets/UX/image-11.webp"
const StrategicUXServices = () => {
  return (
    <div>
    <div className={style.app1}>
      <div className={style.breadcrumbs}>
        <a href="/">Home</a> / <a href="/services">Services</a> / <span>UI/UX Design Services Company</span>
      </div>
      <div className={style.content}>
        <div className={style.maincontent}>
          <h2>Creating UI/UX Designs that Drive Business Success</h2>
          <p>
            Delivering excellence in UI/UX design as a full-service UI/UX design company. 
            Trust our UI/UX designers to be your trusted partner for creating visually 
            appealing digital experiences that drive business success.
          </p>
        </div>
        <div className={style.sidebarimage}>
          <img src={image1} alt="UI/UX Design" />
        </div>
      </div>
    </div>
    <div className={style.app2}>
      <div className={style.features}>
        <div className={style.featurecard}>
          <img src={image2} alt="User-Centric Design Approach" />
          <h2>User-Centric Design Approach</h2>
          <p>Our user-centric approach ensures UI/UX interfaces that are easy to navigate, visually appealing, and result in high user satisfaction.</p>
        </div>
        <div className={style.featurecard}>
          <img src={image3} alt="Visual & Interactive Design Excellence" />
          <h2>Visual & Interactive Design Excellence</h2>
          <p>Our UI/UX design services focus on every visual and interactive detail to create engaging and memorable experiences that leave a lasting impression.</p>
        </div>
        <div className={style.featurecard}>
          <img src={image4} alt="Iterative Design Process" />
          <h2>Iterative Design Process</h2>
          <p>Our iterative approach allows us to validate design decisions, address usability issues, and create UI/UX interfaces that align with your business goals.</p>
        </div>
      </div>
    </div>
    <div className={style.app3}>
      <div className={style.ctasection}>
        <p className={style.subtitle}>Transform your digital presence with Exceptional UI/UX design</p>
        <h1>Let's collaborate and craft an extraordinary user experience that leaves a lasting impression</h1>
        <button className={style.ctabutton}>Connect for a free consultation</button>
      </div>
    </div>
    </div>
  );
};

export default StrategicUXServices;




















