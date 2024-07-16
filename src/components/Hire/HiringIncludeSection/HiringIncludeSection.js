import React from 'react';
import styles from './HiringIncludeSection.module.scss';

const benefits = [
  {
    title: 'Dedicated Developer',
    imgSrc: 'https://www.andolasoft.com/images/approach/hiring1.png',
    description: 'Hire dedicated developers who work full-time and dedicate 160 hours a month on your project.',
  },
  {
    title: 'Technical Lead',
    imgSrc: 'https://www.andolasoft.com/images/approach/hiring2.png',
    description: 'Our technology expert engages on your project to bring your visions to life.',
  },
  {
    title: 'UI Designing',
    imgSrc: 'https://www.andolasoft.com/images/approach/hiring3.png',
    description: 'Our UI designer works diligently on your project and dedicates 24 hours.',
  },
  {
    title: 'Project Management Tool',
    imgSrc: 'https://www.andolasoft.com/images/approach/hiring4.png',
    description: 'Collaborate with team members on Orangescrum with free access to all its capabilities.',
  },
];

const HiringIncludeSection = () => {
  return (
    <section className={styles.hiringIncludeSec}>
      <div className={styles.container}>
        <h2>What is Included When You Hire Our Dedicated Developer</h2>
        <p>Additional services you get when you hire our dedicated developer</p>
        <article>
          {benefits.map((benefit, index) => (
            <aside key={index} className={`${styles.cmnWidth} ${styles.fl}`}>
              <section className={index % 2 === 0 ? styles.lt : styles.rt}>
                <figure>
                  <img
                    src={benefit.imgSrc}
                    alt={benefit.title}
                    title={benefit.title}
                    className="lazyload"
                    width="198"
                    height="198"
                  />
                </figure>
                <main>{benefit.title}</main>
                <p>{benefit.description}</p>
              </section>
            </aside>
          ))}
          <aside className={styles.cb}></aside>
        </article>
        <aside className={`${styles.width100} ${styles.textCenter}`}>
          <a className={`${styles.btnCmnEffect} ${styles.cmnBlueBtnBg} ${styles.formBtmLink}`} title="Lets Talk" href="javascript:void(0)">
            Let's Talk
          </a>
          <small>Learn more about our ‘Dedicated Developers’ package</small>
        </aside>
      </div>
    </section>
  );
};

export default HiringIncludeSection;
