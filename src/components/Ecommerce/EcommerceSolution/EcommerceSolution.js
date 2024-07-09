import style from "./EcommerceSolution.module.scss";
import shopify from "../../../assets/Services/Ecommerce/shopify.svg";
import woo from "../../../assets/Services/Ecommerce/woocommerce.svg";



function EcommerceSolution(apiData) {
  const cards = [
    {
      image: shopify,
      title: "Shopify",
      description:
        "Shopify is a commerce platform that allows you to create your own online store and",
    },
    {
      image: woo,
      title: "Shopify",
      description:
        "Shopify is a commerce platform that allows you to create your own online store and",
    },
    {
      image: woo,
      title: "Shopify",
      description:
        "Shopify is a commerce platform that allows you to create your own online store and",
    },
    {
      image: woo,
      title: "Shopify",
      description:
        "Shopify is a commerce platform that allows you to create your own online store and",
    },
    {
      image: woo,
      title: "Shopify",
      description:
        "Shopify is a commerce platform that allows you to create your own online store and",
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
              <img src={card.image} alt="Shopify" className={style.cardImage} />
              <h3 className={style.cardTitle}>{card.title}</h3>
              <p className={style.cardDescription}>
              {card.description}
              </p>
            </div>
          ))}

         
          {/* Add more cards as needed */}
        </div>
      </div>
    </section>
  );
}

export default EcommerceSolution;
