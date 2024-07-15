// import style from "./QAServices.module.scss";
// // import { BsChevronRight } from "react-icons/bs";
// // import { Card, Grid } from "@mui/material";
// // import { useState } from "react";

// // function QAServices({ apiData }) {
// //   const [contacts] = useState([
// //     {
// //       number: "1.",
// //       title: "Iphone App",
// //       info: "Development",
// //     },
// //     {
// //       number: "2.",
// //       title: "Android App",
// //       info: "Development",
// //     },
// //     {
// //       number: "3.",
// //       title: "Wearable App",
// //       info: "Development",
// //     },
// //     {
// //       number: "4.",
// //       title: "IPad App",
// //       info: "Development",
// //     },
// //     {
// //       number: "5.",
// //       title: "Cross ",
// //       info: "Platform",
// //     },
// //     {
// //       number: "6.",
// //       title: "Progressiveweb App",
// //       info: "Development",
// //     },
// //   ]);
// //   return (
// //     <div className={style.solve}>
// //       {/* ///////////////////////////////////// */}
// //       {/* short desc */}
// //       {/* ///////////////////////////////////// */}
// //       <div className={style.solve__identity}>
// //         <div className={style.head}>
// //           <p>{apiData.QASolutionSection.Title1}</p>
// //           <h2>
// //             <div>{apiData.QASolutionSection.Title2}</div>
// //             <div>{apiData.QASolutionSection.Title3}</div>
// //             <div className={style.headMobile}>
// //               {apiData.QASolutionSection.Title2}{" "}
// //               {apiData.QASolutionSection.Title2}{" "}
// //               {apiData.QASolutionSection.Title3}
// //             </div>
// //           </h2>
// //         </div>
// //         <div className={style.text}>
// //           <p>{apiData.QASolutionSection.Paragraph}</p>
// //           <p>
// //             Being a rising name in the IT industry across the world, we deliver
// //             quality services in a timely fashion to help our clients gain a
// //             leading edge in this competitive market. 
// //           </p>
// //           <p> We are your one-stop
// //             solution provider for Android, iOS & Flutter Mobile App development
// //             services. Leading Startups and Companies hiring Android, iOS and
// //             Flutter App developers from Zignuts Technolab to successfully drive
// //             and achieve their critical mobile app development projects. As a
// //             leading Indian mobile app development company with skiiled team of
// //             app developers in India, we help building custom mobile apps that
// //             have most interactive and modern interfaces.</p>
// //         </div>
// //       </div>

// //       {/* ///////////////////////////////////// */}
// //       {/* solutions */}
// //       {/* ///////////////////////////////////// */}
// //       {/* <div className={style.maingridstl}>
// //         <Grid
// //           className={style.gridmain}
// //           container
// //           spacing={2}
// //           justifyContent={"center"}
// //         >
// //           {contacts.map((contact, index) => (
// //             <Grid item sm={2} xs={12} key={index}>
// //               <Card className={style.card}>
// //                 <div className={style.number}>{contact.number}</div>
// //                 <div>
// //                   <span className={style.span}>{contact.title}</span>
// //                 </div>
// //                 <div className={style.span}>{contact.info}</div>
// //               </Card>
// //             </Grid>
// //           ))}
// //         </Grid>
// //         <div className={style.mbsrbtn}>
// //           <button>Inquire now <span>
// //           <BsChevronRight />
// //         </span></button>
// //         </div>
// //       </div> */}
// //     </div>
// //   );
// // }

// // export default QAServices
// import React from 'react';
// export default function QAServices () {
//   return(
//     <div className={style.qaservices}>
//     <div className={style.breadcrumb}>
//       <a href="/">Home</a> &bull; <a href="/services">Services</a> &bull; QA Services
//     </div>
//     <h1 className={style.title}>SERVICES WE OFFER</h1>
//     <p className={style.description}>
//       Whether you are working on a project or creating a product, the LeverX QA Team is ready to step in at any phase and guarantee your project or product quality. 
//       Our experts have tested dozens of mobile applications and complex enterprise software and will provide you with fail-safe solutions within your schedule, budget, and staff resources.
//     </p>
//     <div className={style.buttons}>
//       <button className={style.button}  style={{borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", backgroundColor: "[#007bff]",color: "white"}}>PROJECTS</button>
//       <button className={style.button} style={{borderTopRightRadius: "5px", borderBottomRightRadius: "5px"}}>PRODUCTS</button>
//     </div>
//   </div>
//   );
// }




// src/QAServices.js
import React, { useState } from 'react';
import style from "./QAServices.module.scss";
import Testing from './QATesting';

const QAServices = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };

  const projectItems = [
    'Create test strategy and project test plan, define scope, QA measures, timelines, the scope of non-functional tests, and acceptance procedure',
    'Review requirements and mockup testing',
    'Create and review functional and integration test cases',
    'Organize Unit Test/MIT',
    'Review acceptance test cases ahead of time',
    'Dispatch and manage incidents',
    'Manage corporate responsibility',
  ];

  const productItems = [
    'Create test strategy, defining QA measures and tools, KPIs, KQIs, release dates, the scope of non-functional tests, and timeframes for each test phase',
    'Review requirements and mockup testing for each delivery',
    'Create and reviewing functional and integration test cases',
    'Track Automated UI and Unit test coverage/execution',
    'Organize functional and non-functional testing',
    'Monitor KPIs and KQIs',
  ];

  return (
    <div className={style.qaservices}>
      <div className={style.breadcrumb}>
        <a href="/">Home</a> &bull; <a href="/services">Services</a> &bull; QA Services
      </div>
      <h1 className={style.title}>SERVICES WE OFFER</h1>
      <p className={style.description}>
        Whether you are working on a project or creating a product, the LeverX QA Team is ready to step in at any phase and guarantee your project or product quality. 
        Our experts have tested dozens of mobile applications and complex enterprise software and will provide you with fail-safe solutions within your schedule, budget, and staff resources.
      </p>
      <div className={style.buttons}>
        <button 
          className={`${style.button} ${activeTab === 'projects' ? style.active : ''}`} 
          style={{borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px"}}
          onClick={() => handleButtonClick('projects')}
        >
          PROJECTS
        </button>
        <button 
          className={`${style.button} ${activeTab === 'products' ? style.active : ''}`} 
          style={{borderTopRightRadius: "5px", borderBottomRightRadius: "5px"}}
          onClick={() => handleButtonClick('products')}
        >
          PRODUCTS
        </button>
      </div>
      <ul className={style.itemslist}>
        {activeTab === 'projects' ? 
          (
            <div className={style.listdiv}>
              <div className={style.listcontent}>
              <h1 className={style.listheading}>PROJECTS</h1>
              <ul className={style.iteams}>
                {projectItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              </div>
              <div className={style.listimg}>
                <img src='https://7567185.fs1.hubspotusercontent-na1.net/hubfs/7567185/raw_assets/public/leverx-group-theme/images/pages/solutions/qa-services-2.jpg'
                alt='img' className={style.img}/>
              </div>
            </div>
          ) : 
          (
            <div className={style.listdiv}>
              <div className={style.listcontent}>
              <h1 className={style.listheading}>PRODUCTS</h1>
              <ul className={style.iteams}>
                {productItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              </div>
              <div className={style.listimg}>
              <img src='https://7567185.fs1.hubspotusercontent-na1.net/hubfs/7567185/raw_assets/public/leverx-group-theme/images/pages/solutions/qa-services-2.jpg'
                alt='img' className={style.img}/>
              </div>
            </div>
          )
        }
      </ul>
      <Testing/>
    </div>
  );
};

export default QAServices;
