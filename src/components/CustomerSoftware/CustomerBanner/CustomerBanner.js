import { Link } from "react-router-dom";
import style from "./CustomerBanner.module.scss";

import cus from "../../../assets/Services/customer/download.png";

function CustomerBanner(data) {
  console.log("===>", data);
  return (
    <div className={style.banner}>
      <div className={style.banner__left}>
        <div>
          <p>Customer Software Development</p>
          <h1>
            <div>{data.apiData.Banner.Title1}</div>
            <div>{data.apiData.Banner.Title2}</div>
            <div>{data.apiData.Banner.Title3}</div>
          </h1>
          <Link to="/about">Get a quote</Link>
        </div>
      </div>

      <div className={style.banner__right}>
        <img src={cus} alt="" className={style.iphone1} />
      </div>
    </div>
  );
}

export default CustomerBanner;
