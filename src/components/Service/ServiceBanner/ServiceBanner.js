import { Link } from 'react-router-dom';
import style from './ServiceBanner.module.scss';
import img1 from "../../../assets/Services/frame.png";
import iphone1 from "../../../assets/Services/iphone1.png";
import iphone2 from "../../../assets/Services/iphone2.png";
import iphone3 from "../../../assets/Services/iphone3.png";

function ServiceBanner() {
  return (
    <div className={style.banner}>
        <div className={style.banner__left}>
        <div>
          <p>Mobile App Development</p>
          <h1>
            <div>Native & Cross Platform</div>
            <div>Mobile App Development</div>
            <div>Company</div>
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

export default ServiceBanner