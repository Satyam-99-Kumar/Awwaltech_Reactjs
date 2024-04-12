import React, { useState } from "react";
import style from "./HomeClients.module.scss";
import { AiOutlineCheck } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";
import Slider from "react-slick";
import ClientsLogo from "./ClientsLogo";
import img1 from "../../../assets/Home/Industries/unsplash_jjhvyxm34nY.png";

function HomeClients({ data }) {
  const [selected, setSelected] = useState(1);
  const [animationActive, setAnimationActive] = useState(false);

  const handleClick = (id) => {
    setAnimationActive(true);
    setSelected(id);
    setTimeout(() => {
      setAnimationActive(false);
    }, 1500);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={style.clients}>
      <div className={style.clients__text}>
        <p>{data?.result[0]?.ClientsSection?.Title1}</p>
        <h1>{data?.result[0]?.ClientsSection?.Title2}</h1>
        <span>{data?.result[0]?.ClientsSection?.Paragraph}</span>
      </div>

      <div className={style.options}>
        <div className={style.options__wrapper}>
          {data?.result[0]?.ClientsSection?.Clients.map((client, index) => (
            <div
              key={client._id}
              className={
                selected === index + 1
                  ? `${style.option} ${style.active}`
                  : `${style.option}`
              }
              onClick={() => handleClick(index + 1)}
            >
              <div>
                <BiSelectMultiple />
              </div>
              <div className={style.padding}>{client.ClientName}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={
          animationActive
            ? `${style.enterprize} ${style.activeAnim}`
            : `${style.enterprize}`
        }
      >
        <div className={style.image}>
          <Slider {...settings} className={style.slider}>
            {data?.result[0]?.ClientsSection?.Clients.map((client, index) => (
              <div className={style.slider__container} key={client._id}>
                {/* Replace this with your actual image URL */}
                {/* <img src={client.Image} alt="" /> */}
                <img src={img1} alt="" />
              </div>
            ))}
          </Slider>
        </div>
        {/* <img src={img1} alt="" /> */}
        <div className={style.content}>

          <h3>{data?.result[0]?.ClientsSection?.Clients[selected - 1].ClientName}</h3>
          <div className={style.contentWrapper}>

            <div className={style.contentLeft}>
              <h4>Make Difference with Codiant</h4>
              <ul>
                {data?.result[0]?.ClientsSection?.Clients[selected - 1].List1.map((list, index) => (
                  <li key={index}>
                    <div>
                      <AiOutlineCheck />
                    </div>
                    <div>{list.Name}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.contentRight}>
              <h4>Make Difference with Codiant</h4>
              <ul>
                {data?.result[0]?.ClientsSection?.Clients[selected - 1].List2.map((list, index) => (

                  <li key={index}>
                    <div>
                      <AiOutlineCheck />
                    </div>
                    <div>{list.Name}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ClientsLogo />
    </div>
  );
}

export default HomeClients;
