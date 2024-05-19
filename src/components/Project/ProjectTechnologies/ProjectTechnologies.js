import Slider from "react-slick/lib/slider";
import style from "./ProjectTechnologies.module.scss";
import img1 from "../../../assets/Technologies/java.png";
import img2 from "../../../assets/Technologies/node.png";
import img3 from "../../../assets/Technologies/php.png";
import img4 from "../../../assets/Technologies/net.png";

const settings = {
  dots: false,
  autoplay: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
};

function ProjectTechnologies() {
  return (
    <div className={style.tech}>
      <div className={style.tech__text}>
        <p>Technologies</p>
        <h1>Technologies We Used</h1>
        <p>
          From ideation and conceptualization to application development,
          ready-to-deploy assets, marketing and support, Codiant delights
          clients of all sizes through agile deliveries and simplified
          solutions.
        </p>
      </div>

      <div className={style.tech__slider}>
        <Slider {...settings} className={style.options}>
          <div className={style.slide}>
            <div className={style.wrap}>
              <div className={style.image}>
                <img src={img2} alt="" />
              </div>
              <p>Node</p>
            </div>
          </div>
          <div className={style.slide}>
            <div className={style.wrap}>
              <div className={style.image}>
                <img src={img3} alt="" />
              </div>
              <p>PHP</p>
            </div>
          </div>
          <div className={style.slide}>
            <div className={style.wrap}>
              <div className={style.image}>
                <img src={img1} alt="" />
              </div>
              <p>Java</p>
            </div>
          </div>
          <div className={style.slide}>
            <div className={style.wrap}>
              <div className={style.image}>
                <img src={img2} alt="" />
              </div>
              <p>Node</p>
            </div>
          </div>
          <div className={style.slide}>
            <div className={style.wrap}>
              <div className={style.image}>
                <img src={img3} alt="" />
              </div>
              <p>PHP</p>
            </div>
          </div>
          <div className={style.slide}>
            <div className={style.wrap}>
              <div className={style.image}>
                <img src={img4} alt="" />
              </div>
              <p>NET</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ProjectTechnologies;
