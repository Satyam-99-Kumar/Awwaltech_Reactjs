import { Link, NavLink} from "react-router-dom";
// Styles
import Style from "./Navbar.module.scss";
import logoImage from "../../assets/Group.png";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";


const SideDrawer = ({ show }) => {
  const [open, setOpen] = useState(false);

  // SELECT DRAWER CLASS
  let drawerClass = `${Style.side__drawer}`;
  if (show) {
    drawerClass = `${Style.side__drawer} ${Style.open}`;
  }
  
  // HANDLE CLICK
  const handleClick = (event) => {
    event.preventDefault();
    setOpen(!open)
  }

  return (
    <>
      <nav className={drawerClass}>
        <div className={Style.Drawerheading}>
          <Link to="/"><img src={logoImage} alt="" /></Link>
        </div>
        <div className={Style.drawerLink}>
          <div className={Style.up}>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/hire">Hire Developers</NavLink>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/about">About us</NavLink>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : Style.olink } to="/service" onClick={handleClick}>
            <div className={Style.link}>Service <BsChevronDown /></div>
            {
              open
              ? <>
                  <Link to="/service/mobile-app-development" className={Style.link}>
                    Mobile App Development
                  </Link>
                  <Link to="/service/web-development" className={Style.link}>
                    Web Development
                  </Link>
                  <Link to="/service/strategic-ux-development" className={Style.link}>
                    Strategic UX Development
                  </Link>
                  <Link to="/service/eCommerce-development" className={Style.link}>
                    eCommerce Development
                  </Link>
                  <Link to="/service/enterprise-Devops" className={Style.link}>
                    Enterprise Devops
                  </Link>
                </>
              : null
            }
          </NavLink>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/portfolio">Portfolio</NavLink>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/blog">Blog</NavLink>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/technologies">Technologies</NavLink>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideDrawer;
