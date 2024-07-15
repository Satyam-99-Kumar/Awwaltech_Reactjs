import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./FAQSection.module.scss";

const faqs = [
  {
    question: "What are the key features of an eCommerce website?",
    answer: (
      <>
        <p className={styles.answer}>Here are a key features of an eCommerce website include:</p>
        <ol className={styles.list_main}>
          <li>
            <strong>Product catalog:</strong> A well-organized listing of
            products or services with their detailed descriptions.
          </li>
          <li>
            <strong>Shopping cart:</strong> It lets customers add items for
            purchase and proceed to checkout.
          </li>
          <li>
            <strong>Payment gateway:</strong> It lets the customers pay through
            online payment platforms like Google Pay, PayPal, Stripe, etc.
          </li>
          <li>
            <strong>User registration and login:</strong> As the name suggests,
            this page allows customers to create accounts and track their
            orders.
          </li>
          <li>
            <strong>Order management:</strong> It helps the customers track and
            manage their orders from placement to fulfillment.
          </li>
          <li>
            <strong>Inventory management:</strong> It is meant for the website
            owners and helps track the product availability and manage the stock
            levels.
          </li>
          <li>
            <strong>Search functionality:</strong> Users can search for their
            desired products or categories through the search functionality.
          </li>
          <li>
            <strong>Customer reviews and ratings:</strong> Customers can leave
            ratings and feedback on the products or services.
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "What are the key features of an eCommerce website?",
    answer: (
      <>
        <p className={styles.answer}>
          Security is crucial for every website, be it a normal single-page web
          page or a comprehensive eCommerce store. Not only does it help protect
          the internal website information, but also the customer data. Some
          essential security measures include:
        </p>
          <ol className={styles.list_main}>
          <li>
            <strong>SSL encryption:</strong> One of the most crucial security
            features to implement is the Secure Sockets Layer (SSL) to encrypt
            the sensitive data transmitted between the website and customers.
          </li>
          <li>
            <strong>Secure payment gateways:</strong> It’s important to use
            trusted and secure payment gateways and comply with industry
            security and payment standards.
          </li>
          <li>
            <strong>Regular software updates:</strong> Make sure you update the
            eCommerce CMS along with its plugins and extensions to implement bug
            fixes.
          </li>
          <li>
            <strong>Strong password:</strong> On a ready-made website, make sure
            you protect the database and everything else with strong passwords.
          </li>
          <li>
            <strong>Two-factor authentication:</strong> Another significant
            security measure is the two-factor authentication that adds an extra
            layer of security for user accounts.
          </li>
          <li>
            <strong>Firewall and malware protection:</strong> Implement
            firewalls and install malware scanning tools to detect and prevent
            security threats.
          </li>
          <li>
            <strong>Regular data backups:</strong> Perform regular backups of
            the website to ensure you can restore the customer data and other
            critical info in case of any incidents.
          </li>
        </ol>
        <p className={styles.answer}>
          These security measures will not only prevent any cyber attacks on the
          website but will also help your website to protect critical data and
          info more effectively.
        </p>
      </>
    ),
  },
  {
    question: "How much does it cost to develop an eCommerce store?",
    answer: (
      <p className={styles.answer}>
        As with any other website, the cost of developing an ecommerce site can
        vary depending on factors like the website’s complexity, features,
        customizations, design requirements, and of course, the development
        team’s rates. A basic custom eCommerce store can cost a few thousand
        dollars, while more advanced and customized solutions can range from
        several thousand to tens of thousands of dollars. Sometimes, the cost of
        developing more complex online marketplaces may go up to hundreds of
        thousands of dollars.
      </p>
    ),
  },
  {
    question: "How long does it typically take to set up an eCommerce store?",
    answer: (
      <>
        <p className={styles.answer}>
          The development time for an eCommerce website can vary based on
          factors like the project’s complexity, desired features, customization
          requirements, and the development team’s expertise. A simple eStore
          can be developed in a few weeks, while more complex projects like
          online marketplaces may take several months.
        </p>
      </>
    ),
  },
  {
    question: "How long does it take to develop an eCommerce website?",
    answer: (
      <>
        <p className={styles.answer}>
          The cost can vary widely depending on factors like the platform used,
          complexity of the design, number of products, and custom features.
          Prices can range from a few hundred dollars for basic sites to tens of
          thousands for larger, more complex sites.
        </p>
      </>
    ),
  },
  {
    question: "What is an eCommerce Development Company?",
    answer: (
      <>
        <p className={styles.answer}>
          As with any other website, the cost of developing an ecommerce site
          can vary depending on factors like the website’s complexity, features,
          customizations, design requirements, and of course, the development
          team’s rates. A basic custom eCommerce store can cost a few thousand
          dollars, while more advanced and customized solutions can range from
          several thousand to tens of thousands of dollars. Sometimes, the cost
          of developing more complex online marketplaces may go up to hundreds
          of thousands of dollars.
        </p>
      </>
    ),
  },
  {
    question: "Which is the Best eCommerce Development Platform?",
    answer: (
      <>
        <p className={styles.answer}>
          Development time can range from a few weeks for a simple site to
          several months for a more complex site. Factors such as the number of
          features, level of customization, and whether you’re using a template
          or custom design affect the timeline.
        </p>
      </>
    ),
  },
  {
    question: "What are the key features of an eCommerce website?",
    answer: (
      <>
              <p className={styles.answer}>
          An ecommerce development company specializes in creating online
          stores. They handle everything from website design and product
          management to payment integration and security. Their goal is to build
          functional, attractive online stores that meet the needs of both
          businesses and their customers.
        </p>
      </>
    ),
  },
  {
    question: "Which is the Best eCommerce Development Platform?",
    answer: (
      <>
         <p className={styles.answer}>
          Security is crucial for every website, be it a normal single-page web
          page or a comprehensive eCommerce store. Not only does it help protect
          the internal website information, but also the customer data. Some
          essential security measures include:
        </p>
        <ul>
          <li>
            <strong>SSL encryption:</strong> One of the most crucial security
            features to implement is the Secure Sockets Layer (SSL) to encrypt
            the sensitive data transmitted between the website and customers.
          </li>
          <li>
            <strong>Secure payment gateways:</strong> It’s important to use
            trusted and secure payment gateways and comply with industry
            security and payment standards.
          </li>
          <li>
            <strong>Regular software updates:</strong> Make sure you update the
            eCommerce CMS along with its plugins and extensions to implement bug
            fixes.
          </li>
          <li>
            <strong>Strong password:</strong> On a ready-made website, make sure
            you protect the database and everything else with strong passwords.
          </li>
          <li>
            <strong>Two-factor authentication:</strong> Another significant
            security measure is the two-factor authentication that adds an extra
            layer of security for user accounts.
          </li>
          <li>
            <strong>Firewall and malware protection:</strong> Implement
            firewalls and install malware scanning tools to detect and prevent
            security threats.
          </li>
          <li>
            <strong>Regular data backups:</strong> Perform regular backups of
            the website to ensure you can restore the customer data and other
            critical info in case of any incidents.
          </li>
        </ul>
       

      </>
    ),
  },
];

const FAQSection = () => {
  return (
    <Box className={styles.faqSection}>
      <Container>
        <Box className={styles.mainTitle}>
          <Typography variant="h2">FAQ</Typography>
          <Typography variant="subtitle1" className={styles.subTitle}>
            People often have some doubts and queries regarding eCommerce
            development. So we have compiled a list of the most frequently-asked
            questions to make the process a little easier for you.
          </Typography>
        </Box>
        <Box className={styles.accordionContainer}>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}a-content`}
                id={`panel${index + 1}a-header`}
              >
                <Typography className={styles.faqQuestion}>{`${index + 1}. ${
                  faq.question
                }`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
