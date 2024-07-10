//  import style from "./webServices.module.scss";
// import { BsChevronRight } from "react-icons/bs";
// import { Card, Grid } from "@mui/material";
// import { useState } from "react";

// function WebServices({ apiData }) {
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
//           <p>{apiData.WebAppSolutionSection.Title1}</p>
//           <h2>
//             <div>{apiData.WebAppSolutionSection.Title2}</div>
//             <div>{apiData.WebAppSolutionSection.Title3}</div>
//             <div className={style.headMobile}>
//               {apiData.WebAppSolutionSection.Title2}{" "}
//               {apiData.WebAppSolutionSection.Title2}{" "}
//               {apiData.WebAppSolutionSection.Title3}
//             </div>
//           </h2>
//         </div>
//         <div className={style.text}>
//           <p>{apiData.WebAppSolutionSection.Paragraph}</p>
//           <p>
//             Being a rising name in the IT industry across the world, we deliver
//             quality services in a timely fashion to help our clients gain a
//             leading edge in this competitive market. 
//           </p>
//           <p> We are your one-stop
//             solution provider for Android, iOS & Flutter Mobile App development
//             services. Leading Startups and Companies hiring Android, iOS and
//             Flutter App developers from Zignuts Technolab to successfully drive
//             and achieve their critical mobile app development projects. As a
//             leading Indian mobile app development company with skiiled team of
//             app developers in India, we help building custom mobile apps that
//             have most interactive and modern interfaces.</p>
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

// export default WebServices

import style from "./webServices.module.scss";
import { GoArrowUpRight } from "react-icons/go";
import img1 from "../../../assets/web-app/upwork.jpeg";
import img4 from "../../../assets/web-app/clutch-1000.png";
import img3 from "../../../assets/web-app/Clutch Review.png";
import img2 from "../../../assets/web-app/top_B2B.png";
import img5 from "../../../assets/web-app/nft-statista.png";
import img6 from "../../../assets/web-app/techreviewer-logo.jpg";
import img7 from "../../../assets/web-app/The Manifest.png";
import img8 from "../../../assets/web-app/Etherscan.png";
import img9 from "../../../assets/web-app/top-software-developers.png";
import img10 from "../../../assets/web-app/Mobile_app.png";

export default function WebServices({ apiData }) {
  return (
    <div className={style.screen}>
      {/* Header Section */}
      <div className={style.head}>
        <div className={style.head_content}>
          <h1 className={style.head_heading}>Full-Cycle Web Development Services</h1>
          <p className={style.head_para}>
            With in-depth expertise and strong team, Interexy delivers intuitive and modern-day websites, web portals,
            and other web products that refresh business processes, boost digital transformation and enhance business
            workflows. Create your unique and fast-working web solution partnering with our team.
          </p>
        </div>
        <div className={style.head_images}>
          <img
            src="https://interexy.com/wp-content/uploads/2022/11/2-76@2x-1536x1204.png"
            alt="head-logo"
            className={style.head_img}
          />
        </div>
        <a href="#" className={style.link}>
          <button className={style.btn}>
            <GoArrowUpRight className={style.logo} /> Let`s get in touch!
          </button>
        </a>
      </div>

      {/* Image Collection Section */}
      <div className={style.image_collection}>
        {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map((imgSrc, index) => (
          <div className={style.imagePage} key={index}>
            <a href="#">
              <img src={imgSrc} alt="company" className={style.image} />
            </a>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div className={style.servicesPage}>
        <h1 className={style.servicesHead}>Why do you need web development services?</h1>
        <p className={style.servicesPara}>
          Custom web development solutions specially crafted for your industry help your business with:
        </p>
        <div className={style.services}>
          {[
            "Growth of user base",
            "Open new digital and business channels",
            "Prepare your business for future digital transformations",
            "Simplify the process of selling services",
            "Increase conversions for business growth",
          ].map((service, index) => (
            <div className={style.servicesBox} key={index} style={{ width: index === 2 ? "22rem" : "auto" }}>
              <div className={style.Boxinfo} style={{ backgroundColor: ["#cfddff", "#ffa1ce", "#cdbef6", "#cfffd1"][index % 4] }}>
                <div className={style.Boxnum}>{`0${index + 1}`}</div>
              </div>
              <div className={style.Boxtitle} style={{ width: index === 2 ? "72%" : "auto" }}>
                <h3 className={style.title}>{service}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
