import { useEffect } from "react";
import BlogSingleBanner from "../../components/BlogSingle/BlogSingleBanner";
import BlogSingleBody from "../../components/BlogSingle/BlogSingleBody";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function BlogSingle() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog Detail - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
      <Navbar />
      <BlogSingleBanner />
      <BlogSingleBody />
      <Footer />
    </>
  );
}

export default BlogSingle;
