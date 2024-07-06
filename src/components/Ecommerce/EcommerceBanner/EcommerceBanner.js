import { Link } from 'react-router-dom';
import style from './EcommerceBanner.module.scss';
import img1 from "../../../assets/Services/ecommerce.png";


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
        <img src={img1} alt="" className={style.iphone1} />
       
      </div>
    </div>
  )
}

export default EcommerceBanner;