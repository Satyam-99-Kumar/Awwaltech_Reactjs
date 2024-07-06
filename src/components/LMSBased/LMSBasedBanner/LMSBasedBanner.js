import { Link } from 'react-router-dom';
import style from './LMSBanner.module.scss';
import img1 from "../../../assets/Services/lms-based.png";


function LMSBanner(apidata) {
  console.log("===>", apidata)
  return (
    <div className={style.banner}>
        <div className={style.banner__left}>
        <div>
          <p>LMS Based Services</p>
          <h1>
            <div>{apidata.apiData.Banner.Title1}</div>
            <div>{apidata.apiData.Banner.Title2}</div>
            <div>{apidata.apiData.Banner.Title3}</div>
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

export default LMSBanner