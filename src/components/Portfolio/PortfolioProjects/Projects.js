import { Link } from "react-router-dom";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { CgArrowRight } from "react-icons/cg";
import style from "./PortfolioProjects.module.scss";
import { Data } from "./Data";
function Projects({ Data }) {
 

  return (
    <>
      <div className={style.allprojects}>
        {Data.map((prjct) => (
          <div key={prjct.id} className={style.project}>
            <div className={style.image}>
              <img src={prjct.banner} alt={prjct.name} />
            </div>
            <div className={style.text}>
              <h4>{prjct.name}</h4>
              <p>{prjct.text}</p>
              <a href={prjct.link} target="_blank" rel="noopener noreferrer">
                View full project
                <span>
                  <CgArrowRight />
                </span>
              </a>
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
