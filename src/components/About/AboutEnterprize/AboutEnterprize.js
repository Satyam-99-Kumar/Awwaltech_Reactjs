import style from "./AboutEnterprize.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function AboutEnterprize({data}) {

  return (
    <div className={style.enterprize}>
      <div className={style.enterprize__text}>
        <p>{data?.DrivingEnterprisesSection?.TitleTag}</p>
        <h1>
          <div>{data?.DrivingEnterprisesSection?.Title1}</div>
          <div>{data?.DrivingEnterprisesSection?.Title2}</div>
        </h1>
        <p>{data?.DrivingEnterprisesSection?.Paragraph}</p>
      </div>

      {/* Render Enterprises */}
      {/* {data?.DrivingEnterprisesSection?.DrivingEnterprises.map((enterprise, index) => (
        <div key={index} className={style.enterprise}>
          <img src={enterprise.Logo} alt={enterprise.EnterprisesName} />
          <Link to={enterprise.Link}>{enterprise.EnterprisesName}</Link>
        </div>
      ))} */}
      <div className={style.enterprizeContentWrappr}>
      <div className={style.enterprize__content}>
      {data?.DrivingEnterprisesSection?.DrivingEnterprises.map((item, index) => (
        <div className={style.element}>
          <div className={style.logo}>
            <AiOutlineHeart />
          </div>
          <div className={style.text}>
            <div>{item.Title1}</div>
            <div> {item.Title2}</div>
          </div>
        </div>
      ))}
        {/* <div className={style.element}>
          <div className={style.logo}>
            <RiCheckboxMultipleLine />
          </div>
          <div className={style.text}>
            <div>On-Demand</div>
            <div>Solutions</div>
          </div>
        </div>

        <div className={style.element}>
          <div className={style.logo}>
            <RiCheckboxMultipleLine />
          </div>
          <div className={style.text}>
            <div>Transport</div>
            <div>& Automation</div>
          </div>
        </div>
        <div className={style.element}>
          <div className={style.logo}>
            <RiCheckboxMultipleLine />
          </div>
          <div className={style.text}>
            <div>Enterprise</div>
            <div>Mobility</div>
          </div>
        </div>
        <div className={style.element}>
          <div className={style.logo}>
            <RiCheckboxMultipleLine />
          </div>
          <div className={style.text}>
            <div>Food</div>
            <div>& Restaurant</div>
          </div>
        </div> */}
      </div>
      </div>

      <div className={style.globalLink}>
        <Link to="/aboutus">Lets work together</Link>
      </div>
    </div>
  );
}

export default AboutEnterprize;
