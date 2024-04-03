import style from "./TechnologyTech.module.scss";
import { BsPatchCheck } from "react-icons/bs";

function TechnologyTech({ tech }) {
  return (
    <div
      className={style.tech}
      style={{ background: tech.backgroundColor, color: tech.color }}
    >
      <div className={style.text}>
        <div className={style.logo}>
          <BsPatchCheck />
        </div>
        <h3 style={{color: tech.h3Color}}>{tech.h3}</h3>
        <h1 style={{color: tech.h1Color}}>{tech.h1}</h1>
        <p style={{color: tech.pColor}}>{tech.p}</p>
      </div>

      <div className={style.slides}>
        {tech &&
          tech.tools &&
          tech.tools.map((tool) => (
            <div className={style.slide} key={tool.id} style={{background: tech.slideBackground}}>
              <img src={tool.image} alt="" />
              <h3 style={{color: tech.toolH3Color}}>{tool.head}</h3>
              <p style={{color: tech.toolPColor}}>{tool.text}</p>

              <h4 style={{color: tech.h4Color}}>Can be used for:</h4>
              {
                  tool.used.map(u => <p style={{color: tech.toolPColor}} key={Math.random()}>{u}</p>)
              }
            </div>
          ))}
      </div>
    </div>
  );
}

export default TechnologyTech;
