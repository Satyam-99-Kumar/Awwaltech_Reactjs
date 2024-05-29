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
import WebApp from "./pages/WebApp/WebApp";
import StrategicUXDev from "./pages/StrategicUXDev/StrategicUXDev";
import Ecommerce from "./pages/Ecommerce/Ecommerce";
import EnterpriseDevops from "./pages/EnterpriseDevops/EnterpriseDevops";
import QA from "./pages/QA/QA";
import CustomerSoftware from "./pages/CustomerSoftware/CustomerSoftware";
import CRMCloudServices from "./pages/CRMCloudServices/CRMCloudServices";
import LMSBasedServices from "./pages/LMSBasedServices/LMSBasedServices";
import ITConsulting from "./pages/ITConsulting/ITConsulting";
import CyberSecurity from "./pages/CyberSecurity/CyberSecurity";
import DedicatedTeam from "./pages/DedicatedTeam/DedicatedTeam";
import CloudBased from "./pages/CloudBased/CloudBased";

// import PortfolioDetails from "./pages/PortfolioDetails/PortfolioDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/service/mobile-app-development" element={<Service />} />
        <Route path="/service/webapp-development" element={<WebApp />} />
        <Route path="/service/mobileapp" element={<MobileApp />} />
        <Route path="/service/strategic-ux-development" element={<StrategicUXDev />} />
        <Route path="/service/eCommerce-development" element={<Ecommerce />} />
        <Route path="/service/enterprise-Devops" element={<EnterpriseDevops />} />
        <Route path="/service/Quality-Assurance" element={<QA />} />
        <Route path="/service/customer-software-development" element={<CustomerSoftware />} />
        <Route path="/service/crm-cloud-services" element={<CRMCloudServices />} />
        <Route path="/service/IT-Consulting" element={<ITConsulting />} />
        <Route path="/service/cybersecurity-consulting" element={<CyberSecurity />} />
        <Route path="/service/dedicated-development-team" element={<DedicatedTeam />} />
        <Route path="/service/crm-cloud-services" element={<CRMCloudServices />} />
        <Route path="/service/cloud-based-services" element={<CloudBased />} />
        <Route path="/service/lms-based-services" element={<LMSBasedServices />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/portfoliodetails" element={<PortfolioDetails />} />s */}
        <Route path="/portfolio/project/:id" element={<Project />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogSingle />} />
        <Route path="/technologies" element={<Technology />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/career" element={<Career />} />
        <Route path="/project" element={<Project />} />
        <Route path="/career/:name" element={<CareerDetails />} />
       

      </Routes>
    </div>
  );
}

export default App;
