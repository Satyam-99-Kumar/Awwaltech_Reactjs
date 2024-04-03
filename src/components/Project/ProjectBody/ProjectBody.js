import style from "./ProjectBody.module.scss";
// images
import img2 from "../../../assets/Portfolio/Single/2.png";
import img3 from "../../../assets/Portfolio/Single/3.png";
import img4 from "../../../assets/Portfolio/Single/4.png";
import img5 from "../../../assets/Portfolio/Single/5.png";
// components
import ProjectFeature from "../ProjectFeature/ProjectFeature";
import ProjectTechnologies from "../ProjectTechnologies/ProjectTechnologies";
import ProjectIntegration from "../ProjectIntegration/ProjectIntegration";
import ProjectTakeaway from "../ProjectTakeaway/ProjectTakeaway";
import ProjectSlide from "../ProjectSlide/ProjectSlide";

function ProjectBody() {
  return (
    <div className={style.projectBody}>
      {/* =============================== text block =============================== */}
      <div className={style.textBlock}>
        <div className={style.textBlock__text}>
          <h4>Introduction</h4>
          <p className={style.txt}>
            Being a rising name in the IT industry across the world, we deliver
            quality services in a timely fashion to help our clients gain a
            leading edge in this competitive market.Being a rising name in the
            IT industry across the world, we deliver quality services in a
            timely fashion to help our clients gain a leading edge in this
            competitive market.Being a rising name in the IT industry across the
            world, we deliver quality services in a timely fashion to help our
            clients gain a leading edge in this competitive market. timely
            fashion to help our clients gain a leading edge in this competitive
            market.Being a rising name in the IT industry across the world, we
            deliver quality services in a timely fashion to help our clients
            gain a leading edge in this competitive market.
          </p>
        </div>
        <div className={style.textBlock__image}>
          <img src={img2} alt="" />
        </div>
      </div>

      {/* =============================== image block =============================== */}
      <div className={style.imageBlock}>
        <img src={img3} alt="" />
      </div>

      {/* =============================== text block =============================== */}
      <div className={style.textBlock}>
        <div className={style.textBlock__image}>
          <img src={img4} alt="" />
        </div>
        <div className={style.textBlock__text}>
          <h4>
            <div>Creation of entertaining videos, with</div>
            <div>advanced multiple social-editing features</div>
          </h4>
          <p className={style.txt}>
            In the present era, social video-sharing apps are in high demand.
            Our development team had made enough research and analysis on the
            video-sharing app market demand and built a unique app with advanced
            social editing features. Here, the users can get multiple filters
            like AR filters and effects, an extended timeframe which is up to 60
            seconds, and a dynamic music library with 5k songs to set a piece of
            background music covering the video. Also, users are accessible to
            produce a series for each other’s edited-content and publish it on
            their account. A replica of the video can post with multiple users
            and with edits and can viral a thread. Users can identify
            multi-edited videos. They need to observe Also, users are accessible
            to produce a series for each other’s edited-content and publish it
            on their account. A replica of the video can post with multiple
            users and with edits and can viral a thread. Users can identify
            multi-edited videos. They need to observe
          </p>
          <p className={style.txt}>
            Also, users are accessible to produce a series for each other’s
            edited-content and publish it on their account. A replica of the
            video can post with multiple users and with edits and can viral a
            thread. Users can identify multi-edited videos. They need to observe
            a thumbnail image stacked in the bottom right corner of the main
            video. Also, users are accessible to produce a series for each
            other’s edited-content and publish it on their account. A replica of
            the video can post with multiple users and with edits and can viral
            a thread.
          </p>
        </div>
      </div>

      {/* =============================== text block =============================== */}
      <ProjectFeature />

      {/* =============================== image block =============================== */}
      <div className={style.imageBlock}>
        <img src={img5} alt="" />
      </div>

      {/* =============================== text block =============================== */}
      <ProjectTechnologies />

      {/* =============================== text block =============================== */}
      <ProjectIntegration />
      
      {/* =============================== text block =============================== */}
      <ProjectTakeaway />

      {/* =============================== slide block =============================== */}
      <ProjectSlide />
    </div>
  );
}

export default ProjectBody;
