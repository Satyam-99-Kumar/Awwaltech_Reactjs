import { Link } from "react-router-dom";
import style from "./ContactBanner.module.scss";

function ContactBanner() {
  return (
    <div className={style.banner}>
      <div className={style.banner__left}>
        <h3>Contact us</h3>
        <h1>
          <div>Get started</div>
          <div>with Minttask</div>
        </h1>
        <p>
          Wish to connect with us? We will be happy to hear from you. Fill this
          form so we can learn more about your requirements.
        </p>
      </div>

      <div className={style.banner__right}>
          <Link to="/contact">Get a quote</Link>
      </div>
    </div>
  );
}

export default ContactBanner;
