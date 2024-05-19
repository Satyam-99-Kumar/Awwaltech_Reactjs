import style from "./CareerOpening.module.scss";
import enterprize from "../../../assets/Technologies/enterprize.png";
import netqorks from "../../../assets/Technologies/netqorks.png";
import Startup from "../../../assets/Technologies/Startup.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function CareerOpening() {
  return (
    <div className={style.opening}>
      <div className={style.opening__text}>
        <p>Careers</p>
        <h1>Current Openings</h1>
        <p>
          From ideation and conceptualization to application development,
          ready-to-deploy assets, marketing and support, Codiant delights
          clients of all sizes through agile deliveries and simplified
          solutions.
        </p>
      </div>

      <div className={style.opening__items}>
        {/* item 1 */}
        <div className={style.item}>
            <img src={enterprize} alt="" />
            <h4>Java Developer (Spring)</h4>
            <p>We are looking for Java Developer with a minimum of 3-5 years of experience.</p>
            <Link to={`/career/${`Java Developer (Spring)`}`}>Apply <span><BsArrowRight /></span></Link>
        </div>
        {/* item 2 */}
        <div className={style.item}>
            <img src={netqorks} alt="" />
            <h4>.net Developer</h4>
            <p>We are looking for Java Developer with a minimum of 3-5 years of experience.</p>
            <Link to={`/career/${`.net Developer`}`}>Apply <span><BsArrowRight /></span></Link>
        </div>
        {/* item 3 */}
        <div className={style.item}>
            <img src={Startup} alt="" />
            <h4>React Native Developer</h4>
            <p>We are looking for Java Developer with a minimum of 3-5 years of experience.</p>
            <Link to={`/career/${`React Native Developer`}`}>Apply <span><BsArrowRight /></span></Link>
        </div>
        {/* item 4 */}
        <div className={style.item}>
            <img src={enterprize} alt="" />
            <h4>Java Developer (Spring)</h4>
            <p>We are looking for Java Developer with a minimum of 3-5 years of experience.</p>
            <Link to={`/career/${`Java Developer (Spring)`}`}>Apply <span><BsArrowRight /></span></Link>
        </div>
        {/* item 5 */}
        <div className={style.item}>
            <img src={netqorks} alt="" />
            <h4>.net Developer</h4>
            <p>We are looking for Java Developer with a minimum of 3-5 years of experience.</p>
            <Link to={`/career/${`.net Developer`}`}>Apply <span><BsArrowRight /></span></Link>
        </div>
        {/* item 6 */}
        <div className={style.item}>
            <img src={Startup} alt="" />
            <h4>React Native Developer</h4>
            <p>We are looking for Java Developer with a minimum of 3-5 years of experience.</p>
            <Link to={`/career/${`React Native Developer`}`}>Apply <span><BsArrowRight /></span></Link>
        </div>
        {/* item 7 */}
        <div className={style.item}>
            <img src={enterprize} alt="" />
            <h4>Java Developer (Spring)</h4>
            <p>We are looking for Java Developer with a minimum of 3-5 years of experience.</p>
            <Link to={`/career/${`Java Developer (Spring)`}`}>Apply <span><BsArrowRight /></span></Link>
        </div>
        {/* item 8 */}
        <div className={style.item}>
            <img src={netqorks} alt="" />
            <h4>.net Developer</h4>
            <p>We are looking for Java Developer with a minimum of 3-5 years of experience.</p>
            <Link to={`/career/${`.net Developer`}`}>Apply <span><BsArrowRight /></span></Link>
        </div>
        {/* item 9 */}
        <div className={style.item}>
            <img src={Startup} alt="" />
            <h4>React Native Developer</h4>
            <p>We are looking for Java Developer with a minimum of 3-5 years of experience.</p>
            <Link to={`c/areer/${`React Native Developer`}`}>Apply <span><BsArrowRight /></span></Link>
        </div>
      </div>
    </div>
  );
}

export default CareerOpening;
