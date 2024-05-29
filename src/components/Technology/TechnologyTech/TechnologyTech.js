import style from "./TechnologyTech.module.scss";
import { BsPatchCheck } from "react-icons/bs";
import { useState, useEffect } from "react";
function TechnologyTech({ tech }) {
  const [imagePaths, setImagePaths] = useState([]);
  useEffect(() => {
    // Define image paths
    const imgPaths = [
      require("../../../assets/Technologies/php.png"),
      require("../../../assets/Technologies/node.png"),
      require("../../../assets/Technologies/net.png"),
      require("../../../assets/Technologies/java.png"),
    ];
    setImagePaths(imgPaths);
  }, []);
  return (
    <div
      className={style.tech}
      style={{ background: tech.backgroundColor, color: tech.color }}
    >
      <div className={style.text}>
        <div className={style.logo}>
          <BsPatchCheck />
        </div>
        <h3 style={{ color: tech.h3Color }}>{tech.Title1}</h3>
        <h1 style={{ color: tech.h1Color }}>{tech.Title2}</h1>
        <p style={{ color: tech.pColor }}>{tech.Paragraph}</p>
      </div>

      <div className={style.slides}>
        {tech &&
          tech.Developments &&
          tech.Developments.map((tool, index) => (
            <div
              className={style.slide}
              key={tool.id}
              style={{ background: tech.slideBackground }}
            >
              <img src={imagePaths[index]} alt="" />
              <h3 style={{ color: tech.toolH3Color }}>
                {tool.DevelopementName}
              </h3>
              <p style={{ color: tech.toolPColor }}>{tool.Paragraph}</p>

              <h4 style={{ color: tech.h4Color }}>Can be used for:</h4>
              {tool.List.map((u) => (
                <p style={{ color: tech.toolPColor }} key={Math.random()}>
                  {u.Name}
                </p>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default TechnologyTech;
