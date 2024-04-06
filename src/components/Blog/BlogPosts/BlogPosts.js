import style from "./BlogPosts.module.scss";
import { Link } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { CgArrowRight } from "react-icons/cg";
// import { data } from "./Data";

function BlogPosts({apiData}) {
  return (
    <div className={style.blogpost}>

      <div className={style.allposts}>
        {apiData.MediaSection.map((prjct) => (
          <div className={style.post}>
            <div className={style.image}>
              <img src={prjct.Banner} alt="" />
            </div>
            <div className={style.text}>
              <h4>{prjct.Name}</h4>
              <p>{prjct.Text}</p>
              <Link to="/blog/1">
                View more
                <span>
                  <CgArrowRight />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className={style.pagination}>
        <div>
          <BsChevronLeft />
        </div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>..</div>
        <div>9</div>
        <div>10</div>
        <div>
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
}

export default BlogPosts;
