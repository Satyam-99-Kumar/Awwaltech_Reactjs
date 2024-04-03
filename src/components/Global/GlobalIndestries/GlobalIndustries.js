import { useRef, useState } from "react";
// Components
import Detail from "./Detail";
// Assets
import style from "./GlobalIndustries.module.scss";
import { BsChevronDown } from "react-icons/bs";
import Slider from "react-slick/lib/slider";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
};

const settings2 = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
};

function GlobalIndustries({ data }) {
  const [option, setOption] = useState(1);
  const [animationActive, setAnimationActive] = useState(false);
  const slider = useRef(null);

  const handleClick = (id) => {
    setAnimationActive(true);
    setOption(id);

    setTimeout(() => {
      setAnimationActive(false);
    }, 2000);
  };

  return (
    <div className={style.industries}>
      <div className={style.industries__text}>
        <p>Driving Enterprise</p>
        <h1>Industries We Serve</h1>
        <p>
          Empowering businesses across verticals by leveraging the power of
          mobility that help accelerate innovation, reduce costs and improve
          performance.
        </p>
      </div>

      {/* //////////////////////////////////// */}
      {/* ///////////// Options ///////////// */}
      {/* //////////////////////////////////// */}
      <div className={style.optionSliderForMobile}>
        <Slider {...settings2}>
          {data.map((data) => (
            <div
              className={
                option === data.id
                  ? `${style.option} ${style.active}`
                  : `${style.option}`
              }
              onClick={() => handleClick(data.id)}
            >
              <div className={style.optionWrapper}>
                <div className={style.logo}>{data.optionLogo}</div>
                <div className={style.text}>
                  <div>{data.optionName[0]}</div>
                  <div>{data.optionName[1]}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className={style.content}>
        {/* //////////////////////////////////// */}
        {/* ///////////// Options ///////////// */}
        {/* //////////////////////////////////// */}
        <div className={style.optionWrapper2}>
          <Slider {...settings} className={style.content__options} ref={slider}>
            {data.map((data) => (
              <div
                className={
                  option === data.id
                    ? `${style.option} ${style.active}`
                    : `${style.option}`
                }
                onClick={() => handleClick(data.id)}
              >
                <div className={style.optionWrapper}>
                  <div className={style.logo}>{data.optionLogo}</div>
                  <div className={style.text}>
                    <div>{data.optionName[0]}</div>
                    <div>{data.optionName[1]}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div
          className={style.arrowButton}
          onClick={() => slider?.current?.slickNext()}
        >
          <BsChevronDown />
        </div>

        {/* //////////////////////////////////// */}
        {/* ////////////// Detail ////////////// */}
        {/* //////////////////////////////////// */}
        <div className={style.content__detail}>
          <div
            className={
              animationActive
                ? `${style.wrapper} ${style.activeAnim}`
                : `${style.wrapper}`
            }
          >
            <Detail option={option} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalIndustries;
