import style from "./ITenterprizes.module.scss";
import img1 from "../../../assets/Services/IT-consulting/cycle-1.webp";
import img2 from "../../../assets/Services/IT-consulting/cycle-2.webp";
import img3 from "../../../assets/Services/IT-consulting/cycle-3.webp";
import img4 from "../../../assets/Services/IT-consulting/cycle-4.webp";
import img5 from "../../../assets/Services/IT-consulting/cycle-5.webp";

function ITenterprizes({ apiData }) {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2 className={style.heading}>FULL-CYCLE IT CONSULTING SERVICES</h2>
        <p className={style.description}>
          Leverage our technological knowledge and expertise in IT consulting
          complemented with data mining and analytics tools to get a solution
          that really makes a difference to your business.
        </p>
      </div>
      <div className={style.services}>
        <div className={style.serviceItem}>
          <img src={img1} alt="IT assessment" className={style.serviceImage} />
          <h3 className={style.serviceTitle}>IT assessment</h3>
          <p className={style.serviceDescription}>
            Taking into account your business goals, we assist you in selecting
            the IT solutions and technologies that will meet your needs as
            efficiently as possible. We’ll help you define the tech stack for
            every project stage, including pre-planning, design, development,
            and implementation.
          </p>
        </div>
        <div className={style.serviceItem}>
          <img
            src={img2}
            alt="Solutions & technology consulting"
            className={style.serviceImage}
          />
          <h3 className={style.serviceTitle}>
            Solutions & technology consulting
          </h3>
          <p className={style.serviceDescription}>
            To ensure the security and efficiency of your solutions, we assess
            your current infrastructure and consult on how to effectively modify
            and maintain your existing solutions or build new ones with a
            forward-looking perspective.
          </p>
        </div>
        <div className={style.serviceItem}>
          <img
            src={img3}
            alt="IT infrastructure consulting"
            className={style.serviceImage}
          />
          <h3 className={style.serviceTitle}>IT infrastructure consulting</h3>
          <p className={style.serviceDescription}>
            To ensure the security and efficiency of your solutions, we assess
            your current infrastructure and consult on how to effectively modify
            and maintain your existing solutions or build new ones with a
            forward-looking perspective.
          </p>
        </div>
        <div className={style.serviceItem}>
          <img
            src={img4}
            alt="Design consulting"
            className={style.serviceImage}
          />
          <h3 className={style.serviceTitle}>Design consulting</h3>
          <p className={style.serviceDescription}>
            Our UX team will help you ensure your software solution’s success
            through advising on UX methods and strategies to create experiences
            that reach your target users. The SAP AppHaus, which has been
            designed to conduct design thinking workshops and generate new ideas
            for our clients’ solutions, helps us add more value to them.
          </p>
        </div>
        <div className={style.serviceItem}>
          <img
            src={img5}
            alt="Mobile app release consulting"
            className={style.serviceImage}
          />
          <h3 className={style.serviceTitle}>Mobile app release consulting</h3>
          <p className={style.serviceDescription}>
            Our tech specialists help you download your mobile application to
            the App Store, Google Play to ensure all the processes work well.
            Our expert will carefully analyze it on compliance with the chosen
            platform’s requirements to ensure its successful, pain-free release.
          </p>
        </div>
      </div> 
    </div>
  );
}

export default ITenterprizes;
