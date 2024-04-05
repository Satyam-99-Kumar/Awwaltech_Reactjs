// GlobalWorks.js
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';
import { fetchHomeData } from '../../../config/apiService'; // Import the API service function
import style from './GlobalWorks.module.scss';

function GlobalWorks({ background }) {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHomeData();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={style.works} style={{ background }}>
      <div className={style.works__text}>
        <h1>{apiData?.result?.[0]?.RecentWorkSection?.Title1}</h1>
        <p>{apiData?.result?.[0]?.RecentWorkSection?.Paragraph}</p>
      </div>

      <div className={style.slider}>
        <Slider className={style.allworks} {...settings}>
          {apiData?.result?.[0]?.RecentWorkSection?.Projects.map((project, index) => (
            <div key={index}>
              <img src={project.Image} alt={project.ProjectName} />
              <p>{project.ProjectName}</p>
              <p>{project.Paragraph}</p>
              <Link to={project.Link}>Explore More</Link>
            </div>
          ))}
        </Slider>
      </div>

      <Link className={style.global} to="/">
        View all projects <span><BsChevronRight /></span>
      </Link>
    </div>
  );
}

export default GlobalWorks;
