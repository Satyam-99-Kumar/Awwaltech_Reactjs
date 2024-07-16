import React from 'react';
import style from "./Testing.module.scss";
import icon1 from "../../../assets/QA/icon-time.svg";
import icon2 from "../../../assets/QA/icon-lock-unlocked.svg";
import icon3 from "../../../assets/QA/icon-zoom-off.svg";
import icon4 from "../../../assets/QA/icon-cross.svg";
import icon5 from "../../../assets/QA/icon-clients.svg";
const Testing = () => {
  const reasons = [
    {
      icon: icon1, 
      title: "Increased money and time spent on developing product",
      description: "Testing minimizes the risk of additional upgrades and fixes, as software testers identify bugs and errors before any such problems can arise.",
    },
    {
      icon: icon2, 
      title: "Risk of security breaches",
      description: "Nowadays, 1 out of 100 people worldwide suffers account breaches. That’s why people look for well-tested and reliable products; testing can ensure developing solutions free from vulnerability.",
    },
    {
      icon: icon3, 
      title: "Unstable performance and undetected errors",
      description: "Despite the developer's experience, there is always a possibility of glitches and bugs in untested software. Testing helps fix errors before the product goes into the client's hands.",
    },
    {
        icon: icon4, 
        title: "Decreased customer satisfaction",
        description: "If the software doesn't satisfy a customer’s needs, it is useless. Testing can ensure a flawless user experience.",
      },
      {
        icon: icon5, 
        title: "Reputational damage",
        description: "Numerous performance issues, security breaches, and failure to meet customer needs result in increasing costs for solution development and enhancement. Moreover, these aspects can cause irreparable damage to a company's reputation. Testing helps businesses avoid these issues.",
      },
  ];

  return (
    <div className={style.whyTesting}>
      <h2 className={style.title}>WHY DO YOUR SOFTWARE AND APPS NEED TESTING?</h2>
      <p className={style.subtitle}>Neglecting quality assurance activities might result in the <br/> following:</p>
      <div className={style.reasons}>
        {reasons.map((reason, index) => (
          <div key={index} className={style.reason}>
            <div className={style.icon}>
              <img src={reason.icon} alt="icon" />
            </div>
            <h3 className={style.reasonTitle}>{reason.title}</h3>
            <p className={style.reasonDescription}>{reason.description}</p>
          </div>
        ))}
        <div className={style.reason} style={{backgroundColor: "blue", textAlign: "center"}}>
            <h1 className={style.reasonTitle} style={{color: "white", fontSize: "2rem", marginBottom:"2rem"}}>NEED HELP IN IDENTIFYING THE OPTIMAL SET?</h1>
            <button className={style.reasonDescription} style={{ padding: "10px", border: "none", borderRadius:"5px"}}>CONTACT US</button>
          </div>
      </div>
    </div>
  );
};

export default Testing;
