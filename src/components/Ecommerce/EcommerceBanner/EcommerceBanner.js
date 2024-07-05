import { Link } from 'react-router-dom';
import style from './EcommerceBanner.module.scss';
import img1 from "../../../assets/Services/frame.png";
import iphone1 from "../../../assets/Services/iphone1.png";
import iphone2 from "../../../assets/Services/iphone2.png";
import iphone3 from "../../../assets/Services/iphone3.png";

function EcommerceBanner(apiData) {
  console.log("===>", apiData)
  return (
    <div className={style.banner}>
        <div className={style.banner__left}>
        <div>
          <p>Ecommerce Development</p>
          <h1>
            <div>{apiData.apiData.Banner.Title1}</div>
            <div>{apiData.apiData.Banner.Title2}</div>
            <div>{apiData.apiData.Banner.Title3}</div>
          </h1>
          <Link to='/about'>Get a quote</Link>
        </div>
      </div>

      <div className={style.banner__right}>
        <img src={img1} alt="" className={style.frame} />
        <img src={iphone1} alt="" className={style.iphone1} />
        <img src={iphone2} alt="" className={style.iphone2} />
        <img src={iphone3} alt="" className={style.iphone3} />
      </div>
    </div>
  )
}

export default EcommerceBanner;