import Slider from "react-slick/lib/slider";
import style from "./GlobalWorks.module.scss";
import Work from "./Work";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useRef } from "react";

function GlobalWorks({background}) {
  const slider = useRef(null);

  const settings = {
    dots: false,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={style.works} style={{background: background}}>
      <div className={style.works__text}>
        <h1>
          Explore Our <span>Recent Work</span>
        </h1>
        <p>
          Our complete spectrum of mobile app development and web solutions help
          startups, small-medium enterprises, and organizations to create
          outcome-focused solutions with enhanced agility that help them to
          rapidly reshape, renew and build new capabilities for their business.
        </p>
      </div>

      <div className={style.slider}>
        <Slider className={style.allworks} {...settings} ref={slider}>
          <Work id={1} />
          <Work id={2} />
          <Work id={3} />
          <Work id={4} />
          <Work id={5} />
        </Slider>

        <div className={style.sliderArrow1} onClick={() => slider?.current?.slickPrev()}>
          <BsChevronLeft />
        </div>
        <div className={style.sliderArrow2} onClick={() => slider?.current?.slickNext()}>
          <BsChevronRight />
        </div>
      </div>

      <Link className={style.global} to="/">
        Veiw all projects{" "}
        <span>
          <BsChevronRight />
        </span>
      </Link>
    </div>
  );
}

export default GlobalWorks;
