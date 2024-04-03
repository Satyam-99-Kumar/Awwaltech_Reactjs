import style from './BlogSingleBanner.module.scss'

function BlogSingleBanner() {
  return (
    <div className={style.banner}>
        <div className={style.head}>
            <h3>Sep 26, 2020 | Business</h3>
            <h1>
                <div>We create immersive experiences that </div>
                <div>bridge the gap between blueprint + reality.</div>
            </h1>
        </div>
    </div>
  )
}

export default BlogSingleBanner