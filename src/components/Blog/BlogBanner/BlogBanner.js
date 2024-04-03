import style from "./BlogBanner.module.scss";
import img1 from "../../../assets/Blog/frame.png";

function BlogBanner() {
  return (
    <div className={style.banner}>
      <div className={style.banner__left}>
        <div>
          <p>Blog</p>
          <h1 className={style.desktopViewHeading}>
            <div>See how Minttask helps</div>
            <div>teams achieve their goals</div>
          </h1>
          <h1 className={style.mobileViewHeading}>
            See how Minttask helps teams achieve their goals
          </h1>
        </div>
      </div>

      <div className={style.banner__right}>
        <img src={img1} alt="" className={style.frame} />
      </div>
    </div>
  );
}

export default BlogBanner;
