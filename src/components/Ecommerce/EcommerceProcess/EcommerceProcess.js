import React from 'react';
import styles from './EcommerceProcess.module.scss';

const EcommerceProcess = () => {
  const steps = [
    {
      title: 'Research & Consultation',
      description:
        "First, our experts will research and analyze your initial requirements. Then there will be an extensive consultation where we'll discuss every little detail regarding the requirements, process, cost, and delivery timeline.",
      imgSrc: 'https://api.brainspate.com/wp-content/uploads/2023/05/Group-7820.svg',
      imgAlt: 'Purple Right Mark',
      bgClass: styles.bgPurple,
    },
    {
      title: 'Front-end Development',
      description:
        "Once we've finalized your design and feature specifications, our front-end team will craft tailored, visually appealing elements for your website, ensuring they meet your requirements and enhance user experience.",
      imgSrc: 'https://api.brainspate.com/wp-content/uploads/2023/05/Group-7821.svg',
      imgAlt: 'Blue Right Mark',
      bgClass: styles.bgBlue,
    },
    {
      title: 'Back-end Development',
      description:
        'Then, after the front end is done, our backend development expertise will start working on the server-side components of your website. That also stands for developing and integrating the backend for the front-end components.',
      imgSrc: 'https://api.brainspate.com/wp-content/uploads/2023/05/Group-7822.svg',
      imgAlt: 'Green Right Mark',
      bgClass: styles.bgGreen,
    },
    {
      title: 'QA & Testing',
      description:
        'After the development process is over, the QA & testing team will analyze the design and features of your website to check its quality, reliability, and functionality. Any errors will be worked on by the development team.',
      imgSrc: 'https://api.brainspate.com/wp-content/uploads/2023/05/Group-7823.svg',
      imgAlt: 'Red Right Mark',
      bgClass: styles.bgOrange,
    },
  ];

  return (
    <div className={styles.ecommerceProcess}>
      <div className={styles.container}>
        <div className={`${styles.mainTitle} ${styles.pb50}`}>
          <h2>eCommerce Website Development Process</h2>
          <div className={styles.subTitle}>
            We ensures a transparent eCommerce website design and development process by maintaining regular communication with clients. Our team of technical and non-technical experts makes sure that all stakeholders are well-informed throughout the project.
          </div>
        </div>
        <div className={`${styles.processMain} d-flex flex-wrap`}>
          <div className={`${styles.processLeft} w-50`}>
            {steps.map((step, index) => (
              <div key={index} className={`${styles.processContent} d-flex flex-wrap`}>
                <div className={styles.processIcons}>
                  <figure className={step.bgClass}>
                    <img
                      alt={step.imgAlt}
                      loading="lazy"
                      width="60"
                      height="60"
                      decoding="async"
                      src={step.imgSrc}
                      style={{ color: 'transparent' }}
                    />
                  </figure>
                </div>
                <div className={styles.processTitle}>
                  <h3>{step.title}</h3>
                  <div className={styles.description}>{step.description}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={`${styles.processRight} w-50`}>
            <div className={styles.processRightImage} style={{ textAlign: 'right' }}>
              <img
                alt="process"
                loading="lazy"
                width="450"
                height="578"
                decoding="async"
                className="w-100"
                src="https://api.brainspate.com/wp-content/uploads/2023/05/Group-7871.svg"
                style={{ color: 'transparent', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceProcess;
