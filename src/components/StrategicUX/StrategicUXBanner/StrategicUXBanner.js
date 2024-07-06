import { Link } from 'react-router-dom';
import style from './StrategicUXBanner.module.scss';
import img1 from "../../../assets/Services/strategicux/7856001.jpg";


function StrategicUXBanner(data) {
  console.log("===>", data)
  return (
    <div className={style.banner}>
        <div className={style.banner__left}>
        <div>
          <p>Strtategic UX Development</p>
          <h1>
            <div>{data.apiData.Banner.Title1}</div>
            <div>{data.apiData.Banner.Title2}</div>
            <div>{data.apiData.Banner.Title3}</div>
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

export default StrategicUXBanner;