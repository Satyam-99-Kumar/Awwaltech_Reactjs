import Slider from "react-slick";
import { AiOutlineCheck, AiOutlineMobile } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { useEffect, useState } from "react";
import style from "./AboutWhat.module.scss";
import img1 from "../../../assets/About/discussion.png";

function AboutWhat() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/v1/about/content");
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
          <p>{apiData?.result?.[0]?.WhatIsMinttaskSection?.Title1}</p>
          <h2>
            <div>{apiData?.result?.[0]?.WhatIsMinttaskSection?.Title2}</div>
          </h2>
        </div>
        <div className={style.text}>
          <p>{apiData?.result?.[0]?.WhatIsMinttaskSection?.Paragraph}</p>
        </div>
        <div className={style.text}>
          <p>{apiData?.result?.[0]?.WhatIsMinttaskSection?.Paragraph1}</p>
        </div>
      </div>

      {/* large enterprise */}
      <div className={style.what__enterprize}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <img src={img1} alt="" />
          </div>
          <div className={style.text}>
            {/* Mission & Vision */}
            <div className={style.missionVission}>
              <div className={style.mission}>
                <h4>Our Vision</h4>
                <div className={style.textt}>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>
                    {apiData?.result?.[0]?.WhatIsMinttaskSection?.Mission}
                  </div>
                </div>
              </div>
              <div className={style.vission}>
                <h4>Our Mission</h4>
                <div className={style.textt}>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>
                    {apiData?.result?.[0]?.WhatIsMinttaskSection?.Vision}
                  </div>
                </div>
              </div>
            </div>

            {/* Final text */}
            <div className={style.finalTxt}>
              <p>
                {apiData?.result?.[0]?.WhatIsMinttaskSection?.FinalText1}
              </p>
              <p>
                {apiData?.result?.[0]?.WhatIsMinttaskSection?.FinalText2}
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
