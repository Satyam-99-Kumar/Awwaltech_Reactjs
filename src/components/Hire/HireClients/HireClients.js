import { useState } from "react";
// Assets
import style from "./HireClients.module.scss";
import { AiOutlineCheck, AiOutlineHeart } from "react-icons/ai";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { Data } from "./Data";
import Slider from "react-slick/lib/slider";

function HireClients() {
  const [selected, setSelected] = useState(1);

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
        <p>Driving Enterprise</p>
        <h1>Clients We Care</h1>
        <p>
          From ideation and conceptualization to application development,
          ready-to-deploy assets, marketing and support, Codiant delights
          clients of all sizes through agile deliveries and simplified
          solutions.
        </p>
      </div>

      {/* /////////////////////////////////////// */}
      {/* Options */}
      {/* /////////////////////////////////////// */}
      <div className={style.options}>
        <div
          className={
            selected === 1
              ? `${style.option} ${style.active}`
              : `${style.option}`
          }
          onClick={() => setSelected(1)}
        >
          <div>
            <AiOutlineHeart />
          </div>
          <div>Large Enterprises</div>
        </div>
        <div
          className={
            selected === 2
              ? `${style.option} ${style.active}`
              : `${style.option}`
          }
          onClick={() => setSelected(2)}
        >
          <div>
            <RiCheckboxMultipleLine />
          </div>
          <div>Small to Medium Enterprise (SME)</div>
        </div>
        <div
          className={
            selected === 3
              ? `${style.option} ${style.active}`
              : `${style.option}`
          }
          onClick={() => setSelected(3)}
        >
          <div>
            <RiCheckboxMultipleLine />
          </div>
          <div>Small to Medium Enterprise (SME)</div>
        </div>
        <div
          className={
            selected === 4
              ? `${style.option} ${style.active}`
              : `${style.option}`
          }
          onClick={() => setSelected(4)}
        >
          <div>
            <RiCheckboxMultipleLine />
          </div>
          <div>Startups</div>
        </div>
      </div>

      {/* /////////////////////////////////////// */}
      {/* Enterprizes */}
      {/* /////////////////////////////////////// */}
      <div className={style.enterprize}>
        <div className={style.image}>
          {/* <img src={Data[selected - 1].image} alt="" /> */}
          <Slider {...settings} className={style.slider}>
            {Data[selected - 1].imageSlide.map((image) => (
              <div className={style.slider__container}>
                <img src={image} alt="" />
              </div>
            ))}
          </Slider>
        </div>
        <div className={style.content}>
          <h3>{Data[selected - 1].head}</h3>
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
                <li>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>
                    Intellectual property-based mobile technology solutions
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>Industry-focused mobility solutions</div>
                </li>
                <li>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>
                    Custom apps connected to SAP, Salesforce, CRM and other
                    ERP’s
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>Mobile test service</div>
                </li>
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
                <li>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>
                    Intellectual property-based mobile technology solutions
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>Industry-focused mobility solutions</div>
                </li>
                <li>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>Enterprise platforms</div>
                </li>
                <li>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>
                    Custom apps connected to SAP, Salesforce, CRM and other
                    ERP’s
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>Mobile test service</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireClients;
