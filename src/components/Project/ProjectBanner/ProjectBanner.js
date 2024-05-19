import style from "./ProjectBanner.module.scss";

function ProjectBanner() {
  return (
    <div className={style.banner}>
        <div className={style.head}>
            <h5>Mobile App Development</h5>
            <h3>Video-Sharing App with Social Editing</h3>
            <h1>
                <div>A new multi-faceted short-form video</div>
                <div>sharing app to share your madness!</div>
            </h1>
        </div>
    </div>
  )
}

export default ProjectBanner