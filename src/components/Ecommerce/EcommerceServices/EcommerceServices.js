import { useState } from "react";
import style from "./EcommerceServices.module.scss";

function EcommerceServices({ apiData }) {
  const services = [
    {
      number: "01",
      title: "Custom eCommerce Development Services",
      description:
        "BrainSpate offers custom eCommerce development services with unique features suitable to your business requirements so you can sell your products more easily.",
      background: "transparent linear-gradient(180deg, #00aeef, #0f5ec9)",
      color: "#ffffff",
    },
    {
      number: "02",
      title: "mCommerce Website Development",
      description:
        "At BrainSpate, we offer some innovative mCommerce web design & development services so you can sell your products to millions of mobile website users worldwide.",
      background: "transparent linear-gradient(180deg, #e08bfc, #7357fb)",
      color: "#ffffff",
    },
    {
      number: "03",
      title: "eCommerce CMS Development",
      description:
        "Our eCommerce developers use the latest CMS and web development technologies like WooCommerce, Shopify, Magento, etc. for developing the best eCommerce websites.",
      background: "transparent linear-gradient(181deg, #00e396, #00c0ce)",
      color: "#ffffff",
    },
    {
      number: "04",
      title: "Payment Gateways Integration",
      description:
        "Our developers can integrate a variety of payment gateways (Google Pay, PayPal, etc.) and mobile wallets to give your customers a choice and improve user-experience.",
      background: "transparent linear-gradient(180deg, #ffbd91, #ff7171)",
      color: "#ffffff",
    },
    {
      number: "05",
      title: "eCommerce API Development",
      description:
        "Unlock seamless integrations and boost your online store with our eCommerce API Development services. Custom solutions to enhance connectivity and streamline your eCommerce operations.",
      background: "transparent linear-gradient(180deg, #24eefc, #236dfc)",
      color: "#ffffff",
    },
    {
      number: "06",
      title: "eCommerce Plugin Development",
      description:
        "Enhance your online store with our eCommerce Plugin Development services. Custom plugins designed to add powerful features and improve your store's functionality.",
      background: "transparent linear-gradient(178deg, #fedb4d, #f28555)",
      color: "#ffffff",
    },
    {
      number: "07",
      title: "Engaging eCommerce Theme Design Services",
      description:
        "Revamp your online store with our eCommerce Theme Design Services. Unique, visually appealing themes tailored to enhance user experience and drive sales.",
      background: "transparent linear-gradient(180deg, #ffc4e9, #ff6baf)",
      color: "#ffffff",
    },
    {
      number: "08",
      title: "eCommerce Store Migration Services",
      description:
        "Our developers can seamlessly migrate your existing store to advanced platforms like WooCommerce or Shopify. Experience enhanced performance, scalability, and security.",
      background: "transparent linear-gradient(180deg, #94f4ff, #06a273)",
      color: "#ffffff",
    },
    {
      number: "09",
      title: "eCommerce Consultation Services",
      description:
        "Maximize your store’s potential with our eCommerce Consultation Services. Expert guidance for increased sales and growth. Get personalized strategies to optimize every aspect of your business.",
      background: "transparent linear-gradient(179deg, #bae7ff, #95c6ff 20%, #2969ff)",
      color: "#ffffff",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className={style.servicesSection}>
      <div className={style.container}>
        <h2 className={style.heading}>
          eCommerce Website Design & Development Services
        </h2>
        <p className={style.subheading}>
          At BrainSpate, we offer an extensive range of eCommerce development
          services tailored to meet the diverse needs of your business. From
          custom eCommerce website development to robust mCommerce solutions,
          our offerings are designed to help you captivate a global audience and
          enhance sales.
        </p>
        <div className={style.cardsContainer}>
          {services.map((service, index) => (
            <div className={style.cardGrid}>
              <div
                key={index}
                className={style.card}
                style={{
                  background:
                    hoverIndex === index ? `#ffffff` : service.background,
                  color: hoverIndex === index ? `#000000` : service.color,
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div
                  style={{
                    color: hoverIndex === index ? `#6f42c1` : service.color,
                  }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className={style.cardNumber}
                >
                  {service.number}
                </div>
                <h3
                  style={{
                    color: hoverIndex === index ? `#000000` : service.color,
                  }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className={style.cardTitle}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: hoverIndex === index ? `#6d7d7f` : service.color,
                  }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className={style.cardDescription}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EcommerceServices;
