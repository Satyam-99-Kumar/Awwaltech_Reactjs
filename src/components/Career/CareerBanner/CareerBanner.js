import style from "./CareerBanner.module.scss";
import img1 from "../../../assets/Career/unsplash_jDdkEddFuBI.png";

function CareerBanner() {
  return (
    <div className={style.banner}>
      <div className={style.banner__left}>
        <div>
          <p>our team. </p>
          <h1>
            <div>We’re always looking for</div>
            <div>more great people to join</div>
            <div>our team.</div>
          </h1>
        </div>
      </div>

      <div className={style.banner__right}>
        <img src={img1} alt="" className={style.frame} />
      </div>
    </div>
  );
}

export default CareerBanner;
