import React from 'react';
import styles from './EcommerceWhy.module.scss';

const EcommerceWhy = () => {
  const reasons = [
    {
      title: 'Client-centric Approach',
      description:
        'A client-centric approach means we keep our clients in the loop on every step of the process. In that way, any changes can be handled instantly.',
      number: '01',
    },
    {
      title: 'Coding Quality & Conventions',
      description:
        'Our developers hold advanced certifications and follow the coding conventions to ensure correctness, readability, and quality.',
      number: '02',
    },
    {
      title: 'Flexible Hiring Models',
      description:
        'With BrainSpate, you can opt for an hourly, fixed cost, or dedicated team hiring model according to your requirements.',
      number: '03',
    },
    {
      title: 'Dynamic Time Zone',
      description:
        'We can work in any time zone as per your convenience. Whether you are in NA, EU, or Australia, we can assure you the best service.',
      number: '04',
    },
  ];

  return (
    <div className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.whyChooseUsMain}>
          <div className={`${styles.titleLeft} ${styles.whyChooseContent} w-60`}>
            <h2>
              Why Choose Us For Your eCommerce <br /> Development Services?
            </h2>
            <div className={styles.subTitle}>
              BrainSpate is a leading eCommerce development company holding expertise in creating every type of online store for different industrial domains. Whether you want a simple one-page product listing site or a comprehensive multi-brand marketplace.
            </div>
          </div>
          <div className={`${styles.whyBoxContent} d-flex flex-wrap`}>
            {reasons.map((reason, index) => (
              <div key={index} className={styles.whyChooseBox}>
                <div className={styles.inner}>
                  <div className={`${styles.whyChooseTitle} d-flex flex-wrap`}>
                    <div className={styles.chooseTitle}>
                      <h4>{reason.title}</h4>
                    </div>
                    <div className={styles.whyChooseNumber}>{reason.number}</div>
                  </div>
                  <div className={styles.description}>{reason.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceWhy;
