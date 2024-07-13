import style from "./EcommerceSolution.module.scss";
import shopify from "../../../assets/Services/Ecommerce/shopify.svg";
import woo from "../../../assets/Services/Ecommerce/woocommerce.svg";

function EcommerceExpertise(apiData) {
  const cards = [
    {
      image: shopify,
      title: "Shopify",
      description:
        "With Shopify, we develop unique eCommerce websites using its custom themes, templates, and APIs. Our Shopify Development Services ensure your store aligns perfectly with your business's requirements to increase product sales.",
    },
    {
      image: woo,
      title: "WooCommerce",
      description:
        "SWooCommerce is a free plugin offered by WordPress, featuring a vast library of extensions and themes. With our WooCommerce development services, you can build your dream eCommerce store that perfectly fits your business needs.",
    },
    {
      image: woo,
      title: "Magento",
      description:
        "Magento is a powerful eCommerce platform that enables the creation of high-quality online stores. As a leading Magento development company, we specialize in developing stores with Magento, ensuring robust scalability and superior performance.",
    },
    {
      image: woo,
      title: "Salesforce",
      description:
        "BrainSpate developers leverage Salesforce to streamline eCommerce website tasks such as customer data management, order management, and more. Using this platform, we enhance efficiency and improve overall customer experience.",
    },
 
  ];

  return (
    <section className={style.platformsSection}>
      <div className={style.container}>
        <h2 className={style.heading}>
          Platforms We Preferred for eCommerce Store Development
        </h2>
        <p className={style.subheading}>
          BrainSpate uses advanced eCommerce CMS and CRM platforms, along with
          the latest techniques, themes, plugins, and extensions, to create
          customized eCommerce websites. This helps you expand your brand,
          products, and services globally and increase revenue.
        </p>
        <div className={style.cardContainer}>
          {cards.map((card, index) => (
            <div key={index} className={style.card}>
              <div className={style.cardInner}>
                <div className={style.cardName}>
                  <img
                    src={card.image}
                    alt="Shopify"
                    className={style.cardImage}
                  />
                  <h3 className={style.cardTitle}>{card.title}</h3>
                </div>

                <p className={style.cardDescription}>{card.description}</p>
              </div>
            </div>
          ))}

        
        </div>
      </div>
    </section>
  );
}

export default EcommerceExpertise;
