import style from "./ServiceServices.module.scss";
import { FiMonitor } from "react-icons/fi";
import { BsCodeSquare, BsHexagon, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function ServiceServices() {
  return (
    <div className={style.solve}>
      {/* ///////////////////////////////////// */}
      {/* short desc */}
      {/* ///////////////////////////////////// */}
      <div className={style.solve__identity}>
        <div className={style.head}>
          <p>Mobile App Development Solutions</p>
          <h2>
            <div>Android, iOS & Flutter App</div>
            <div>Development</div>
            <div className={style.headMobile}>
              Android, iOS & Flutter App Development
            </div>
          </h2>
        </div>
        <div className={style.text}>
          <p>
            Being a rising name in the IT industry across the world, we deliver
            quality services in a timely fashion to help our clients gain a
            leading edge in this competitive market.
          </p>
          <p>
            We are your one-stop solution provider for Android, iOS & Flutter
            Mobile App development services. Leading Startups and Companies
            hiring Android, iOS and Flutter App developers from Zignuts
            Technolab to successfully drive and achieve their critical mobile
            app development projects. As a leading Indian mobile app development
            company with skiiled team of app developers in India, we help
            building custom mobile apps that have most interactive and modern
            interfaces.
          </p>
        </div>
      </div>

      {/* ///////////////////////////////////// */}
      {/* solutions */}
      {/* ///////////////////////////////////// */}
      <div className={style.solve__solutions}>
        <div className={style.text}>
          <h1>
            <div>Android, IOS & Flutter Mobile App</div>
            <div>
              Development <span>Services</span>
            </div>
          </h1>
          <p>
            Custom mobile app development company with expert team of remote and
            dedicated app developers in India
          </p>
        </div>

        <div className={style.solutionWrapper}>
          <div className={style.solutions}>
            <div className={style.solution}>
              <div className={style.logo}>
                <FiMonitor />
              </div>
              <h4>
                <div>Web</div>
                <div>Development</div>
              </h4>
              <p>
                Zignuts Technolab offers its iOS app development services in
                designing and developing custom mobile apps for iPhone & iPad.
                Hire iOS app developers who have skills and expertise in
                everything ranging from iOS App development, app design, app
                support and maintenance. While you can focus on your business,
                our native iOS app development team combine in-depth research,
                outstanding design, and impeccable development to create an
                exceptional iOS application that fits your needs.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceServices;
