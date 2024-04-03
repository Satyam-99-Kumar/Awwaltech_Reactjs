import style from "./ServiceEnterprize.module.scss";
import { BsAward, BsCheckCircle } from "react-icons/bs";

function ServiceEnterprize() {
  return (
    <div className={style.achievements}>
      {/* ///////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////// */}
      <div className={style.achievements__head}>
        <div>
          <div className={style.logo}>
            <BsAward />
          </div>
          <p>Driving Enterprise</p>
          <h1>
              <div>Why to choose Minttask as your</div>
              <div>Mobile App Development</div>
              <div>Company ?</div>
          </h1>
          <p>
            Empowering businesses across verticals by leveraging the power of
            mobility that help accelerate innovation, reduce costs and improve
            performance.
          </p>
        </div>
      </div>

      {/* ///////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////// */}
      <div className={style.achievements__achieves}>
        {/* column 1 */}
        <div className={style.block1}>
          {/* -- 1 -- */}
          <div className={style.achive}>
            <BsCheckCircle />
            <p>
              Our complete spectrum of mobile app development and web solutions
              help startups, small-medium enterprises
            </p>
          </div>
          {/* -- 2 -- */}
          <div className={style.achive}>
            <BsCheckCircle />
            <p>
              Our complete spectrum of mobile app development and web solutions
              help startups, small-medium enterprises
            </p>
          </div>
          {/* -- 3 -- */}
          <div className={style.achive}>
            <BsCheckCircle />
            <p>
              Our complete spectrum of mobile app development and web solutions
              help startups, small-medium enterprises
            </p>
          </div>
        </div>
        {/* column 2 */}
        <div className={style.block2}>
          {/* -- 1 -- */}
          <div className={style.achive}>
            <BsCheckCircle />
            <p>
              Our complete spectrum of mobile app development and web solutions
              help startups.
            </p>
          </div>
          {/* -- 2 -- */}
          <div className={style.achive}>
            <BsCheckCircle />
            <p>
              Our complete spectrum of mobile app development and web solutions
              help startups.
            </p>
          </div>
          {/* -- 3 -- */}
          <div className={style.achive}>
            <BsCheckCircle />
            <p>
              Our complete spectrum of mobile app development and web solutions
              help startups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceEnterprize;
