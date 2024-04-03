import style from "./Footer.module.scss";
import logo from "../../assets/Footer/Group.svg";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";

function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footer__one}>
          <img src={logo} alt="" />
          <p>
            Suspendisse lobortis ullamcorper sit condimentum. Amet, orci
            elementum, euismod neque hendrerit id varius ullamcorper.
          </p>
          <div className={style.info}>
            <h5>Email</h5>
            <p className={style.infoTxt}>nfo@technologies.in</p>
          </div>
          <div className={style.info}>
            <h5>Contact</h5>
            <p className={style.infoTxt}>+1 452 123 2131</p>
            <p className={style.infoTxt}>+1 452 123 2131</p>
          </div>

          <div className={style.info}>
            <h5>Products</h5>
            <p className={style.infoTxt}>Sit a at rhoncus a nisl.</p>
            <p className={style.infoTxt}>Sit a at rhoncus a nisl.</p>
          </div>
        </div>
        <div className={style.footer__two}>
          <h3>Company</h3>
          <Link to="/">Services</Link>
          <Link to="/hire">Hire Developers</Link>
          <Link to="/about">About us</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/technologies">Technologies</Link>
        </div>
        <div className={style.footer__three}>
          <h3>Services</h3>
          <Link to="/">Website Design</Link>
          <Link to="/">Website Development</Link>
          <Link to="/">Content Management</Link>
          <Link to="/">Digital Marketing</Link>
          <Link to="/">Reporting & Analysis</Link>
          <Link to="/">Customer Support</Link>
        </div>
        <div className={style.footer__four}>
          <h3>Industries</h3>
          <Link to="/">Healthcare and Fitness</Link>
          <Link to="/">On-Demand Solutions</Link>
          <Link to="/">Ecommerce</Link>
          <Link to="/">Transport and Automotive</Link>
          <Link to="/">Food and Restaurant</Link>
          <Link to="/">Events and Tickets</Link>
          <Link to="/">Education and Learning</Link>
        </div>
      </div>

      <div className={style.regions}>
        <div className={style.region}>
          <span><GoLocation /></span>
          <h5>USA</h5>
          <p>Iris Watson</p>
          <p>P.O. Box 283 8562 Fusce Rd.</p>
          <p>Frederick Nebraska 20620</p>
        </div>
        <div className={style.region}>
          <span><GoLocation /></span>
          <h5>UK</h5>
          <p>Cecilia Chapman</p>
          <p>711-2880 Nulla St.</p>
          <p>Mankato Mississippi 96522</p>
        </div>
        <div className={style.region}>
          <span><GoLocation /></span>
          <h5>IND</h5>
          <p>Celeste Slater</p>
          <p>606-3727 Ullamcorper. Street</p>
          <p>Roseville NH 11523</p>
        </div>
        <div className={style.region}>
          <span><GoLocation /></span>
          <h5>IND</h5>
          <p>heodore Lowe</p>
          <p>Ap #867-859 Sit Rd.</p>
          <p>Azusa New York 39531</p>
        </div>
      </div>

      <div className={style.copyright}>
        <p>Copyright © 2022 technology Pvt. Ltd. All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
