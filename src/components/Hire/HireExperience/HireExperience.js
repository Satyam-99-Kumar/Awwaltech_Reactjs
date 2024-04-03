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

function HireExperience() {
  return (
    <div className={style.hireExpWrapper}>
      <div className={style.hireexperience}>
        <div className={style.hireexperience__image}>
          <img src={img1} alt="" />
        </div>
        <p>Experienced software company</p>
        <h1>Ready To Get Started?</h1>
        <p className={style.secondText}>
          Be it any innovation using IoT technology or need for advanced Hire
          IOT Developers, we, being a 17+ years experienced software company,
          always ready to serve our best-in-class services to our clients that
          help them grow across the world.
        </p>

        <div className={style.infos}>
          <div className={style.info}>
            <h2>200 +</h2>
            <p>MAN-YEAR-EXPERIENCE</p>
          </div>
          <div className={style.info}>
            <h2>6 +</h2>
            <p>YEARS EXPERIENCE</p>
          </div>
          <div className={style.info}>
            <h2>25 +</h2>
            <p>SATISFIED CUSTOMERS</p>
          </div>
          <div className={style.info}>
            <h2>97%</h2>
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
