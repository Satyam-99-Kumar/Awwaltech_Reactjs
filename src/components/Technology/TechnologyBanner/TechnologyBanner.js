import style from './TechnologyBanner.module.scss';
import img1 from "../../../assets/Technologies/banner.png"

function TechnologyBanner({data}) {
  return (
    <div className={style.banner}>
        <div className={style.banner__left}>
        <div>
          <p>{data.Banner.TitleTag}</p>
          <h1>
            <div>{data.Banner.Title1}</div>
            <div> {data.Banner.Title2}</div>
            <div>{data.Banner.Title3}</div>
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