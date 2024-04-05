import style from "./HomeBanner.module.scss"
import { BsFillPlayFill } from "react-icons/bs";
import { RiFilePaper2Line } from "react-icons/ri";
import img1 from "../../../assets/Home/Technologies/Hatch.png";
import img2 from "../../../assets/Home/Technologies/Tesla.svg";
import img3 from "../../../assets/Home/Technologies/Vector.png";
import img4 from "../../../assets/Home/Technologies/Fill.png";
import img5 from "../../../assets/Home/Technologies/Microsoft.png";
import img6 from "../../../assets/Home/Technologies/Terminal.png";
import { useEffect, useState } from "react";

function HomeBanner({ data }) {
  const [apiData, setData] = useState(null);
  useEffect(() => {
    setData(data);
    console.log("home-banner===>", apiData)
  }, [data]);

  return (
    <header className={style.header}>
      <div className={style.header__text}>
        <h1>
          <div>{apiData?.result?.[0]?.Banner?.BannerTitle}</div>
        </h1>
        <p>{apiData?.result?.[0]?.Banner?.BannerSubtitle}</p>
        <div className={style.btnGroup}>
          <button>Get started</button>
          <button>Get a quote</button>
        </div>
      </div>
      <div className={style.header__option}>
        <div className={style.optionWrapper}>
          <div className={style.text}>
            <p style={{ color: "#ffffff" }}>{apiData?.result?.[0]?.Banner?.BannerLogoCaption}</p>
          </div>
          {/* {apiData?.result?.[0]?.Banner?.BannerLogos.map((item, index) => (
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
          <div class={`${style.block} ${style.first}`}>
            <RiFilePaper2Line />
            <h4>Recieve our Brochure</h4>
          </div>
          <div class={`${style.block} ${style.second}`}>
            <BsFillPlayFill />
            <h4>Watch Free Demo</h4>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomeBanner