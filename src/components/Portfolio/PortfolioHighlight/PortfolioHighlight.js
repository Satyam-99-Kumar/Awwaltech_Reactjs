import style from "./PortfolioHighlight.module.scss";
import p2 from "../../../assets/Portfolio/p2.png";

function PortfolioHighlight({apiData}) {
  return (
    <div className={style.highlights}>
      <div className={style.highlights__wrapper}>
        <div className={style.content}>
          {/* text */}
          <div className={style.content__text}>
            <p>{apiData.ClientsSection.Title1}</p>
            <h1>{apiData.ClientsSection.Title2}</h1>
            <p>{apiData.ClientsSection.Paragraph}</p>

          </div>

          {/* image */}
          <div className={style.content__image}>
            <img src={p2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioHighlight;
