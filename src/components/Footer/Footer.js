import style from "./Footer.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";

function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footer__one}>
          <img src={logo} alt="" />
          <p>
          Awwaltech is a Prime and well recognized IT Solution Provider, which is a competitive global leader in Digital Transformation & Emerging Technologies, engaged in handling the service requests from the reputed clients across the Globe.
          </p>
          <div className={style.info}>

            <div className={style.icon}>
              {/* <img src={contact} alt=""></img>
              <p className={style.infoTxt}>+1 452 123 2131</p> */}
            </div>
            <span>Email</span>
            <p className={style.infoTxt}>info@awwaltech.com</p>
          </div>
          <div className={style.info}>
            <span>Contact</span>
            <p className={style.infoTxt}>+91 91932 99275</p>
          </div>


          <div className={style.info}>

            <span>Products</span>
            <p className={style.infoTxt}>Everlio</p>
            <p className={style.infoTxt}>HiTech Mentor</p>
          </div>
        </div>
        <div className={style.footer__two}>
          <h3>Company</h3>
          <Link to="/">Services</Link>
          <Link to="/hire">Hire Developers</Link>
          <Link to="/aboutus">About us</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/technologies">Technologies</Link>
          {/* <Link to="/career">Career</Link> */}
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
          <span>
            <GoLocation />
          </span>
          <h5>India</h5>
          <p>FF-91, Gaur City Center</p>
          <p>Sector 4, Greater Noida West</p>
          <p>Uttar Pradesh 203207</p>
        </div>
        <div className={style.region}>
          <span>
            <GoLocation />
          </span>
          <h5>India</h5>
          <p>Ground Floor, Awwal Manzil</p>
          <p>Near Govt. Hospital,</p>
          <p> Moradabad, Uttar Paradesh 244411</p>
        </div>
        <div className={style.region}>
          <span>
            <GoLocation />
          </span>
          <h5>USA</h5>
          <p>Coming Soon!!</p>
        </div>
        <div className={style.region}>
          <span>
            <GoLocation />
          </span>
          <h5>Dubai</h5>
          <p>Coming Soon!!</p>
        </div>
        <div className={style.region}>
          <span>
            <GoLocation />
          </span>
          <h5>UK</h5>
          <p>Coming Soon!!</p>
        </div>
      </div>

      <div className={style.copyright}>
        <p>Copyright © 2019-2024 Awwaltech Pvt. Ltd. All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
