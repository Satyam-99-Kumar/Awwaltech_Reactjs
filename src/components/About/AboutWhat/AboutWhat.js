import Slider from "react-slick/lib/slider";
import style from "./AboutWhat.module.scss";
import { AiOutlineCheck, AiOutlineMobile } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
// Images
import img1 from "../../../assets/About/discussion.png";

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

function AboutWhat() {
  return (
    <div className={style.what}>
      {/* ///////////////////////////////////// */}
      {/* short desc */}
      {/* ///////////////////////////////////// */}
      <div className={style.what__identity}>
        <div className={style.head}>
          <p>What is Minttask</p>
          <h2>
            <div>With Minttask, you can create</div>
            <div>live online events that are</div>
            <div>interactive and personal</div>
            
            <div className={style.mobileV}>
              With Minttask, you can create live online events that are
              interactive and personal
            </div>
          </h2>
        </div>
        <div className={style.text}>
          <p>
            When we started designing Minttask a few years ago, our aim was to
            give organizers the ability to recreate the in-person event
            experience as closely as possible, but online and all in one place.
          </p>
          <p>
            Nothing like this existed and we knew it would be a tall order. But
            over time, we have come up with a few innovative features that help
            you accomplish this.
          </p>
        </div>
      </div>

      {/* ///////////////////////////////////// */}
      {/* large enterprise */}
      {/* ///////////////////////////////////// */}
      <div className={style.what__enterprize}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <img src={img1} alt="" />
          </div>
          <div className={style.text}>
            <p className={style.secondaryHead}>Large Enterprises</p>
            <h2>
              <div>One stop comprehensive</div>
              <div>solutions for your web, mobile &</div>
              <div>customsoftware</div>
            </h2>

            {/* mission & vission */}
            <div className={style.missionVission}>
              <div className={style.mission}>
                <h4>Our Vision</h4>
                <div className={style.textt}>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>
                    To be a first choice for extending your E-commerce team
                    offshore.
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
                    To provide customized E-commerce services from a dedicated
                    offshore team while maintaining/superseding the requested
                    Quality and Communication.
                  </div>
                </div>
              </div>
            </div>

            {/* final text */}
            <div className={style.finalTxt}>
              <p>
                When we started designing Minttask a few years ago, our aim was
                to give organizers the ability to recreate the in-person event
                experience as closely as possible, but online and all in one
                place.
              </p>
              <p>
                Nothing like this existed and we knew it would be a tall order.
                But over time, we have come up with a few innovative features
                that help you accomplish this.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ///////////////////////////////////// */}
      {/* Slide */}
      {/* ///////////////////////////////////// */}
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
