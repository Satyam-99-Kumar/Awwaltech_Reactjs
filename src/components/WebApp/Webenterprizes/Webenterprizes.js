// import style from "./webenterprizes.module.scss";
// import { BsAward, BsCheckCircle } from "react-icons/bs";
// import { AiOutlineCheck, AiOutlineMobile } from "react-icons/ai";
// function WebEnterprizes({ apiData }) {
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
//       <div className={style.Benefit}>
//         <div className={style.Benefits}>
//           {/* <div className={style.Benefit1}>

//           </div> */}
//           <div className={style.Benefit2}>
//             <p className={style.heading}>Benefits</p>
//             <h1 className={style.paragraph}>Benefits Of Web App Development</h1>
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
//       </div>
//     </div>


//   );
// }

// export default WebEnterprizes
import React from 'react';
import style from'./webenterprizes.module.scss';

export default function WebEnterprizes () {
  return(
    <div className={style.imgBanner}>
    <div className={style.banner} 
    style={{backgroundImage: "url('https://interexy.com/wp-content/uploads/2022/10/Mask-group-2.png')"
     , backgroundPosition: "center"
      , backgroundRepeat: "no-repeat"
      , backgroundSize: "cover"
    }}>
      <div className={style.content}>
        <h1 className={style.heading}>
          Want to strike a cost balance in app development?
        </h1>
        <p className={style.subtext}>
          Download costs on app development based on all factors to consider
        </p>
        <button className={style.downloadButton}>
          <span role="img" aria-label="download" style={{paddingRight:"0.5rem", fontSize:"1.8rem"}}>↗</span> I want this file
        </button>
      </div>
    </div>
    
    <div className={style.webSolutions}>
      <h1 className={style.heading}>Types of <span className={style.highlight}>Web Solutions</span> We Develop</h1>
      <div className={style.solution}>
        <div className={style.solutiondiv}>
        <div className={style.solutionContent} style={{backgroundColor: "#f6f6fd"}}>
          <h3 className={style.solutionTitle}>01 Websites & Portals</h3>
          <p className={style.solutionDescription}>
            With our expertise in developing websites and portals for leading companies, our services include crafting a product from scratch, including collecting requirements, engaging design, implementation, quality assurance as well as maintenance, and constant support.
          </p>
        </div>
        <div className={style.solutionContent} style={{backgroundColor: "#e8e8ff"}}>
          <h3 className={style.solutionTitle}>02 Custom Web Development For Enterprise</h3>
          <p className={style.solutionDescription}>
          Custom web development with Interexy allows enterprises to accelerate user base growth, open new digital channels, raise conversion, attract new customers, gain their loyalty and reach other highest business milestones.
          </p>
        </div>
        <div className={style.solutionContent} style={{backgroundColor: "#cfffd1"}}>
          <h3 className={style.solutionTitle}>03 SaaS</h3>
          <p className={style.solutionDescription}>
          By partnering with Interexy, companies get their Software-as-a-Service (SaaS) development services that cover design, deployment, implementation, and creation of multi-tenancy applications.
          </p>
        </div>
        <div className={style.solutionContent} style={{backgroundColor: "#ffd1f2"}}>
          <h3 className={style.solutionTitle}>04 Web Development For E-Commerce</h3>
          <p className={style.solutionDescription}>
          Our team of e-commerce experts helps create a website design and development tailored to a specific business model and target audience to ensure high-performance and scalable e-commerce architectures.
          </p>
        </div>
        <div className={style.solutionContent} style={{backgroundColor: "#f5f4fc"}}>
          <h3 className={style.solutionTitle}>05 Custom CMS</h3>
          <p className={style.solutionDescription}>
          Interexy offers well-thought-out custom CMS development services that guarantee prompt and cost-effective web content management, while also encouraging high website lead generation.
          </p>
        </div>
        <div className={style.solutionContent} style={{backgroundColor: "#e0fdaf"}}>
          <h3 className={style.solutionTitle}>06  UI/UX Design</h3>
          <p className={style.solutionDescription}>
          As a part of web development, we also provide comprehensive UX/UI design services for such solutions with a solid background in needed industry and compliance with your specific target audience to achieve your goals.
          </p>
        </div>
        <div className={style.solutionContent} style={{backgroundColor: "#efefef"}}>
          <h3 className={style.solutionTitle}>07  Web App Development</h3>
          <p className={style.solutionDescription}>
          We provide different types of web app development services according to mentioned requirements, industry’s needs and user base, providing a stable and highly efficient product.
          </p>
        </div>
        </div>
        <div className={style.solutionImage}>
          <img src="https://interexy.com/wp-content/uploads/2022/11/iPad-Pro-129_-with-Keyboard-Mockup-1@3x-1536x1370.png" alt="Web solution" className={style.image}/>
        </div>
      </div>
    </div>
    <div className={style.imgBanner}>
    <div className={style.banner} 
    style={{backgroundImage: "url('https://interexy.com/wp-content/uploads/2022/10/Mask-group-2.png')"
     , backgroundPosition: "center"
      , backgroundRepeat: "no-repeat"
      , backgroundSize: "cover"
    }}>
    <div className={style.content}>
        <h1 className={style.heading}>
        Let us know more about your project!
        </h1>
        <p className={style.subtext}>
        With the right partner right behind the idea, every business can 
        significantly boost sales, overcome competitors and reach new 
        business levels. If you’re ready to get started, we are here to learn more about your project.
        </p>
        <button className={style.downloadButton}>
          <span role="img" aria-label="download" style={{paddingRight:"0.5rem", fontSize:"1.8rem"}}>↗</span> Let's get started
        </button>
      </div>
      </div>
    </div>
    </div>
  )
}


























