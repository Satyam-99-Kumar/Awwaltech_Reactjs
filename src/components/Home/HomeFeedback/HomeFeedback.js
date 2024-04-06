import { useRef } from "react";
import Slider from "react-slick/lib/slider";
import FeedBack from "./FeedBack";
import style from "./HomeFeedback.module.scss";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "./slickStyle.scss";

function HomeFeedback({background, apiData}) {
  const slider = useRef(null);

  const settings = {
    dots: false,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className={style.feedback} style={{background: background}}>
      <div className={style.feedback__text}>
        <p>{apiData?.result[0]?.ClientFeedbackSection?.Title1}</p>
        <h1>{apiData?.result[0]?.ClientFeedbackSection?.Title2}</h1>
        <p>{apiData?.result[0]?.ClientFeedbackSection?.Paragraph}</p>
      </div>

      <div className={style.slider}>
        <Slider className={style.allFeedBacks} {...settings} ref={slider}>
        {apiData?.result[0]?.ClientFeedbackSection?.ClientFeedback?.map((item, index) => (
          <FeedBack id={index} item={item} background={background} />
          // <FeedBack id={2} background={background} />
          // <FeedBack id={3} background={background} />
          // <FeedBack id={4} background={background} />
          // <FeedBack id={5} background={background} />
        ))}
        </Slider>

        <div
          className={style.sliderArrow1}
          onClick={() => slider?.current?.slickPrev()}
        >
          <BsChevronLeft />
        </div>
        <div
          className={style.sliderArrow2}
          onClick={() => slider?.current?.slickNext()}
        >
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
}

// export default HomeFeedback;
// import React, { useState, useEffect } from "react";
// import style from "./HomeFeedback.module.scss";
// import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
// import { fetchHomeData } from "../../../config/apiService"; // Import the fetchFeedbackData function

// function HomeFeedback({ background }) {
//   const [feedbackData, setFeedbackData] = useState(null);
//   const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchHomeData();
//         setFeedbackData(data);
//       } catch (error) {
//         console.error("Error fetching feedback data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handlePrevFeedback = () => {
//     setCurrentFeedbackIndex((prevIndex) => (prevIndex === 0 ? feedbackData.result[0].ClientFeedbackSection.ClientFeedback.length - 1 : prevIndex - 1));
//   };

//   const handleNextFeedback = () => {
//     setCurrentFeedbackIndex((prevIndex) => (prevIndex === feedbackData.result[0].ClientFeedbackSection.ClientFeedback.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className={style.feedback} style={{ background: background }}>
//       <div className={style.feedback__text}>
//         <p>{feedbackData?.result[0]?.ClientFeedbackSection?.Title1}</p>
//         <h1>{feedbackData?.result[0]?.ClientFeedbackSection?.Title2}</h1>
//         <p>{feedbackData?.result[0]?.ClientFeedbackSection?.Paragraph}</p>
//       </div>

//       <div className={style.allFeedBacks}>
//         {feedbackData?.result[0]?.ClientFeedbackSection?.ClientFeedback?.map((item, index) => (
//           <div key={index} className={index === currentFeedbackIndex ? style.activeFeedback : style.hiddenFeedback}>
//             <div className={style.feedbackContent}>
//               <img src={item.Image} alt={item.Feedback} className={style.feedbackImage} />
//               <div className={style.feedbackText}>
//                 <h3>{item.Feedback}</h3>
//                 <p>{item.Paragraph}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//         <div className={style.sliderArrow1} onClick={handlePrevFeedback}>
//           <BsChevronLeft />
//         </div>
//         <div className={style.sliderArrow2} onClick={handleNextFeedback}>
//           <BsChevronRight />
//         </div>
//       </div>
//     </div>
//   );
// }

export default HomeFeedback;
