import style from "./PortfolioHighlight.module.scss";
import p2 from "../../../assets/Portfolio/p2.png";

function PortfolioHighlight() {
  return (
    <div className={style.highlights}>
      <div className={style.highlights__wrapper}>
        <div className={style.content}>
          {/* text */}
          <div className={style.content__text}>
            <p>Clients</p>
            <h1>Customer story highlight</h1>
            <p>
              From ideation and conceptualization to application development,
              ready-to-deploy assets, marketing and support, Codiant delights
              clients of all sizes through agile deliveries and simplified
              solutions.
            </p>
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
