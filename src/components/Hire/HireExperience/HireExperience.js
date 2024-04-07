import { Link } from "react-router-dom";
import img1 from "../../../assets/Hire/experience.png";
import style from "./HireExperience.module.scss";
import { AiOutlineRight, AiOutlineMobile } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import Slider from "react-slick/lib/slider";

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

function HireExperience({apiData}) {
  return (
    <div className={style.hireExpWrapper}>
      <div className={style.hireexperience}>
        <div className={style.hireexperience__image}>
          <img src={img1} alt="" />
        </div>
        <p>{apiData?.GetReadySection?.TitleTag}</p>
        <h1>{apiData?.GetReadySection?.Title}</h1>
        <p className={style.secondText}>{apiData?.GetReadySection?.Paragraph}</p>

        <div className={style.infos}>
          <div className={style.info}>
            <h2>{apiData.GetReadySection.ManYearExp}</h2>
            <p>MAN-YEAR-EXPERIENCE</p>
          </div>
          <div className={style.info}>
            <h2>{apiData.GetReadySection.YearsExp}</h2>
            <p>YEARS EXPERIENCE</p>
          </div>
          <div className={style.info}>
            <h2>{apiData.GetReadySection.SatisfiedCustomers}</h2>
            <p>SATISFIED CUSTOMERS</p>
          </div>
          <div className={style.info}>
            <h2>{apiData.GetReadySection.ClientRetention}</h2>
            <p>CLIENT RETENTION</p>
          </div>
        </div>

        <Link to="/hire">
          Contact us now{" "}
          <span>
            <AiOutlineRight />
          </span>
        </Link>
      </div>

      {/* Slider */}
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

export default HireExperience;
