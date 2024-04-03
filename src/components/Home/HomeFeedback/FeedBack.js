import style from "./HomeFeedback.module.scss";
import { FaQuoteLeft } from "react-icons/fa";
import user from "../../../assets/Home/Feedback/user.png";

function FeedBack({ background }) {
  return (
    <div className={style.feedback} style={{background: background}}>
      <div className={style.feedback__container}>
        <div className={style.quote}>
          <FaQuoteLeft />
        </div>

        <div className={style.text}>
          I have done a software project with Codiant Software Technologies Pvt.
          Ltd which was a difficult challenge for both of us because of the
          language differences and the wide scope of work (web, IOS and
          Android). However, they have delivered the project as per my
          expectation and maybe better. I will kee
        </div>

        <div className={style.user}>
          <div className={style.user__image}>
            <img src={user} alt="" />
          </div>
          <div className={style.user__name}>Kianna Curtis</div>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
