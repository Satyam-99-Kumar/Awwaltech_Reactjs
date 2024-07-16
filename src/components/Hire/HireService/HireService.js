import React from 'react';
import styles from './HireService.module.scss';

function HireService({ data }) {


  return (
    <section className={styles.programSec}>
    <div className={styles.container}>
      <article>
        <h2 className={styles.textCenter}>
          When Your Programmer Falls Short, We Rise to the Challenge!
        </h2>
        <p>
          Leave Your Concerns Behind! Andolasoft is Your Digital Solution Partner. We Recognize the Obstacles You Encounter:
        </p>
      </article>
      <aside className={`${styles.fl} ${styles.oneThird}`}>
        <figure>
          <img
            src="https://www.andolasoft.com/images/approach/program1.png"
            alt="Abandoned Project"
            title="Abandoned Project"
            className="lazyload"
            width="102"
            height="86"
          />
        </figure>
        <p>Your programmer abandoned you leaving you stranded</p>
      </aside>
      <aside className={`${styles.fl} ${styles.oneThird}`}>
        <figure>
          <img
            src="https://www.andolasoft.com/images/approach/program2.png"
            alt="Short Term Projects"
            title="Short Term Projects"
            className="lazyload"
            width="102"
            height="86"
          />
        </figure>
        <p>Your investment exceeded more that your budget</p>
      </aside>
      <aside className={`${styles.fl} ${styles.oneThird}`}>
        <figure>
          <img
            src="https://www.andolasoft.com/images/approach/program3.png"
            alt="Resource Management Hassles"
            title="Resource Management Hassles"
            className="lazyload"
            width="102"
            height="86"
          />
        </figure>
        <p>Burdened with resource management</p>
      </aside>
      <div className={styles.cb}></div>
      <aside className={`${styles.fl} ${styles.oneThird}`}>
        <figure>
          <img
            src="https://www.andolasoft.com/images/approach/program4.png"
            alt="Lack of well-planned execution"
            title="Lack of well-planned execution"
            className="lazyload"
            width="102"
            height="86"
          />
        </figure>
        <p>There was no meeting, planning or schedules before project kickoff</p>
      </aside>
      <aside className={`${styles.fl} ${styles.oneThird}`}>
        <figure>
          <img
            src="https://www.andolasoft.com/images/approach/program5.png"
            alt="Communication Barriers"
            title="Communication Barriers"
            className="lazyload"
            width="102"
            height="86"
          />
        </figure>
        <p>Language barriers and inconvenient time zones</p>
      </aside>
      <aside className={`${styles.fl} ${styles.oneThird}`}>
        <figure>
          <img
            src="https://www.andolasoft.com/images/approach/program6.png"
            alt="Overriding project cost"
            title="Overriding project cost"
            className="lazyload"
            width="102"
            height="86"
          />
        </figure>
        <p>Delayed project delivery increases project costs</p>
      </aside>
      <div className={styles.cb}></div>
      <aside className={styles.width100}>
        <p>
          Unburden yourself from these hassles and shortcomings by hiring dedicated developers from Andolasoft
        </p>
      </aside>
    </div>
  </section>
  );
}

export default HireService;
