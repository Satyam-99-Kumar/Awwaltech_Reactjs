import React, { useState, useEffect } from "react";
import style from "./HomeClients.module.scss";
import { AiOutlineCheck, AiOutlineHeart } from "react-icons/ai";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import Slider from "react-slick";
import ClientsLogo from "./ClientsLogo";

function HomeClients({ data }) {
  const [apiData, setApiData] = useState(null);
  const [selected, setSelected] = useState(1);
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    if (data && data.result && data.result.length > 0) {
      setApiData(data.result[0]);
    }
  }, [data]);

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
      {apiData && (
        <div className={style.clients__text}>
          <p>{apiData.ClientsSection.Title1}</p>
          <h1>{apiData.ClientsSection.Title2}</h1>
          <p>{apiData.ClientsSection.Paragraph}</p>
        </div>
      )}

      <div className={style.options}>
        <div className={style.options__wrapper}>
          {apiData &&
            apiData.ClientsSection.Clients.map((client, index) => (
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
                  <AiOutlineHeart />
                </div>
                <div>{client.ClientName}</div>
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
          {apiData && (
            <Slider {...settings} className={style.slider}>
              {apiData.ClientsSection.Clients.map((client, index) => (
                <div className={style.slider__container} key={client._id}>
                  {/* Replace this with your actual image URL */}
                  <img src={client.Image} alt="" />
                </div>
              ))}
            </Slider>
          )}
        </div>
        {apiData && (
          <div className={style.content}>
            <h3>{apiData.ClientsSection.Clients[selected - 1].ClientName}</h3>
            <div className={style.contentWrapper}>
              <div className={style.contentLeft}>
                <h4>Make Difference with Codiant</h4>
                <ul>
                  <li>
                    <div>
                      <AiOutlineCheck />
                    </div>
                    <div>Strategic Consulting</div>
                  </li>
                  {/* Add more list items as needed */}
                </ul>
              </div>
              <div className={style.contentRight}>
                <h4>Make Difference with Codiant</h4>
                <ul>
                  <li>
                    <div>
                      <AiOutlineCheck />
                    </div>
                    <div>Strategic Consulting</div>
                  </li>
                  {/* Add more list items as needed */}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <ClientsLogo />
    </div>
  );
}

export default HomeClients;
