import style from "./HomeFeedback.module.scss";
import { FaQuoteLeft } from "react-icons/fa";
import user from "../../../assets/Home/Feedback/user.png";

function FeedBack({ id, item, background }) {
  return (
    <div className={style.feedback} style={{background: background}}>
      <div className={style.feedback__container}>
        <div className={style.quote}>
          <FaQuoteLeft />
        </div>

        <div className={style.text}>{item.Paragraph}</div>

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
