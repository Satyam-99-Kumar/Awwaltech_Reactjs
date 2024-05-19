import Slider from "react-slick";
import { Link } from "react-router-dom";
// Assets
import style from "./HireService.module.scss";
import { BsChevronRight, BsArrowRight } from "react-icons/bs";
import { useState, useEffect } from 'react';

function HireService({ data }) {
  const [imagePaths, setImagePaths] = useState([]);
  useEffect(() => {
    // Define image paths
    const imgPaths = [
      require("../../../assets/Home/Services/Monitor.png"),
      require("../../../assets/Home/Services/Settings_Future.png"),
      require("../../../assets/Home/Services/Window_Code_Block.png"),
      require("../../../assets/Home/Services/Shopping_Cart_02.png"),
      require("../../../assets/Home/Services/Settings_Future.png"),
      require("../../../assets/Home/Services/Monitor.png")
    ];
    setImagePaths(imgPaths);
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: 5,
    speed: 500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className={style.services}>
      <div className={style.services__text}>
        <h1>
          {data.ServicesSection.Title1} <span>{data.ServicesSection.Title2}</span> {data.ServicesSection.Title3}
        </h1>
        <p>{data.ServicesSection.Paragraph}</p>
      </div>

      <div className={style.services__all}>
        <Slider {...settings} className={style.slider}>
          {data.ServicesSection.Services.map((item, index) => {
            return (
              <div className={style.service}>
                <div className={style.service__content}>
                  <img src={imagePaths[index]} alt="" />
                  <h3>
                    <div>{item.Title1}</div>
                    <div>{item.Title2}</div>
                  </h3>
                  <p>{item.Paragraph}</p>
                  <Link to="/">
                    Explore <span>More</span>{" "}
                    <span>
                      <BsArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            )
          })}
        </Slider>

        <div className={style.globalLink}>
          <Link to="/">
            Hire IOT Developers
            <span>
              <BsChevronRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HireService;
