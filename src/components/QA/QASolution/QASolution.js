// 
// import { AiOutlineCheck, AiOutlineMobile } from "react-icons/ai";
// import { BsCart } from "react-icons/bs";
// import img from "../../../assets/Services/image.png";
// import Slider from "react-slick/lib/slider";

// const settings = {
//   dots: false,
//   autoplay: true,
//   arrows: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   centerMode: true,
//   centerPadding: "0",
// };


// function QASolution(apidata) {
//   return (
//     <div className={style.serviceSolution}>
//       {/* ///////////////////////////////////// */}
//       {/* Content */}
//       {/* ///////////////////////////////////// */}
//       <div className={style.wrapper}>
//         <div className={style.wrapper__new}>
//           <div className={style.wrapper__left}>
//             <img src={img} alt="" />
//           </div>
//           <div className={style.wrapper__right}>
//             <p>{apidata.apiData.OurSolutionsSection.Title1}</p>
//             <h3>{apidata.apiData.OurSolutionsSection.Title2}</h3>
//             <ul>
//               {apidata.apiData.OurSolutionsSection.List.map(item => {
//                 return (
//                   <li>
//                     <div>
//                       <AiOutlineCheck />
//                     </div>
//                     <div>{item.Name} </div>
//                   </li>
//                 )
//               })}

//             </ul>
//           </div>
//         </div>

//       </div>

//       {/* ///////////////////////////////////// */}
//       {/* option */}
//       {/* ///////////////////////////////////// */}
//       {/* ///////////////////////////////////// */}
//       {/* Slide */}
//       {/* ///////////////////////////////////// */}
//       <h4 className={style.sliderHeading}>Explore our other services</h4>
//       <Slider {...settings} className={style.options}>
//         <div className={style.option}>
//           <div className={style.wrap}>
//             <div className={style.left}>
//               <div>
//                 <BsCart />
//               </div>
//               <div>Sales & Marketing</div>
//             </div>
//             <div className={style.right}>10%</div>
//           </div>
//         </div>
//         <div className={style.option}>
//           <div className={style.wrap}>
//             <div className={style.left}>
//               <div>
//                 <AiOutlineMobile />
//               </div>
//               <div>Business Analytics</div>
//             </div>
//             <div className={style.right}>10%</div>
//           </div>
//         </div>
//         <div className={style.option}>
//           <div className={style.wrap}>
//             <div className={style.left}>
//               <div>
//                 <AiOutlineMobile />
//               </div>
//               <div>Development</div>
//             </div>
//             <div className={style.right}>10%</div>
//           </div>
//         </div>
//         <div className={style.option}>
//           <div className={style.wrap}>
//             <div className={style.left}>
//               <div>
//                 <AiOutlineMobile />
//               </div>
//               <div>Business Analytics</div>
//             </div>
//             <div className={style.right}>10%</div>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default QASolution;
import React from 'react';
import AwwaltechCard from './AwwaltechCard';
 import image1 from '../../../assets/QA/image-5.webp';
  import image2 from '../../../assets/QA/image-6.webp';
 import image3 from '../../../assets/QA/image-7.webp';
import style from "./QASolution.module.scss";
const awwaltechData = [
  {
    title: 'Your fastest way to innovation',
    description: 'LeverX offers a range of services backed by years of extensive experience with successful project deliveries.',
    image: image1,
  },
  {
    title: 'Industry-specific expertise',
    description: 'Having vast expertise in serving 30+ industries, we are ready to cover your hottest issues with advanced technological solutions.',
    image: image2,
  },
  {
    title: '10+ years of experience',
    description: 'For over 10 years, LeverX has been providing Quality Assurance services to guarantee your project or product quality.',
    image: image3,
  },
];
export default function QASolution () {
  return(
    <div className={style.whyawwaltech}>
      <h1>WHY AWWALTECH</h1>
      <div className={style.cards}>
        {awwaltechData.map((data, index) => (
          <AwwaltechCard key={index} title={data.title} description={data.description} image={data.image} />
        ))}
      </div>
    </div>
  )
}










