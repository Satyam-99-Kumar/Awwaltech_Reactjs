import style from "./TechnologyDetail.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import img1 from "../../../assets/Technologies/Startup.png";
import img2 from "../../../assets/Technologies/netqorks.png";
import img3 from "../../../assets/Technologies/enterprize.png";

function TechnologyDetail() {
  return (
    <>
      <div className={style.detail}>
        <div className={style.head}>
          <p>Mobile App Development Solutions</p>
          <h2>
            <div>What we can offer</div>
          </h2>
        </div>
        <div className={style.text}>
          <p>
            We realize that any organization may encounter problems of choosing
            the wrong technology or development approach. These issues may
            appear tactical, but can also have wide ranging impact on the
            successful and continuing operations of the overall business.
          </p>
          <p>
            So before starting any project we carefully investigate your
            company's niche features, compare already implemented solutions and
            offer a stack of technologies that are most suitable for your
            specific situation.
          </p>
        </div>
      </div>

      {/* /////////////////////////////////////// */}
      {/* /////////////////////////////////////// */}
      <div className={style.solutions}>
        <div className={style.solution}>
          <div className={style.logo}>
            <img src={img3} alt="Enterprises" />
          </div>
          <h4>Enterprises</h4>
          <p>
            Enterprise software has its own specific set of requirements. The
            architecture should be scalable, but cost-effective, safe, but
            user-friendly, and, above all, it should provide high-quality user
            services that produce results. Our high-quality engineers will help
            your company to build powerful enterprise software.
          </p>
          <Link to="/">
            Explore <span>More</span>{" "}
            <span>
              <BsArrowRight />
            </span>
          </Link>
        </div>

        <div className={style.solution}>
          <div className={style.logo}>
            <img src={img2} alt="Tech Companies" />
          </div>
          <h4>Tech Companies</h4>
          <p>
            The development of high-tech solutions requires highly qualified
            specialists with the necessary niche work experience. Sometimes tech
            companies are facing with a lack of experts on location. Our team is
            ready to scale your IT department and bring innovations, relying on
            the most relevant technologies.
          </p>
          <Link to="/">
            Explore <span>More</span>{" "}
            <span>
              <BsArrowRight />
            </span>
          </Link>
        </div>

        <div className={style.solution}>
          <div className={style.logo}>
            <img src={img1} alt="startups" />
          </div>
          <h4>Startups</h4>
          <p>
            Startup companies may face many challenges during early development.
            A wide range of technologies can help them with a fast start and a
            successful market entry. Besides, the use of cross-platform
            technologies can significantly reduce the MVP release time.
          </p>
          <Link to="/">
            Explore <span>More</span>{" "}
            <span>
              <BsArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TechnologyDetail;
