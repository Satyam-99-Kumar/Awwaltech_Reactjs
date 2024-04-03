import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// Styles
import styles from "./Navbar.module.scss";
import logoImage from "../../assets/Group.svg";
import logoImage2 from "../../assets/Footer/Group.svg";
import { BsChevronDown, BsCodeSquare, BsCart, BsHexagon } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
// Components
import DrawerTogglerButton from "./DrawerTogglerButton";

function Nav({ drawerToggleClickHnadler }) {
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 150) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };


  const handleMenuClick = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // window.addEventListener("click", handleClick, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className={!open ? `${styles.nav}` : `${styles.nav} ${styles.navOpen}`}>
      <div className={styles.nav__brand}>
        <Link to="/">{!open ? <img src={logoImage} alt="" /> : <img src={logoImage2} alt="" /> }</Link>
      </div>

      <div className={styles.nav__links}>
        {/* Menu */}
        <NavLink
          onClick={handleMenuClick}
          className={(navData) => (navData.isActive ? styles.activeLink : ``)} 
          id="dropdown"
          to="/service"
        >
          <div className={styles.barier}>Services <span><BsChevronDown /></span></div>
            <div className={styles.menus}>
              <NavLink  className={`${styles.menu}`} to="/service/mobile-app-development" >
                <div><AiOutlineMobile /></div>
                <div>Mobile App Development</div>
              </NavLink>
              
              <NavLink className={`${styles.menu}`} to="/service/web-development">
                <div><FiMonitor /></div>
                <div>Web Development</div>
              </NavLink>

              <NavLink className={`${styles.menu}`} to="/service/strategic-ux-development">
                <div><BsHexagon /></div>
                <div>Strategic UX Development</div>
              </NavLink>

              <NavLink  className={`${styles.menu}`} to="/service/eCommerce-development">
                <div><BsCart /></div>
                <div>eCommerce Development</div>
              </NavLink>

              <NavLink className={`${styles.menu}`} to="/service/enterprise-Devops">
                <div><BsCodeSquare /></div>
                <div>Enterprise Devops</div>
              </NavLink>
            </div>
        </NavLink>
        
        <NavLink className={(navData) => (navData.isActive ? styles.activeLink : ``)} to="/hire">
          <div className={styles.barier}>Hire Developers</div>
        </NavLink>
        <NavLink className={(navData) => (navData.isActive ? styles.activeLink : ``)} to="/about">
          <div className={styles.barier}>About us</div>
        </NavLink>
        <NavLink className={(navData) => (navData.isActive ? styles.activeLink : ``)} to="/portfolio">
          <div className={styles.barier}>Portfolio</div>
        </NavLink>
        <NavLink className={(navData) => (navData.isActive ? styles.activeLink : ``)} to="/blog">
          <div className={styles.barier}>Blog</div>
        </NavLink>
        <NavLink className={(navData) => (navData.isActive ? styles.activeLink : ``)} to="/technologies">
          <div className={styles.barier}>Technologies</div>
        </NavLink>
        <NavLink className={(navData) => (navData.isActive ? styles.activeLinkContact : ``)} to="/contact">
        <div className={styles.barier}>Contact</div>
        </NavLink>
        <DrawerTogglerButton click={drawerToggleClickHnadler} />
      </div>
    </div>
  );
}

export default Nav;
