import Slider from "react-slick";
import { Link } from "react-router-dom";
// Assets
import style from "./HomeService.module.scss";
import { BsChevronRight, BsArrowRight } from "react-icons/bs";
import { useState, useEffect } from 'react';

function HomeService({ data }) {
  const [imagePaths, setImagePaths] = useState([]);
  useEffect(() => {
    // Define image paths
    const imgPaths = [
      require("../../../assets/Home/Services/Monitor.png"),
      require("../../../assets/Home/Services/Settings_Future.png"),
      require("../../../assets/Home/Services/Window_Code_Block.png"),
      require("../../../assets/Home/Services/Shopping_Cart_02.png"),
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
          initialSlide: 1
        }
      },
    ]
  };

  return (
    <div className={style.services}>
      <div className={style.services__text}>
        <h1>
          <div>{data?.result[0]?.ServicesSection?.Title}</div>
        </h1>
        <p>{data?.result[0]?.ServicesSection?.Paragraph} </p>
      </div>

      <div className={style.services__all}>
        <Slider {...settings} className={style.slider}>
          {data?.result[0]?.ServicesSection?.Services.map((service, index) => (
            <div className={style.service} key={service._id}>
              <div className={style.service__content}>
                {/* Assuming you have imagePaths array corresponding to each service */}
                <img src={imagePaths[index]} alt="" />
                <h3>
                  <div>{service.Title1}</div>
                  <div>{service.Title2}</div>
                </h3>
                <p>{service.Paragraph}</p>
                <Link to={service.Link}>Explore  <span>More</span> <span><BsArrowRight /></span></Link>
              </div>
            </div>
          ))}
        </Slider>

        <div className={style.globalLink}>
          <Link to="/">Explore  all our services<span><BsChevronRight /></span></Link>
        </div>
      </div>
    </div>
  );
}

export default HomeService;
