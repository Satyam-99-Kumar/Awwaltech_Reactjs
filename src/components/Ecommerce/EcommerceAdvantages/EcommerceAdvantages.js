import React from 'react';
import styles from './EcommerceAdvantages.module.scss';

const EcommerceAdvantages = () => {
  const advantages = [
    '24/7 Accessibility',
    'Flexibility for Customers',
    'Various Payment Methods',
    'Wider Customer Base',
    'Cost Reduction',
    'No Reach Limitations',
    'Improved Customer Loyalty',
    'Customer Data Insights',
    'Unlimited Income Potential',
    'Faster Response to Market Demands',
    'Higher Retention Rate',
    'Affordable Advertising & Marketing',
  ];

  const icons = [
    'Path-16381.svg',
    'Path-16381-1.svg',
    'Path-16381-2.svg',
    'Path-16381-3.svg',
    'Path-16381-4.svg',
    'Path-16381-5.svg',
    'Path-16381.svg',
    'Path-16381-1.svg',
    'Path-16381-2.svg',
    'Path-16381-3.svg',
    'Path-16381-4.svg',
    'Path-16381-5.svg',
  ];

  return (
    <div className={`${styles.advantages} ${styles.triangleTopBottom} ${styles.bgPurpleLight}`}>
      <div className={styles.container}>
        <div className={`${styles.mainTitle} ${styles.pb50}`}>
          <h2>Advantages of Having eCommerce Store for Business</h2>
          <div className={styles.subTitle}>
            eCommerce can be a helpful platform for any product-based businesses to increase sales and expand globally. A fully-fledged eCommerce website can help sell your products or services to more customers with little to no time.
          </div>
        </div>
        <div className={`${styles.advantagesMain} ${styles.dFlex} ${styles.flexWrap}`}>
          {advantages.map((advantage, index) => (
            <div key={index} className={`${styles.advantagesContent} ${styles.dFlex} ${styles.alignItemsCenter}`}>
              <div className={styles.advantagesIcon}>
                <figure>
                  <img
                    alt="star-icon"
                    loading="lazy"
                    width="26"
                    height="25"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: 'transparent' }}
                    src={`https://api.brainspate.com/wp-content/uploads/2023/05/${icons[index]}`}
                  />
                </figure>
              </div>
              <div className={styles.advantagesTitle}>
                <h4>{advantage}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcommerceAdvantages;
