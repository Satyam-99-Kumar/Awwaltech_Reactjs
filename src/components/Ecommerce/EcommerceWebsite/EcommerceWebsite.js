import React from "react";
import styles from "./EcommerceWebsite.module.scss";

const EcommerceWebsite = () => {
  return (
    <div
      className={`${styles.developTypes} triangle-top-bottom light-bg-color`}
    >
      <div className={styles.container}>
        <div className={`${styles.mainTitle} pb-50`}>
          <h2>
            Our Expertise in Different Types of eCommerce Websites Development
          </h2>
          <div className={styles.subTitle}>
            In this new-age digital era, every product or service can be availed
            online. That means companies of every size and type can take their
            business to the world wide web. So our eCommerce developers can help
            you with a variety of eCommerce solutions and provide end-to-end
            ecommerce development services.
          </div>
        </div>
        <div className={`${styles.devBoxMain}`}>
          <div className={styles.divWrap}>
            <div className={`${styles.card} ${styles.borderBlue}`}>
              <div className={styles.cardBody}>
                <div className={styles.cardTitle}>
                  <h4 className={styles.hoverdBlue}>Multibrand Marketplaces</h4>
                </div>
                <p className={styles.cardText}>
                  Multibrand marketplaces showcase various brands under one
                  roof, enhancing customer choice and shopping experience. We
                  can develop these platforms for you.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.divWrap}>
            <div className={`${styles.card} border-purple`}>
              <div className={styles.cardBody}>
                <div className={`${styles.cardTitle} h5`}>
                  <h4 className="hoverd-purple">
                    Auctioning & Trading Websites
                  </h4>
                </div>
                <p className={styles.cardText}>
                  We can develop high-quality auctioning and trading websites to
                  provide the masses with a platform to sell and trade their
                  offerings.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.divWrap}>
            <div className={`${styles.card} border-green`}>
              <div className={styles.cardBody}>
                <div className={`${styles.cardTitle} h5`}>
                  <h4 className="hoverd-green">
                    Travel & Hospitality Websites
                  </h4>
                </div>
                <p className={styles.cardText}>
                  Whether you want to list the best hotels, or let the customers
                  book trains or buses, we can develop streamlined ticketing
                  platforms.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.divWrap}>
            <div className={`${styles.card} border-orange`}>
              <div className={styles.cardBody}>
                <div className={`${styles.cardTitle} h5`}>
                  <h4 className="hoverd-orange">
                    Social eCommerce Marketplaces
                  </h4>
                </div>
                <p className={styles.cardText}>
                  We can also develop eCommerce websites intertwined with the
                  leading social platforms. Something like Facebook Marketplace,
                  Etsy, etc.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.divWrap}>
            <div className={`${styles.card} border-light-blue`}>
              <div className={styles.cardBody}>
                <div className={`${styles.cardTitle} h5`}>
                  <h4 className="hoverd-light-blue">SaaS eCommerce Stores</h4>
                </div>
                <p className={styles.cardText}>
                  Our eCommerce experts can help create comprehensive, scalable
                  portals for anyone looking to sell their software as a
                  service.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.divWrap}>
            <div className={`${styles.card} border-yellow`}>
              <div className={styles.cardBody}>
                <div className={`${styles.cardTitle} h5`}>
                  <h4 className="hoverd-yellow">B2B/Consumer Store</h4>
                </div>
                <p className={styles.cardText}>
                  BrainSpate can develop some excellent B2B and B2C stores based
                  on the transactional volume, nature of products or services,
                  etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceWebsite;
