import style from "./ProjectIntegration.module.scss";
// images
import java from "../../../assets/Technologies/java.png";
import node from "../../../assets/Technologies/node.png";
import php from "../../../assets/Technologies/php.png";
import dotnet from "../../../assets/Technologies/net.png";

function ProjectIntegration() {
  return (
    <div className={style.intregation}>
      <div className={style.div}>
        <span></span>
        <h5>Development</h5>
        <h1>Integrations</h1>
        <p>
          Mobile development is one of the most intriguing parts of software
          development because it presents a unique opportunity for a development
          team to build a usable and meaningful app in a relatively short period
          of time. The development process includes creating software bundles,
          implementing backend services, and testing the application on target
          devices.
        </p>
        <div className={style.tools}>
          <div className={style.tool}>
            <div className={style.tool__image}>
              <img src={php} alt="" />
            </div>
            <div className={style.tool__name}>PHP</div>
          </div>
          <div className={style.tool}>
            <div className={style.tool__image}>
              <img src={node} alt="" />
            </div>
            <div className={style.tool__name}>NODE.JS</div>
          </div>
          <div className={style.tool}>
            <div className={style.tool__image}>
              <img src={dotnet} alt="" />
            </div>
            <div className={style.tool__name}>C# (.NET CORE)</div>
          </div>
          <div className={style.tool}>
            <div className={style.tool__image}>
              <img src={java} alt="" />
            </div>
            <div className={style.tool__name}>JAVA</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProjectIntegration;
