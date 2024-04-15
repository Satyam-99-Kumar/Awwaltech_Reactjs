import style from "./CareerDetailsDesc.module.scss";


function CareerDetailsDesc() {
  return (
    <>
         
      <div className={style.desc}>
        <h4>Job Description</h4>
        <p>
          Looking for a Java Developer with 3-5 years of experience in Java
          (Spring) to handle the following responsibilities
        </p>
        <ul>
          <li>
            Min 3 years of hands-on development experience in Java Server-side
            programming
          </li>
          <li>
            Strong expertise with Java Design patterns and advanced data
            structures/algorithms
          </li>
          <li>
            Strong experience in developing with Spring MVC framework, Spring
            Core, and Spring{" "}
          </li>
          <li>Good knowledge of Spring Security</li>
          <li>Excellent practical object-oriented software design skills</li>
          <li>
            Good experience developing effective APIs and RESTful Web services
            and Java Microservices for internal and external consumption
          </li>
          <li>Proficient in MySQL and complex relational database design.</li>
          <li>
            Preferred to Have: Familiarity with Web 2.0 technologies:
            JavaScript, HTML5, CSS, AngularJS, and AJAX
          </li>
        </ul>
      </div>
      <div className={style.line}></div>
      <div className={style.experience}>
        <h4>Experience</h4>
        <p>3-5 years of experience in Java (Spring)</p>
      </div>

      <div className={style.line}></div>

      <div className={style.candidate}>
        <h4>Desired Candidate Profile</h4>
        <p>Education</p>
        <ul>
          <li>
            UG: B.Tech/B.E. - Computers, B.Sc - Computers, BCA - Computers
          </li>
          <li>
            PG: Any Postgraduate, Post Graduation Not Required, M.Tech -
            Computers, MBA/PGDM
          </li>
          <li>
            Systems, Information Technology, MCA - Computers, M.Sc - Computers
          </li>
        </ul>
      </div>
    </>
  );
}

export default CareerDetailsDesc;
