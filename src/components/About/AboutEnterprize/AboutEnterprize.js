import { useEffect, useState } from "react";
import style from "./AboutEnterprize.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { fetchAboutData } from "../../../config/apiService"; // Adjust the path as needed

function AboutEnterprize() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function fetchApiData() {
      try {
        const data = await fetchAboutData();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchApiData();
  }, []);


  return (
    <div className={style.enterprize}>
      <div className={style.enterprize__text}>
        <p>{apiData?.result[0]?.DrivingEnterprisesSection?.Title1}</p>
        <h1>
          <div>{apiData?.result[0]?.DrivingEnterprisesSection?.Title2}</div>
        </h1>
        <p>{apiData?.result[0]?.DrivingEnterprisesSection?.Paragraph}</p>
      </div>

      {/* Render Enterprises */}
      {apiData?.result[0]?.DrivingEnterprisesSection?.DrivingEnterprises.map((enterprise, index) => (
        <div key={index} className={style.enterprise}>
          <img src={enterprise.Logo} alt={enterprise.EnterprisesName} />
          <Link to={enterprise.Link}>{enterprise.EnterprisesName}</Link>
        </div>
      ))}
      <div className={style.enterprizeContentWrappr}>
      <div className={style.enterprize__content}>
        <div className={style.element}>
          <div className={style.logo}>
            <AiOutlineHeart />
          </div>
          <div className={style.text}>
            <div>Healthcare</div>
            <div>& Fitness</div>
          </div>
        </div>

        <div className={style.element}>
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
        </div>
      </div>
      </div>

      <div className={style.globalLink}>
        <Link to="/about">Lets work together</Link>
      </div>
    </div>
  );
}

export default AboutEnterprize;
