import style from "./AboutEnterprize.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function AboutEnterprize() {
  return (
    <div className={style.enterprize}>
      <div className={style.enterprize__text}>
        <p>Driving Enterprise</p>
        <h1>
          <div>This is one movement you </div>
          <div>don't want to miss</div>
        </h1>
        <p>
          Codiant is a one-stop solution for your IT & software development
          needs. Our advanced services in the field of Enterprise Mobility,
          Mobile App Development, Custom Web Product Development, and UI/UX
          Development services help you address evolving market challenges by
          defining, designing and building applications tailored to meet your
          specific business requirements. As a key player in technology
          industry, we strive to develop smart solutions that augments human
          capabilities, foster innovation, and create more effective processes
          at lower cost.
        </p>
      </div>

      <div className={style.enterprizeContentWrappr}>
      <div className={style.enterprize__content}>
        <div className={style.element}>
          <div className={style.logo}>
            <AiOutlineHeart />
          </div>
          <div className={style.text}>
            <div>Healthcare</div>
            <div>& Fitness</div>
          </div>
        </div>

        <div className={style.element}>
          <div className={style.logo}>
            <RiCheckboxMultipleLine />
          </div>
          <div className={style.text}>
            <div>On-Demand</div>
            <div>Solutions</div>
          </div>
        </div>

        <div className={style.element}>
          <div className={style.logo}>
            <RiCheckboxMultipleLine />
          </div>
          <div className={style.text}>
            <div>Transport</div>
            <div>& Automation</div>
          </div>
        </div>
        <div className={style.element}>
          <div className={style.logo}>
            <RiCheckboxMultipleLine />
          </div>
          <div className={style.text}>
            <div>Enterprise</div>
            <div>Mobility</div>
          </div>
        </div>
        <div className={style.element}>
          <div className={style.logo}>
            <RiCheckboxMultipleLine />
          </div>
          <div className={style.text}>
            <div>Food</div>
            <div>& Restaurant</div>
          </div>
        </div>
      </div>
      </div>

      <div className={style.globalLink}>
        <Link to="/about">Lets work together</Link>
      </div>
    </div>
  );
}

export default AboutEnterprize;
