import style from "./ProjectTakeaway.module.scss";
import p1 from "../../../assets/Portfolio/p1.png";

function ProjectTakeaway() {
  return (
    <div className={style.aproject}>
      <div className={style.wrapper}>
        <div className={style.wrapper__left}>
          <img src={p1} alt="" />
        </div>
        <div className={style.wrapper__right}>
          <h3>Take away</h3>
          <div className={style.line}></div>
          <p className={style.text}>
            Being a rising name in the IT industry across the world, we deliver
            quality services in a timely fashion to help our clients gain a
            leading edge in this competitive market.Being a rising name in the
            IT industry across the world, we deliver quality services in a
            timely fashion to help our clients gain a leading edge in this
            competitive market.Being a rising name in the IT industry across the
            world, we deliver quality services in a timely fashion to help our
            clients gain a leading edge in this competitive market.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectTakeaway;
