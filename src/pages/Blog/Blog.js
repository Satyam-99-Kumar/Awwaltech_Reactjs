import { useEffect, useState } from "react";
import BlogBanner from "../../components/Blog/BlogBanner/BlogBanner";
import BlogPosts from "../../components/Blog/BlogPosts/BlogPosts";
import PortfolioTalk from "../../components/Portfolio/PortfolioTalk/PortfolioTalk";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { fetchBlogData } from '../../config/apiService';


function ContactUs() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchBlogData();
        setApiData(result.result[0]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
      document.title = "Blog Us";
      document.querySelector('meta[name="description"]').setAttribute("content", "Blog us for inquiries");
    };
    fetchDataFromAPI();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <Navbar />
      <BlogBanner apiData={apiData} />    
      <BlogPosts apiData={apiData} />
      <PortfolioTalk />
      <Footer />
    </>
  );
}

export default ContactUs;
