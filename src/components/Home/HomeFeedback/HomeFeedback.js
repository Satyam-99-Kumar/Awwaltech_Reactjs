import { useRef } from "react";
import Slider from "react-slick/lib/slider";
import FeedBack from "./FeedBack";
import style from "./HomeFeedback.module.scss";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "./slickStyle.scss";
import { useState, useEffect } from "react";
import { fetchClientFeedbackData } from '../../../config/apiService';

function HomeFeedback({background}) {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchClientFeedbackData();
        setApiData(result?.result[0]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchDataFromAPI();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <div className={style.feedback} style={{background: background}}>
      <div className={style.feedback__text}>
        <p>{apiData?.ClientFeedbackSection?.Title1}</p>
        <h1>{apiData?.ClientFeedbackSection?.Title2}</h1>
        <p>{apiData?.ClientFeedbackSection?.Paragraph}</p>
      </div>

      <div className={style.slider}>
        <Slider className={style.allFeedBacks} {...settings} ref={slider}>
        {apiData?.ClientFeedbackSection?.CilentFeedback?.map((item, index) => (
          <FeedBack item={item} background={background} />
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

export default HomeFeedback;
