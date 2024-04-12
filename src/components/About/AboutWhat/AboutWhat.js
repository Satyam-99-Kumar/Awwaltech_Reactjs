import Slider from "react-slick";
import { AiOutlineCheck, AiOutlineMobile } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import style from "./AboutWhat.module.scss";
import img1 from "../../../assets/About/discussion.png";

function AboutWhat({ data }) {

  const settings = {
    dots: false,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className={style.what}>
      {/* short desc */}
      <div className={style.what__identity}>
        <div className={style.head}>
          <p>{data?.WhatIsMinttaskSection?.Title1}</p>
          <h2>
            <div>{data?.WhatIsMinttaskSection?.Title2}</div>
          </h2>
        </div>
        <div className={style.text}>
          <p>{data?.WhatIsMinttaskSection?.Paragraph1}</p>
          <p>{data?.WhatIsMinttaskSection?.Paragraph2}</p>
        </div>
      </div>

      {/* large enterprise */}
      <div className={style.what__enterprize}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <img src={img1} alt="" />
          </div>
          <div className={style.text}>
            <p className={style.secondaryHead}>{data?.EnterprisesSection?.Title}</p>
            <h2 className={style.max_size}>
              {data?.EnterprisesSection?.MainTitle}
            </h2>

            {/* mission & vission */}
            <div className={style.missionVission}>
              <div className={style.mission}>
                <h4>{data?.EnterprisesSection?.Vision}</h4>
                <div className={style.textt}>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>
                    <div>{data?.EnterprisesSection?.VisionParagraph}</div>
                  </div>
                </div>
              </div>
              <div className={style.vission}>
                <h4>{data?.EnterprisesSection?.Mission}</h4>
                <div className={style.textt}>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>
                    {data?.EnterprisesSection?.MissionParagraph}
                  </div>
                </div>
              </div>
            </div>

            {/* Final text */}
            <div className={style.finalTxt}>

              <p>
                {data?.EnterprisesSection?.Paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide */}
      <Slider {...settings} className={style.options}>
        <div className={style.option}>
          <div className={style.wrap}>
            <div className={style.left}>
              <div>
                <BsCart />
              </div>
              <div>Sales & Marketing</div>
            </div>
            <div className={style.right}>10%</div>
          </div>
        </div>
        <div className={style.option}>
          <div className={style.wrap}>
            <div className={style.left}>
              <div>
                <AiOutlineMobile />
              </div>
              <div>Business Analytics</div>
            </div>
            <div className={style.right}>10%</div>
          </div>
        </div>
        <div className={style.option}>
          <div className={style.wrap}>
            <div className={style.left}>
              <div>
                <AiOutlineMobile />
              </div>
              <div>Development</div>
            </div>
            <div className={style.right}>10%</div>
          </div>
        </div>
        <div className={style.option}>
          <div className={style.wrap}>
            <div className={style.left}>
              <div>
                <AiOutlineMobile />
              </div>
              <div>Business Analytics</div>
            </div>
            <div className={style.right}>10%</div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default AboutWhat;
