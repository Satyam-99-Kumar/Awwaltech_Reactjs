import React from "react";
import styles from "./HireExcecutionProcess.module.scss";

function HireExcecutionProcess({data}) {
  return (
    <section className={styles.businessAppSec}>
      <div className={styles.container}>
        <article className={styles.busiArticleFirst}>
          <aside className={`${styles.fl} ${styles.width55}`}>
            <figure>
              <img
                src="https://www.andolasoft.com/images/approach/primp.png"
                alt="Web app from Andolasoft Dedicated Developer"
                title="Web app from Andolasoft Dedicated Developer"
                className="lazyload"
                width="660"
                height="399"
              />
            </figure>
            <p className={styles.articleP}>
              Pretty in My Pocket (PRIMP): A fashion eCommerce web app built using Ruby on Rails by one of our 'dedicated developers' from <strong>Andolasoft</strong>.<br />
              <a className={styles.articleLink} href="https://www.andolasoft.com/portfolio/pretty-in-my-pocket/" title="View more details">
                View more details →
              </a>
            </p>
          </aside>
          <aside className={`${styles.fr} ${styles.width40}`}>
            <h2>Dedicated Developer Who Work Like a Part of Your Own Team</h2>
            <p>Our dedicated developers work just for you</p>
          </aside>
          <aside className={styles.cb}></aside>
        </article>
        <article className={`${styles.busiArticleLast} ${styles.textCenter}`}>
          <aside className={`${styles.fl} ${styles.width40}`}>
            <figure>
              <img
                src="https://www.andolasoft.com/images/approach/team.png"
                alt="Team"
                title="Team"
                className="lazyload"
                width="126"
                height="114"
              />
            </figure>
            <main className={styles.main}>Team</main>
            <p>Hire full-stack development team who deliver projects on your schedule</p>
          </aside>
          <aside className={`${styles.fr} ${styles.width40}`}>
            <figure>
              <img
                src="https://www.andolasoft.com/images/approach/individual.png"
                alt="Individual"
                title="Individual"
                className="lazyload"
                width="126"
                height="114"
              />
            </figure>
            <main className={styles.main}>Individual</main>
            <p>Hire a dedicated developer who understands your unique business needs.</p>
          </aside>
          <aside className={styles.cb}></aside>
          <aside className={styles.width100}>
            <a className={`${styles.btnCmnEffect} ${styles.cmnBlueBtnBg} ${styles.formBtmLink}`} title="Get in touch" href="javascript:void(0)">
              Let's Talk
            </a>
            <small className={styles.talk}>Because, it's always better to be on the same page.</small>
          </aside>
        </article>
      </div>
    </section>
  );
}

export default HireExcecutionProcess;
