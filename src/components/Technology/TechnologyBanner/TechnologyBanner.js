import style from './TechnologyBanner.module.scss';
import img1 from "../../../assets/Technologies/banner.png"

function TechnologyBanner() {
  return (
    <div className={style.banner}>
        <div className={style.banner__left}>
        <div>
          <p>Technology Competence</p>
          <h1>
            <div>Wide range of technologies</div>
            <div> and the most efficient</div>
            <div>development approaches</div>
          </h1>
        </div>
      </div>

      <div className={style.banner__right}>
        <img src={img1} alt="" className={style.frame} />
      </div>
    </div>
  )
}

export default TechnologyBanner