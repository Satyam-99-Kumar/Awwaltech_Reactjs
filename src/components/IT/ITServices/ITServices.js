import style from "./ITServices.module.scss";

function ITServices() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.heading}>
          HOW YOU BENEFIT FROM IT CONSULTING SERVICES
        </h2>
        <p className={style.description}>
          Any business development strategy includes technological solutions.
          That’s why the demand for IT consulting services has grown, bringing
          value with:
        </p>
        <div className={style.twoColumn}>
          <ul className={style.listItem}>
            <li>
              <p className={style.colPoint}>Access to industry professionals</p>

              <p>
                If you work with an IT consulting company, you gain access to a
                team of professionals who assist you in every aspect of solution
                implementation, development, and maintenance.
              </p>
            </li>
            <li>
              <p className={style.colPoint}>Risk reduction</p>

              <p>
                We ensure a high level of security for your IT solutions by
                monitoring and backups to prevent attacks before they may
                happen.
              </p>
            </li>
          </ul>
          <ul className={style.listItem}>
            <li>
              <p className={style.colPoint}>Cost reduction</p>

              <p>
                By hiring an IT consulting team from a service provider, you
                don’t need to overpay for full-time staff but still ensure your
                system’s great performance with the aid of professionals.
              </p>
            </li>
            <li>
              <p className={style.colPoint}>Objective analysis</p>

              <p>
                External IT consultants can audit your application to provide an
                objective point of view on how your solution operates and give
                recommendations on what actions to take to improve it.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.imageWrapper}></div>
    </div>
  );
}

export default ITServices;
