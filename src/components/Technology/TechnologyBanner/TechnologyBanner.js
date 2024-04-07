import style from './TechnologyBanner.module.scss';
import img1 from "../../../assets/Technologies/banner.png"

function TechnologyBanner({apiData}) {
  return (
    <div className={style.banner}>
        <div className={style.banner__left}>
        <div>
          <p>{apiData.Banner.TitleTag}</p>
          <h1>
            <div>{apiData.Banner.Title1}</div>
            <div> {apiData.Banner.Title2}</div>
            <div>{apiData.Banner.Title3}</div>
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