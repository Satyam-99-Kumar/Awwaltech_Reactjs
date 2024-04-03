import { useEffect } from "react";
import BlogBanner from "../../components/Blog/BlogBanner/BlogBanner";
import BlogPosts from "../../components/Blog/BlogPosts/BlogPosts";
import PortfolioTalk from "../../components/Portfolio/PortfolioTalk/PortfolioTalk";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <BlogBanner />    
      <BlogPosts />
      <PortfolioTalk />
      <Footer />
    </>
  );
}

export default ContactUs;
