import { useRef } from "react";
import Slider from "react-slick/lib/slider";
import FeedBack from "./FeedBack";
import style from "./HomeFeedback.module.scss";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "./slickStyle.scss";

function HomeFeedback({background}) {
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
        <p>Why Choose us</p>
        <h1>Client Feedbacks</h1>
        <p>
          From ideation and conceptualization to application development,
          ready-to-deploy assets, marketing and support, Codiant delights
          clients of all sizes through agile deliveries and simplified
          solutions.
        </p>
      </div>

      <div className={style.slider}>
        <Slider className={style.allFeedBacks} {...settings} ref={slider}>
          <FeedBack id={1} background={background} />
          <FeedBack id={2} background={background} />
          <FeedBack id={3} background={background} />
          <FeedBack id={4} background={background} />
          <FeedBack id={5} background={background} />
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
