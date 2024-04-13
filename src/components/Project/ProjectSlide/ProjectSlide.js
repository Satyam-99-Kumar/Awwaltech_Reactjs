import style from "./ProjectSlide.module.scss";
import { Data } from "./Data";
import { Link } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Slider from "react-slick/lib/slider";
import { useRef } from "react";
import Card from '@mui/material/Card';

const settings = {
  dots: false,
  autoplay: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

function ProjectSlide() {
  const slider = useRef(null);

  return (
    <div className={style.sliderWrapper}>
      <h3>Recent Projects</h3>
      <Slider {...settings} className={style.slider} ref={slider}>
        {Data.map((data) => (
          <div className={style.slider__container}>
            <Card>
              <div className={style.post}>
                <div className={style.image}>
                  <img src={data.banner} alt="" />
                </div>
                <div className={style.text}>
                  <h4>{data.name}</h4>
                  <p>{data.text}</p>
                  <Link to="/portfolio/project/10">
                    View more
                    <span>
                      <CgArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
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

      <div className={style.globalLink}>
        <Link to="/">
          View all projects
          <span>
            <BsChevronRight />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ProjectSlide;
