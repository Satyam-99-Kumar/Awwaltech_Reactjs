import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Portfolio from "./pages/Portfolio/Portfolio";
import Project from "./pages/Project/Project";
import ContactUs from "./pages/ContactUs/ContactUs";
import Blog from "./pages/Blog/Blog";
import BlogSingle from "./pages/BlogSingle/BlogSingle";
import Technology from "./pages/Technology/Technology";
import Hire from "./pages/Hire/Hire";
import Career from "./pages/Career/Career";
import CareerDetails from "./pages/CareerDetails/CareerDetails";
import MobileApp from "./pages/MobileApp/MobileApp";
// import PortfolioDetails from "./pages/PortfolioDetails/PortfolioDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/service/mobile-app-development" element={<Service />} />
        <Route path="/service/mobileapp" element={<MobileApp />} />
        <Route path="/service/strategic-ux-development" element={<Service />} />
        <Route path="/service/eCommerce-development" element={<Service />} />
        <Route path="/service/enterprise-Devops" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/portfoliodetails" element={<PortfolioDetails />} />s */}
        <Route path="/portfolio/project/:id" element={<Project />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogSingle />} />
        <Route path="/technologies" element={<Technology />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/:name" element={<CareerDetails />} />

      </Routes>
    </div>
  );
}

export default App;
