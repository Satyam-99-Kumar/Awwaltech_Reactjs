
import BlogBanner from "../../components/Blog/BlogBanner/BlogBanner";
import BlogPosts from "../../components/Blog/BlogPosts/BlogPosts";
import PortfolioTalk from "../../components/Portfolio/PortfolioTalk/PortfolioTalk";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import jsonData from '../../json/blogData.json'

function Blog() {



  return (
    <>
      <Navbar />
      {jsonData && (
        <>
          <BlogBanner data={jsonData} />
          <BlogPosts data={jsonData} />
          <PortfolioTalk />
          <Footer />
        </>
      )}
    </>
  );
}

export default Blog;
