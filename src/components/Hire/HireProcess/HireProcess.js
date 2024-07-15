import React from 'react';
import styles from './HireProcess.module.scss';

const steps = [
  {
    number: '01',
    title: 'We hear your requirements',
    imgSrc: 'https://www.andolasoft.com/images/approach/requirement-analysis.png',
    imgAlt: 'Requirement Analysis',
    description: 'We listen to your requirements then suggest the best solution.'
  },
  {
    number: '02',
    title: 'We pick the right developer',
    imgSrc: 'https://www.andolasoft.com/images/approach/individual-team.png',
    imgAlt: 'Individual or Team',
    description: 'We evaluate your needs to pick the right resource for the project.'
  },
  {
    number: '03',
    title: 'We plan the project goals',
    imgSrc: 'https://www.andolasoft.com/images/approach/pre-work.png',
    imgAlt: 'Pre-work Finalization',
    description: 'We plan the project goals, timeframe, schedules, tasks and deliverables.'
  },
  {
    number: '04',
    title: 'We seal the deal',
    imgSrc: 'https://www.andolasoft.com/images/approach/contract-signup.png',
    imgAlt: 'Contract Signup',
    description: 'We decide on the cost of hiring and sign the NDA agreement.'
  },
  {
    number: '05',
    title: 'Project liftoff',
    imgSrc: 'https://www.andolasoft.com/images/approach/project-begins.png',
    imgAlt: 'Project Begins',
    description: 'We engage our developer keeping you in the loop in Orangescrum.'
  }
];

const HireProcess = () => {
  return (
    <section className={styles.hiringProcSec} id="hiring_process">
      <div className={styles.container}>
        <h2>How to Hire a Dedicated Developer From Andolasoft?</h2>
        <article>
          {steps.map((step, index) => (
            <aside key={index} className={`${styles.cmnWidth} ${styles.fl}`}>
              <span>{step.number}</span>
              <main>{step.title}</main>
              <figure>
                <img src={step.imgSrc} alt={step.imgAlt} title={step.imgAlt} className="lazyload" width="177" height="177" />
              </figure>
              <p>{step.description}</p>
            </aside>
          ))}
          <aside className={styles.cb}></aside>
        </article>
        <aside className={`${styles.width100} ${styles.textCenter}`}>
          <a className={`${styles.btnCmnEffect} ${styles.cmnBlueBtnBg} ${styles.formBtmLink} ${styles.whiteBtn}`} title="Talk To Us" href="javascript:void(0)">
            Talk To Us
          </a>
          <small>If you need more clarity on the hiring process?</small>
        </aside>
      </div>
    </section>
  );
};

export default HireProcess;
