import style from "./PorfolioAproject.module.scss";
import p1 from "../../../assets/Portfolio/p1.png";
import { Link } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";

function PorfolioAproject({data}) {
  return (
    <div className={style.aproject}>
      <div className={style.wrapper}>
        <div className={style.wrapper__left}>
          <img src={p1} alt="" />
        </div>
        <div className={style.wrapper__right}>
          <p>{data?.projectSection?.TitleTag}</p>
          {/* desktop view */}
          <h3 className={style.desktopView}>
          <p>{data?.projectSection?.Title1}</p>
          <p>{data?.projectSection?.Title2}</p>
          </h3>
          {/* mobile view */}
          <h3 className={style.mobileView}>
            Android, iOS & Flutter App Development
          </h3>
          <div className={style.line}></div>

          {/* desktop view */}
          <p className={`${style.text} ${style.desktopView}`}>
            Being a rising name in the IT industry across the world, we deliver
            quality services in a timely <br /> fashion to help our clients gain
            a leading.
            <br />
            edge in this competitive market.
          </p>
          {/* mobile view */}
          <p className={`${style.text} ${style.mobileView}`}>
            Being a rising name in the IT industry across the world, we deliver
            quality services in a timely fashion to help our clients gain a
            leading edge in this competitive market.
          </p>

          <Link to="/portfolio">
            View full project{" "}
            <span>
              <CgArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PorfolioAproject;
