import { useEffect } from "react";
import ContactBanner from "../../components/Contact/ContactBanner/ContactBanner";
import ContactForm from "../../components/Contact/ContactForm/ContactForm";
import ContactInvestors from "../../components/Contact/ContactInvestors/ContactInvestors";
import ContactMap from "../../components/Contact/ContactMap/ContactMap";
import HomeFeedback from "../../components/Home/HomeFeedback/HomeFeedback";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ContactDirect from "../../components/Contact/contactDirect/ContactDirect";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <ContactBanner />
      <ContactForm />
      <ContactDirect/>
      <ContactMap />
      <ContactInvestors />
      <HomeFeedback />
      <Footer />
    </>
  );
}

export default ContactUs;
