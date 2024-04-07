import style from "./HomeBanner.module.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { RiFilePaper2Line } from "react-icons/ri";
import img1 from "../../../assets/Home/Technologies/Hatch.png";
import img2 from "../../../assets/Home/Technologies/Tesla.svg";
import img3 from "../../../assets/Home/Technologies/Vector.png";
import img4 from "../../../assets/Home/Technologies/Fill.png";
import img5 from "../../../assets/Home/Technologies/Microsoft.png";
import img6 from "../../../assets/Home/Technologies/Terminal.png";

function HomeBanner({ data }) {
  return (
    <header className={style.header}>
      <div className={style.header__text}>
        <h1>
          <div>{data?.result[0]?.Banner?.BannerTitle}</div>
        </h1>
        <p>{data?.result[0]?.Banner?.BannerSubtitle}</p>
        <div className={style.btnGroup}>
          <button>Get started</button>
          <button>Get a quote</button>
        </div>
      </div>
      <div className={style.header__option}>
        <div className={style.optionWrapper}>
          <div className={style.text}>
            <p className={style.caption}>
              {data?.result[0]?.Banner?.BannerLogoCaption}
            </p>
          </div>
          {/* Rendering logos */}
          {/* {data?.result[0]?.Banner?.BannerLogos.map((item, index) => (
            <div className={style.logo} key={`${item.Logo}_${index}`}>
              <img src={item.Logo} alt={item.Logo} />
            </div>
          ))} */}
          <div className={style.logo}><img src={img1} alt="" /></div>
          <div className={style.logo}><img src={img2} alt="" /></div>
          <div className={style.logo}><img src={img3} alt="" /></div>
          <div className={style.logo}><img src={img4} alt="" /></div>
          <div className={style.logo}><img src={img5} alt="" /></div>
          <div className={style.logo}><img src={img6} alt="" /></div>
        </div>

        <div className={style.specialLinkWrapper}>
          <div className={`${style.block} ${style.first}`}>
            <div className={style.top}>
              <RiFilePaper2Line />
              <h4 className={style.margin}>Receive our Brochure</h4>
            </div>

          </div>
          <div className={`${style.block} ${style.second}`}>
            <div className={style.top}>
              <BsFillPlayFill />
              <h4 className={style.margin}>Watch Free Demo</h4>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default HomeBanner;
