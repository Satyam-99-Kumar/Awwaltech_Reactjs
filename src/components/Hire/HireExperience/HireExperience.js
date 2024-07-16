import { Link } from "react-router-dom";
import img1 from "../../../assets/Hire/experience.png";
import styles from "./HireExperience.module.scss";



function HireExperience({data}) {
  return (
    <section className={styles.benefitsSec}>
    <div className={styles.container}>
      <aside className={`${styles.fr} ${styles.width50} ${styles.rtCnt}`}>
        <figure>
          <img
            src="https://www.andolasoft.com/images/approach/monitor2.png"
            alt="Healthcare website by Andolasoft dedicated developers"
            title="Healthcare website by Andolasoft dedicated developers"
            className="lazyload"
            width="600"
            height="363"
          />
        </figure>
        <p>
          Wellness By All Means: A healthcare website built on WordPress by a team of 'dedicated developers' from <strong>Andolasoft</strong>.<br />
          <a href="https://www.andolasoft.com/portfolio/wellness/" title="View more details">
            View more details →
          </a>
        </p>
      </aside>
      <aside className={`${styles.fl} ${styles.width50} ${styles.lftCnt}`}>
        <h2>Benefits of Hiring Dedicated Developers</h2>
        <ul>
          <li>Pay for one developer who has skills to manage multiple aspects of project development.</li>
          <li>Save 60% of development cost compared to hiring local resources.</li>
          <li>Our dedicated developers work in your time-zone for seamless collaboration.</li>
          <li>Connect to developers on multiple communication channels such as Skype, Phone, Email, WebEx and Go-To-Meetings.</li>
          <li>Plan your project tasks with regular scrum meetings and updates on task progress.</li>
          <li>
            Collaborate with developers on world-class project collaboration tool -{' '}
            <a href="http://www.orangescrum.com" target="_blank" title="OrangeScrum">
              OrangeScrum
            </a>
          </li>
        </ul>
      </aside>
      <div className={styles.cb}></div>
      <aside className={`${styles.width100} ${styles.textCenter}`}>
        <a className={`${styles.btnCmnEffect} ${styles.cmnBlueBtnBg} ${styles.whiteBtn} ${styles.formBtmLink}`} title="Get in touch" href="javascript:void(0)">
          Get in Touch
        </a>
        <small className={styles.talk}>And we'd love to tell you a bunch of other benefits of working with us.</small>
      </aside>
    </div>
  </section>
  );
}

export default HireExperience;
