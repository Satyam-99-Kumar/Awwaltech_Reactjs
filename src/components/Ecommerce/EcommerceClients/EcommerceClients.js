import React from "react";
import styles from "./EcommerceClients.module.scss";
import StarIcon from "@mui/icons-material/Star";

const EcommerceClients = () => {
  return (
    <div className={`${styles.triangleTopBottom} ${styles.lightBgColor}`}>
      <div className={`${styles.ourClients} ${styles.triangleBottom}`}>
        <div className={styles.container}>
          <div
            className={`${styles.mainTitle} ${styles.dFlex} ${styles.flexWrap} ${styles.alignItemsCenter} ${styles.justifySpaceBetween} ${styles.pb38}`}
          >
            <div className={`${styles.titleLeft} ${styles.w80}`}>
              <h2>See What Our Clients Say</h2>
              <div className={styles.subTitle}>
                BrainSpate follows a client-centric approach to ensure the
                clients are always in the loop. So any customization requests
                can be fulfilled more quickly. Here’s what our clients have to
                say about that.
              </div>
            </div>
            <div className={styles.titleRight}>
              <div className={styles.fillbtn}>
                <a className={styles.fill} href="/testimonials/">
                  View All
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${styles.ourClientsBox} ${styles.dFlex} ${styles.flexWrap}`}
          >
            <div className={`${styles.ourClientsWrap} ${styles.w50}`}>
              <div className={styles.inner}>
                <div
                  className={`${styles.clientsWrap} ${styles.dFlex} ${styles.flexWrap}`}
                >
                  <figure>
                    <img
                      alt="testimonial_image"
                      loading="lazy"
                      width={100}
                      height={100}
                      src="https://api.brainspate.com/wp-content/uploads/2023/06/Colleen-Shields.png"
                    />
                    <div className={styles.customePopup}>
                      <a
                        href="https://youtu.be/XcOWiImKnsQ"
                        data-fancybox=""
                        data-caption="This image has a simple caption"
                      >
                        <div className={styles.popupBtn}></div>
                      </a>
                    </div>
                  </figure>
                  <div className={styles.clientsRight}>
                    <div className={styles.clientsRightInner}>
                      <h3>Colleen Shields</h3>
                      <div className={styles.subTitle}>Founder @Rescuemeds</div>
                      <div className={styles.rating}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                    </div>
                    <div className={styles.customePopup}>
                      <a
                        href="https://youtu.be/XcOWiImKnsQ"
                        data-fancybox=""
                        data-caption="This image has a simple caption"
                      >
                        <div className={styles.popupBtn}></div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={`${styles.subTitle} ${styles.titleHover}`}>
                  I recently worked with Brainspate on the development of my
                  eCommerce store. They were extremely helpful and knowledgeable
                  throughout the entire process. The overall quality of their
                  work was top-notch and they were also able to finish the
                  project in a timely manner.
                </div>
              </div>
            </div>
            <div className={`${styles.ourClientsWrap} ${styles.w50}`}>
              <div className={styles.inner}>
                <div
                  className={`${styles.clientsWrap} ${styles.dFlex} ${styles.flexWrap}`}
                >
                  <figure>
                    <img
                      alt="testimonial_image"
                      loading="lazy"
                      width={100}
                      height={100}
                      src="https://api.brainspate.com/wp-content/uploads/2023/06/Yoav-Mor.png"
                    />
                    <div className={styles.customePopup}>
                      <a
                        href="https://youtu.be/XcOWiImKnsQ"
                        data-fancybox=""
                        data-caption="This image has a simple caption"
                      >
                        <div className={styles.popupBtn}></div>
                      </a>
                    </div>
                  </figure>
                  <div className={styles.clientsRight}>
                    <div className={styles.clientsRightInner}>
                      <h3>Yoav Mor</h3>
                      <div className={styles.subTitle}>Founder @Sphereo</div>
                      <div className={styles.rating}>
                      <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon className={styles.rating} />
                      </div>
                    </div>
                    <div className={styles.customePopup}>
                      <a
                        href="https://youtu.be/XcOWiImKnsQ"
                        data-fancybox=""
                        data-caption="This image has a simple caption"
                      >
                        <div className={styles.popupBtn}></div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={`${styles.subTitle} ${styles.titleHover}`}>
                  Working with Brainspate has been a great experience. They have
                  a team of highly skilled and experienced professionals who
                  understand my business needs and provide the best solutions
                  for our eCommerce development project. I highly recommend
                  Brainspate for any eCommerce development work that you may
                  need!
                </div>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default EcommerceClients;
