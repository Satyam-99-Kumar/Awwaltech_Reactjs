import style from "./BlogSingleBody.module.scss";
import img3 from "../../assets/Blog/Single/3.png";
import p1 from "../../assets/Portfolio/p1.png";
// components
import BlogSingleSlide from "./BlogSingleSlide/BlogSingleSlide";
import PortfolioTalk from "../Portfolio/PortfolioTalk/PortfolioTalk"

function BlogSingleBody() {
  return (
    <div className={style.blogBody}>
      {/* =================== TEXT =================== */}
      <div className={style.text}>
        <h4>Introduction</h4>
        <p className={style.txt}>
          Attending a trade show can be a very effective method of promoting
          your company and its products. And one of the most effective ways to
          optimize your trade show display and increase traffic to your booth is
          through the use of banner stands.
        </p>
        <p className={style.txt}>
          Last month, my wife, Anne Doe, took me to Las Vegas because she had to
          go for a business convention. Needless to say, she writes for an guide
          to casinos and I hate gambling. But then, she likes it and this
          supports us too, so I went along without any hassle. At first I was
          depressed, but then as I asked around and looked around, I ended up
          having more fun in Las Vegas than I would have thought. And no. I did
          not enter a single casino while I was there.
        </p>
      </div>

      {/* =================== IMAGE =================== */}
      <div className={`${style.imageBlock} ${style.imageBlock1}`}></div>

      {/* =================== TEXT =================== */}
      <div className={style.text}>
        <p className={style.txt}>
          Just like the blueprint of a building, a wireframe describes details
          clearly and specifically while giving the builders (you, other
          designers, developers, etc.) an overview of the project.
        </p>
        <p className={style.txt}>
          One of my favorite ways to see wireframes in action is to use the
          Wirify bookmarklet1. Wirify lets you turn any web page into a
          wireframe in one click, and it’s great for getting inspiration or
          guidance, especially when you’re just starting out. In addition to pen
          and paper, we like to use Super Freehand for sketching out prototypes.
          Freehand is like a lightweight, digital whiteboard where you and your
          team can collaborate and communicate. The wireframes you create in
          Freehand are only as permanent as you want them to be, and using
          Freehand saves you the tedious steps of scanning and uploading your
          hand-drawn wireframes.
        </p>
        <p className={style.txt}>
          Wireframes serve as a middle ground between pen-and-paper sketches and
          your first prototype. They help you plan the layout and interaction
          patterns of your users without distracting details like colors or
          copy. The proposed user journey should be clear without needing color
          or shading or fancy menus.
        </p>
      </div>

      {/* =================== DIVIDER =================== */}
      <div className={style.divider}>
        {/* <div className={style.div}> */}
          <div className={style.divider__image}>
            <img src={img3} alt="" />
          </div>
          <div className={style.divider__text}>
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
              produce a series for each other’s edited-content and publish it on</p>
            <p className={style.txt}>
              Also, users are accessible to produce a series for each other’s
              edited-content and publish it on their account. A replica of the
              video can post with multiple users and with edits and can viral a
              thread. Users can identify multi-edited videos. They need to observe
              a thumbnail image stacked in the bottom right corner of the main </p>
          </div>
        {/* </div> */}
      </div>
      {/* =================== IMAGE =================== */}
      <div className={`${style.imageBlock} ${style.imageBlock2}`}></div>

      {/* =================== TEXT =================== */}
      <div className={style.text}>
        <p className={style.txt}>
          Just like the blueprint of a building, a wireframe describes details
          clearly and specifically while giving the builders (you, other
          designers, developers, etc.) an overview of the project.
        </p>
        <p className={style.txt}>
          Wireframes serve as a middle ground between pen-and-paper sketches and
          your first prototype. They help you plan the layout and interaction
          patterns of your users without distracting details like colors or
          copy. The proposed user journey should be clear without needing color
          or shading or fancy menus.
        </p>
        <p className={style.txt}>
          One of my favorite ways to see wireframes in action is to use the
          Wirify bookmarklet1. Wirify lets you turn any web page into a
          wireframe in one click, and it’s great for getting inspiration or
          guidance, especially when you’re just starting out. In addition to pen
          and paper, we like to use Super Freehand for sketching out prototypes.
          Freehand is like a lightweight, digital whiteboard where you and your
          team can collaborate and communicate. The wireframes you create in
          Freehand are only as permanent as you want them to be, and using
          Freehand saves you the tedious steps of scanning and uploading your
          hand-drawn wireframes.
        </p>
      </div>



      {/* A BLOG */}
      <div className={style.aproject}>
        <div className={style.wrapper}>
          <div className={style.wrapper__left}>
            <img src={p1} alt="" />
          </div>
          <div className={style.wrapper__right}>
            <h3>Take away</h3>
            <div className={style.line}></div>
            <p className={style.text}>
              Being a rising name in the IT industry across the world, we
              deliver quality services in a timely fashion to help our clients
              gain a leading edge in this competitive market.Being a rising name
              in the IT industry across the world, we deliver quality services
              in a timely fashion to help our clients gain a leading edge in
              this competitive market.Being a rising name in the IT industry
              across the world, we deliver quality services in a timely fashion
              to help our clients gain a leading edge in this competitive
              market.
            </p>
          </div>
        </div>
      </div>

      <BlogSingleSlide />

      <PortfolioTalk />
    </div>
  );
}

export default BlogSingleBody;
