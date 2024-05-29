import style from "./ProjectFeature.module.scss";

function ProjectFeature() {
  return (
    <div className={style.feature}>
      <div className={style.feature__text}>
        <p>Driving Enterprise</p>
        <h1>Key features</h1>
        <p>
          From ideation and conceptualization to application development,
          ready-to-deploy assets, marketing and support, Codiant delights
          clients of all sizes through agile deliveries and simplified
          solutions.
        </p>
      </div>

      <div className={style.feature__blocks}>
        <div className={style.block}>
          <div className={style.item}>
            <h4>1. Quick Search Filter</h4>
            <p>
              Users can experience unique search filters on the short video
              media app. It gives you videos, users, audios, and hashtags as a
              result. You have a choice to pick one from these navigation icons,
              and you will redirect to the number of screens like watch videos,
              users' profile, audio player, and related hashtag videos.
            </p>
          </div>
          <div className={style.item}>
            <h4>2. Watch Video interference-free </h4>
            <p>
              The individual video feed where you can see re-edit videos, can
              share the same, do comment and report. The short video media app
              offers private and funny videos to watch without any delays. The
              app has a collection of all kinds of entertainment accumulation.
              There are flavours of genres videos like, DIY, food, sports, memes
              and much more.
            </p>
          </div>
          <div className={style.item}>
            <h4>3. Converse with other users</h4>
            <p>
              The short video media app allows you to communicate with new
              people who have the same interest as yours. You can search for
              people by hashtags and names. You can connect with them and make a
              conversation using in-app messaging features. No other short video
              platform allows connecting and interacting with other users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectFeature;
