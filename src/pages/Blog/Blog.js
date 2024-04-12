import { useEffect, useState } from "react";
import BlogBanner from "../../components/Blog/BlogBanner/BlogBanner";
import BlogPosts from "../../components/Blog/BlogPosts/BlogPosts";
import PortfolioTalk from "../../components/Portfolio/PortfolioTalk/PortfolioTalk";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { fetchBlogData } from '../../config/apiService';

function Blog() {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchBlogData();
        setApiData(result.result[0]);
      } catch (error) {
        setError(error);
      }
      document.title = "Blog Us";
      document.querySelector('meta[name="description"]').setAttribute("content", "Blog us for inquiries");
    };
    fetchDataFromAPI();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Check if apiData is still null, meaning the API call hasn't completed yet
  if (apiData === null) {
    return null; // or any other placeholder while waiting for the API call to complete
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

export default Blog;
