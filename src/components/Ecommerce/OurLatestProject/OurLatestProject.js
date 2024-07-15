import React from 'react';
import styles from './OurLatestProject.module.scss';

const OurLatestProject = () => {
  const projects = [
    {
      imgSrc: 'https://api.brainspate.com/wp-content/uploads/2023/07/dinkela-featured-image.png',
      imgAlt: 'dinkela featured image',
      logoSrc: 'https://api.brainspate.com/wp-content/uploads/2023/07/dinkela-logo-.png',
      logoAlt: 'dinkela logo',
      title: 'Dinkela',
      description: 'Dinkela provides Individual prints and lasers on old and new wood. Contour cuts and object construction made of wood for corporate and private customers.',
      link: '/portfolio/dinkela/'
    },
    {
      imgSrc: 'https://api.brainspate.com/wp-content/uploads/2023/07/i-love-to-teach-101-feature-image.webp',
      imgAlt: 'i-love-to-teach-101-feature image',
      logoSrc: 'https://api.brainspate.com/wp-content/uploads/2023/07/i-love-to-teach-101-logo.webp',
      logoAlt: 'i-love-to-teach-101-logo',
      title: 'I Love To Teach 101',
      description: 'I Love To Teach 101 is a resource site for teachers who want tactics to maintain organised classrooms, practical strategies to teach creative thinking, and techniques to save time.',
      link: '/portfolio/i-love-to-teach-101/'
    }
  ];

  return (
    <div className={styles.ourLatestWork}>
      <div className={styles.container}>
        <div className={`${styles.mainTitle} ${styles.dFlex} ${styles.flexWrap} ${styles.alignItemsCenter} ${styles.justifySpaceBetween} ${styles.pb38}`}>
          <div className={`${styles.titleLeft} ${styles.w80}`}>
            <h2>Our Latest eCommerce Development Work</h2>
            <div className={styles.subTitle}>
              Our skilled eCommerce developers build excellent online stores for any company size or industry. With user-friendly platforms, we ensure your store is unique and provides smooth shopping experience for your customers.
            </div>
          </div>
          <div className={styles.titleRight}>
            <div className={styles.fillbtn}>
              <a className={styles.fill} href="/portfolio/">View All</a>
            </div>
          </div>
        </div>
        <div className={styles.ourLatestPost}>
          {projects.map((project, index) => (
            <div className={styles.ourLatestWrap} key={index}>
              <div className={`${styles.inner} ${styles.dFlex} ${styles.flexWrap} ${styles.alignItemsCenter}`}>
                <div className={`${styles.ourLatestLeft} ${styles.w50}`}>
                  <figure>
                    <img
                      alt={project.imgAlt}
                      loading="lazy"
                    
                      className={styles.w100}
                      src={project.imgSrc}
                    />
                  </figure>
                </div>
                <div className={`${styles.ourLatestRight} ${styles.w50}`}>
                  <figure>
                    <img
                      alt={project.logoAlt}
                      loading="lazy"
                    
                      src={project.logoSrc}
                    />
                  </figure>
                  <h3>{project.title}</h3>
                  <div className={styles.description}>
                    <p>{project.description}</p>
                  </div>
                  <div className={styles.readMore}>
                    <a href={project.link}>View More Details</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a className={styles.fill} href="/portfolio/">View All</a>
      </div>
    </div>
  );
};

export default OurLatestProject;
