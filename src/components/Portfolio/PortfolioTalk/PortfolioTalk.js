import { Link } from "react-router-dom";
import style from "./PortfolioTalk.module.scss";

function PortfolioTalk() {
  return (
    <div className={style.talk}>
      <div className={style.talk__text}>
        <h1>Talk to us</h1>
        <p>
          Wish to connect with us? We will be happy to hear from you. Fill this
          form so we can learn more about your requirements.
        </p>
        <div className={style.btnGroup}>
            <Link to="/portfolio">Get a quote</Link>
            <Link to="/portfolio">Get started</Link>
        </div>
      </div>

      <div className={style.talk__right}></div>
    </div>
  );
}

export default PortfolioTalk;
