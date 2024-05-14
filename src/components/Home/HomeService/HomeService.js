import Slider from "react-slick";
import { Link } from "react-router-dom";
// Assets
import style from "./HomeService.module.scss";
import { BsChevronRight, BsArrowRight } from "react-icons/bs";
import { useState, useEffect } from 'react';

function HomeService({ data }) {
  console.log("....homeservicedta===>",data)
  const [imagePaths, setImagePaths] = useState([]);
  useEffect(() => {
    // Define image paths
    const imgPaths = [
      require("../../../assets/Home/Services/Monitor.png"),
      require("../../../assets/Home/Services/Settings_Future.png"),
      require("../../../assets/Home/Services/Window_Code_Block.png"),
      require("../../../assets/Home/Services/Shopping_Cart_02.png"),
      require("../../../assets/Home/Services/Monitor.png"),
      require("../../../assets/Home/Services/Shopping_Cart_02.png"),
      require("../../../assets/Home/Services/Shopping_Cart_02.png"),
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
        {/* <h1 className={style.servicetexth1}>
          <div className={style.servicediv}>{data.ServicesSection?.Title}</div>
        </h1> */}
        <h1>
          <div>
            <span>{data.ServicesSection?.Title1}</span> {data.ServicesSection?.Title2}
          </div>
          <div>{data.ServicesSection?.Title3}</div>
        </h1>
        <p>{data.ServicesSection?.Paragraph} </p>
      </div>

      <div className={style.services__all}>
        <Slider {...settings} className={style.slider}>
          {data.ServicesSection?.Services.map((service, index) => (
            <div className={style.service} key={service._id}>
              <div className={style.service__content}>
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
