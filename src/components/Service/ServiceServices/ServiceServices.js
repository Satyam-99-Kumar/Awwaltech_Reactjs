import style from "./ServiceServices.module.scss";
import { FiMonitor } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function ServiceServices(data) {
  return (
    <div className={style.solve}>
      {/* ///////////////////////////////////// */}
      {/* short desc */}
      {/* ///////////////////////////////////// */}
      <div className={style.solve__new}>
        <div className={style.solve__identity}>
          <div className={style.head}>
            <p>{data.apiData.MobileAppSolutionSection.Title1}</p>
            <h2>
              <div>{data.apiData.MobileAppSolutionSection.Title2}</div>
              <div>{data.apiData.MobileAppSolutionSection.Title3}</div>
              <div className={style.headMobile}>{data.apiData.MobileAppSolutionSection.Title2} {data.apiData.MobileAppSolutionSection.Title2} {data.apiData.MobileAppSolutionSection.Title3}</div>
            </h2>
          </div>
          <div className={style.text}>
            <p>{data.apiData.MobileAppSolutionSection.Paragraph1}</p>
            <p>{data.apiData.MobileAppSolutionSection.Paragraph2}</p>
          </div>
        </div>
      </div>


      {/* ///////////////////////////////////// */}
      {/* solutions */}
      {/* ///////////////////////////////////// */}
      <div className={style.solve__solutions}>
        <div className={style.text}>
          <h1>
            <div>{data.apiData.MobileAppSolutionSection2.Title1}</div>
            <div>
              {data.apiData.MobileAppSolutionSection2.Title2} <span>{data.apiData.MobileAppSolutionSection2.Title3}</span>
            </div>
          </h1>
          <p>{data.apiData.MobileAppSolutionSection2.Paragraph} </p>
        </div>

        <div className={style.solutionWrapper}>
          <div className={style.solutions}>
            {data.apiData.MobileAppSolutionSection2.Services.map(item => {
              return (
                <div className={style.solution}>
                  <div className={style.logo}>
                    <FiMonitor />
                  </div>
                  <h4>
                    <div>{item.Title1}</div>
                    <div>{item.Title2}</div>
                  </h4>
                  <p>{item.Paragraph}</p>
                  <Link to="/">
                    Explore <span>More</span>{" "}
                    <span>
                      <BsArrowRight />
                    </span>
                  </Link>
                </div>
              )
            })}
            {/* <div className={style.solution}>
              <div className={style.logo}>
                <BsCodeSquare />
              </div>
              <h4>
                <div>Enterprise</div>
                <div>DevOps</div>
              </h4>
              <p>
                Don’t have to spend time building your own Android developers
                team, instead start working on your Android project right away
                with Zignuts Technolab to save time – a top rateted Android
                application development company. We offer custom, end-to-end,
                full-stack Android app development services. Our skilled and
                experts team specialises in customised and scalable applications
                for Android devices, including smartphones, tablets, Android
                TVs, and more. Book your risk-free trial of 2 weeks, retaining
                the rights to your code if you cancel the partnership.
              </p>
              <Link to="/">
                Explore <span>More</span>{" "}
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
            <div className={style.solution}>
              <div className={style.logo}>
                <BsHexagon />
              </div>
              <h4>
                <div>Strategic UX</div>
                <div>Development</div>
              </h4>
              <p>
                Flutter enables building and deploying apps for iOS and Android
                using a single code base. It reduces the app’s time-to-market
                and its development costs. Are you wondering how to choose the
                best Flutter app development company for your cross-platform
                project? Our team consists of top Flutter app developers, who
                can build your beautiful native app with Flutter in record time.
                Try us for 2 weeks, retaining the rights to your code if you
                cancel the partnership
              </p>
              <Link to="/">
                Explore <span>More</span>{" "}
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceServices;
