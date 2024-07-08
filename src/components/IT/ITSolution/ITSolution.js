import style from "./ITSolution.module.scss";
import img from "../../../assets/Services/IT-consulting/service.webp";

function ITSolution(apiData) {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.content}>
          <h2 className={style.heading}>SAP CONSULTING SERVICES</h2>
          <p className={style.description}>
            What SAP solution will drive digital transformation in our
            organization? How to{" "}
            <a href="#" className={style.link}>
              migrate to SAP S/4HANA
            </a>
            ? What migration model will work for your organization? How to
            choose an ERP system? These are just a few examples of what
            questions our customers refer to our consulting team.
          </p>
          <p className={style.description}>
            As part of our SAP consulting services, we assist in a wide range of
            SAP implementation activities, including analyzing our clients’
            current systems, building an adoption strategy, assessing your
            solution’s pros and cons, etc.
          </p>
        </div>
        <svg
          className={style.svg}
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="192"
          viewBox="0 0 256 192"
          fill="none"
        >
          <path d="M128 128L128 64L64 128L128 128Z" fill="#F1F4F9"></path>
          <path d="M192 128L192 64L128 128L192 128Z" fill="#F1F4F9"></path>
          <path d="M192 64L192 0L128 64L192 64Z" fill="#F1F4F9"></path>
          <path d="M256 128L256 64L192 128L256 128Z" fill="#F1F4F9"></path>
          <path d="M256 64L256 0L192 64L256 64Z" fill="#F1F4F9"></path>
          <path d="M64 160L64 128L32 160H64Z" fill="#F1F4F9"></path>
          <path d="M32 192L32 160L0 192H32Z" fill="#F1F4F9"></path>
          <path d="M64 192L64 160L32 192H64Z" fill="#F1F4F9"></path>
          <path d="M96 160L96 128L64 160H96Z" fill="#F1F4F9"></path>
          <path d="M128 160L128 128L96 160H128Z" fill="#F1F4F9"></path>
          <path d="M96 192L96 160L64 192H96Z" fill="#F1F4F9"></path>
          <path d="M128 192L128 160L96 192H128Z" fill="#F1F4F9"></path>
          <path d="M160 160V128L128 160H160Z" fill="#F1F4F9"></path>
          <path
            class="path"
            d="M192 160V128L160 160H192Z"
            fill="#22B44B"
          ></path>
          <path d="M160 192V160L128 192H160Z" fill="#F1F4F9"></path>
          <path d="M192 192V160L160 192H192Z" fill="#F1F4F9"></path>
          <path d="M224 160V128L192 160H224Z" fill="#F1F4F9"></path>
          <path d="M256 160V128L224 160H256Z" fill="#F1F4F9"></path>
          <path d="M224 192V160L192 192H224Z" fill="#F1F4F9"></path>
          <path d="M256 192V160L224 192H256Z" fill="#F1F4F9"></path>
        </svg>
        <div className={style.imageWrapper}>
          <img src={img} alt="SAP Consulting" className={style.image} />
        </div>
      </div>
    </div>
  );
}

export default ITSolution;
