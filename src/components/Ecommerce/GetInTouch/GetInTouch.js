import React from 'react';
import styles from './GetInTouch.module.scss';

const GetInTouch = () => {
  return (
    <div className={`${styles.getInTouch} ${styles.ecomBgHalf}`}>
      <div className={styles.container}>
        <div className={styles.getInTouchWrap}>
          <div className={`${styles.title} ${styles.whiteText}`}>
            <h2 className={styles.whiteText}>Transform Your Online Presence with BrainSpate</h2>
            <div className={`${styles.subTitle} ${styles.coloredText}`}>
              Our eCommerce developers can help create a customized and scalable eStore and online marketplace so you can promote and sell your products to users online.
            </div>
          </div>
          <div className={styles.fillbtn}>
            <a className={styles.fill} href="/contact-us/">Get Free Quote</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
