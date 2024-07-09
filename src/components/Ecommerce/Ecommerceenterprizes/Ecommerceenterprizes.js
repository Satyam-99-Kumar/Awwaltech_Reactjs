import style from "./Ecommerceenterprizes.module.scss";
import img from "../../../assets/Services/Ecommerce/img.webp";

function EcommerceEnterprizes({ apiData }) {
  return (
    <>
      <section className={style.introSection}>
        <div className={style.container}>
          <div className={style.imageWrapper}>
            <img
              src={img}
              alt="eCommerce Development"
              className={style.image}
            />
          </div>
          <div className={style.content}>
            <h2 className={style.heading}>
              Maximize Sales with the Best eCommerce Development Company
            </h2>
            <p className={style.description}>
              With expertise in advanced web development tools and technologies,
              BrainSpate is a leading provider of eCommerce development services
              for global clients.{" "}
              <a href="#" className={style.link}>
                Hire dedicated eCommerce developers
              </a>{" "}
              to create customized, high-performing, and scalable online stores
              tailored to your specific needs, no matter your industry.
            </p>
            <p className={style.description}>
              Our eCommerce experts have years of experience building
              high-quality online stores, marketplaces, and more. With
              BrainSpate, you can effectively promote and sell your products to
              a wide audience. We also develop custom plugins and extensions,
              adding features based on your unique requirements.
            </p>
          </div>
        </div>
      </section>
      <div className={style.solutionSection}>
        <div className={style.container}>
          <div
            className={`${style.solutionContent} d-flex flex-wrap justify-space-between align-items-center`}
          >
            <div className={`${style.title}  w-70`}>
              <h2 className={style.whiteText}>
                Looking for eCommerce Web Development Services?
              </h2>
              <div className={style.subTitle}>
                Enhance your online store with our custom eCommerce web
                development services. Contact us today to create a customized,
                high-performing, and scalable eCommerce solution for your
                business.
              </div>
            </div>
            <div className={style.fillbtn}>
              <a className={style.fill} href="/contact-us/">
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EcommerceEnterprizes;
