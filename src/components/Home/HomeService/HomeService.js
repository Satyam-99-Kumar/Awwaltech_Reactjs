import Slider from "react-slick";
import { Link } from "react-router-dom";
// Assets
import style from "./HomeService.module.scss";
import img1 from "../../../assets/Home/Services/Monitor.png";
import img2 from "../../../assets/Home/Services/Settings_Future.png";
import img3 from "../../../assets/Home/Services/Window_Code_Block.png";
import img4 from "../../../assets/Home/Services/Shopping_Cart_02.png";
import img5 from "../../../assets/Home/Services/Monitor.png";
import { BsChevronRight, BsArrowRight } from "react-icons/bs";

function HomeService() {
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
          <div>
            <span>Exclusive</span> Mobile App & Web
          </div>
          <div>Development Company</div>
        </h1>
        <p>
          Our complete spectrum of mobile app development and web solutions help
          startups, small-medium enterprises, and organizations to create
          outcome-focused solutions with enhanced agility that help them to
          rapidly reshape, renew and build new capabilities for their business.
        </p>
      </div>

      <div className={style.services__all}>
        <Slider {...settings} className={style.slider}>
          {/* Slider 1 */}
          <div className={style.service}>
            <div className={style.service__content}>
              <img src={img5} alt="" />
              <h3><div>Mobile App</div><div>Development</div></h3>
              <p>
                Our complete spectrum of mobile app development and web
                solutions help startups, small-medium enterprises, and
                organizations to create outcome
              </p>
              <Link to="/">Explore  <span>More</span> <span><BsArrowRight /></span></Link>
            </div>
          </div>
          {/* Slider 2 */}
          <div className={style.service}>
            <div className={style.service__content}>
              <img src={img1} alt="" />
              <h3><div>Web</div><div>Development</div></h3>
              <p>
                Our complete spectrum of mobile app development and web
                solutions help startups, small-medium enterprises, and
                organizations to create outcome
              </p>
              <Link to="/">Explore  <span>More</span> <span><BsArrowRight /></span></Link>
            </div>
          </div>
          {/* Slider 3 */}
          <div className={style.service}>
            <div className={style.service__content}>
              <img src={img2} alt="" />
              <h3><div>Enterprise</div><div>Devops</div></h3>
              <p>
                Our complete spectrum of mobile app development and web
                solutions help startups, small-medium enterprises, and
                organizations to create outcome
              </p>
              <Link to="/">Explore  <span>More</span> <span><BsArrowRight /></span></Link>
            </div>
          </div>
          {/* Slider 4 */}
          <div className={style.service}>
            <div className={style.service__content}>
              <img src={img3} alt="" />
              <h3><div>Strategic UX</div><div>Development</div></h3>
              <p>
                Our complete spectrum of mobile app development and web
                solutions help startups, small-medium enterprises, and
                organizations to create outcome
              </p>
              <Link to="/">Explore  <span>More</span> <span><BsArrowRight /></span></Link>
            </div>
          </div>
          {/* Slider 5 */}
          <div className={style.service}>
            <div className={style.service__content}>
              <img src={img4} alt="" />
              <h3><div>eCommerce</div><div>Development</div></h3>
              <p>
                Our complete spectrum of mobile app development and web
                solutions help startups, small-medium enterprises, and
                organizations to create outcome
              </p>
              <Link to="/">Explore  <span>More</span> <span><BsArrowRight /></span></Link>
            </div>
          </div>
          {/* Slider 6 */}
          <div className={style.service}>
            <div className={style.service__content}>
              <img src={img5} alt="" />
              <h3><div>Mobile App</div><div>Development</div></h3>
              <p>
                Our complete spectrum of mobile app development and web
                solutions help startups, small-medium enterprises, and
                organizations to create outcome
              </p>
              <Link to="/">Explore  <span>More</span> <span><BsArrowRight /></span></Link>
            </div>
          </div>
        </Slider>

        <div className={style.globalLink}>
        <Link to="/">Explore  all our services<span><BsChevronRight /></span></Link>
        </div>
      </div>
    </div>
  );
}

export default HomeService;
