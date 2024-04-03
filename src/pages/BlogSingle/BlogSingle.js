import { useEffect } from "react";
import BlogSingleBanner from "../../components/BlogSingle/BlogSingleBanner";
import BlogSingleBody from "../../components/BlogSingle/BlogSingleBody";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function BlogSingle() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
