import style from "./BlogSingleSlide.module.scss";
import { Data } from "./Data";
import { Link } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Slider from "react-slick/lib/slider";
import { useRef } from "react";
import { Grid } from "@mui/material";

const settings = {
  dots: false,
  autoplay: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

function BlogSingleSlide() {
  const slider = useRef(null);

  return (
    <div className={style.sliderWrapper}>
      <h3>View more Blogs</h3>
     <Grid container spacing={2}>
      <Grid item sm={4}lg={12}xs={12} md={4}>
      <Slider {...settings} className={style.slider} ref={slider}>
        {Data.map((data) => (
          <div className={style.slider__container}>
            <div className={style.post}>
              <div className={style.image}>
                <img src={data.banner} alt="" />
              </div>
              <div className={style.text}>
                <h4>{data.name}</h4>
                <p>{data.text}</p>
                <Link to="/blog/1">
                  View more
                  <span>
                    <CgArrowRight />
                  </span>
                </Link>
              </div>
            </div>
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
      </Grid>
     </Grid>
    </div>
  );
}

export default BlogSingleSlide;
