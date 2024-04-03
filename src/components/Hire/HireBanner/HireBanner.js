import style from "./HireBanner.module.scss";
import img1 from "../../../assets/Hire/banner.png";
import { Link } from "react-router-dom";

function HireBanner() {
  return (
    <div className={style.banner}>
      <div className={style.banner__left}>
        <div>
          <p>Hire Our Dedicated Virtual Team</p>
          <h1 className={style.desktopViewHeading}>
            <div>Hire Dedicated</div>
            <div>Developer</div>
          </h1>
          <h1 className={style.mobileViewHeading}>Hire Dedicated Developer</h1>
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
