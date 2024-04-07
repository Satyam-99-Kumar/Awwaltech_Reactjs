import style from "./HireBanner.module.scss";
import img1 from "../../../assets/Hire/banner.png";
import { Link } from "react-router-dom";

function HireBanner({apiData}) {
  return (
    <div className={style.banner}>
      <div className={style.banner__left}>
        <div>
          <p>{apiData.Banner.TitleTag}</p>
          <h1 className={style.desktopViewHeading}>
            <div>{apiData.Banner.Title1}</div>
            <div>{apiData.Banner.Title2}</div>
          </h1>
          <h1 className={style.mobileViewHeading}>{apiData.Banner.Title1} {apiData.Banner.Title2}</h1>
          <Link to="/hire">Contact Us</Link>
        </div>
      </div>

      <div className={style.banner__right}>
        <img src={img1} alt="" className={style.frame} />
      </div>
    </div>
  );
}

export default HireBanner;
