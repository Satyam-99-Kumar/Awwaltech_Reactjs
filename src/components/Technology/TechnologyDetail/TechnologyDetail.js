import style from "./TechnologyDetail.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function TechnologyDetail({ apiData }) {
  const [imagePaths, setImagePaths] = useState([]);
  useEffect(() => {
    // Define image paths
    const imgPaths = [
      require("../../../assets/Technologies/enterprize.png"),
      require("../../../assets/Technologies/netqorks.png"),
      require("../../../assets/Technologies/Startup.png")
    ];
    setImagePaths(imgPaths);
  }, []);
  return (
    <>
      <div className={style.detail}>
        <div className={style.head}>
          <p>{apiData.WhatWeCanOfferSection.Title1}</p>
          <h2>
            <div>{apiData.WhatWeCanOfferSection.Title2}</div>
          </h2>
        </div>
        <div className={style.text}>
          <p>{apiData.WhatWeCanOfferSection.Paragraph1}</p>
          <p>{apiData.WhatWeCanOfferSection.Paragraph2}</p>
         
        </div>
      </div>

      {/* /////////////////////////////////////// */}
      {/* /////////////////////////////////////// */}
      <div className={style.solutions}>
        {apiData.WhatWeCanOfferSection.Offer.map((item,index) => {
          return (
            <div className={style.solution}>
              <div className={style.logo}>
                <img src={imagePaths[index]}alt="Enterprises" />
              </div>
              <h4>{item.OfferName}</h4>
              <p>{item.Paragraph} </p>
              <Link to="/">
                Explore <span>More</span>{" "}
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
          )
        })}

        {/* <div className={style.solution}>
          <div className={style.logo}>
            <img src={img2} alt="Tech Companies" />
          </div>
          <h4>Tech Companies</h4>
          <p>
            The development of high-tech solutions requires highly qualified
            specialists with the necessary niche work experience. Sometimes tech
            companies are facing with a lack of experts on location. Our team is
            ready to scale your IT department and bring innovations, relying on
            the most relevant technologies.
          </p>
          <Link to="/">
            Explore <span>More</span>{" "}
            <span>
              <BsArrowRight />
            </span>
          </Link>
        </div>

        <div className={style.solution}>
          <div className={style.logo}>
            <img src={img1} alt="startups" />
          </div>
          <h4>Startups</h4>
          <p>
            Startup companies may face many challenges during early development.
            A wide range of technologies can help them with a fast start and a
            successful market entry. Besides, the use of cross-platform
            technologies can significantly reduce the MVP release time.
          </p>
          <Link to="/">
            Explore <span>More</span>{" "}
            <span>
              <BsArrowRight />
            </span>
          </Link>
        </div> */}
      </div>
    </>
  );
}

export default TechnologyDetail;
