import { Link } from "react-router-dom";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { CgArrowRight } from "react-icons/cg";
import style from "./PortfolioProjects.module.scss";

function Projects({ projects }) {
  return (
    <>
      <div className={style.allprojects}>
        {projects.map((prjct) => (
          <div className={style.project}>
            <div className={style.image}>
              <img src={prjct.banner} alt="" />
            </div>
            <div className={style.text}>
              <h4>{prjct.name}</h4>
              <p>{prjct.text}</p>
              <Link to={`/portfolio/project/${prjct.id}`}>View full project <span><CgArrowRight/></span></Link>
            </div>
          </div>
        ))}
      </div>

      <div className={style.pagination}>
        <div>
          <GoChevronLeft />
        </div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>..</div>
        <div>9</div>
        <div>10</div>
        <div>
          <GoChevronRight />
        </div>
      </div>
    </>
  );
}

export default Projects;
