import style from "./ServiceEnterprize.module.scss";
import { BsAward, BsCheckCircle } from "react-icons/bs";

function ServiceEnterprize(data) {
  return (
    <div className={style.achievements}>
      {/* ///////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////// */}
      <div className={style.achievements__head}>
        <div>
          <div className={style.logo}>
            <BsAward />
          </div>
          <p>{data.apiData.DrivingSection.TitleTag}</p>
          <h1>
            <div>{data.apiData.DrivingSection.Title1}</div>
            <div>{data.apiData.DrivingSection.Title2}</div>
            <div>{data.apiData.DrivingSection.Title3}</div>
          </h1>
          <p>{data.apiData.DrivingSection.Paragraph}</p>
        </div>
      </div>

      {/* ///////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////// */}
      <div className={style.achievements__achieves}>
        {/* column 1 */}
        <div className={style.block1}>
          {data.apiData.DrivingSection.Services.slice(0, 3).map((item, index) => {
            return (
              <div className={style.achive} key={index}>
                <BsCheckCircle />
                <p>{item.Paragraph}</p>
              </div>
            )
          })}

        </div>
        {/* column 2 */}
        <div className={style.block2}>
          {data.apiData.DrivingSection.Services.slice(-3).map((item, index) => {
            return (
              <div className={style.achive} key={index}>
                <BsCheckCircle />
                <p>{item.Paragraph}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default ServiceEnterprize;
