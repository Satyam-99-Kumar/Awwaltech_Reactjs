import React, { useEffect} from "react";
import EcommerceBanner from "../../components/Ecommerce/EcommerceBanner/EcommerceBanner";
import EcommerceServices from "../../components/Ecommerce/EcommerceServices/EcommerceServices";
import Ecommerceenterprizes from "../../components/Ecommerce/Ecommerceenterprizes/Ecommerceenterprizes";
import EcommerceSolution from "../../components/Ecommerce/EcommerceSolution/EcommerceSolution";
import Navbar from "../../components/Navbar/Navbar";
// import ServiceInvestors from "../../components/Service/ServiceInvestors/ServiceInvestors";
import GlobalContact from "../../components/Global/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
// import { fetchMobileAppServiceData, fetchHomeData } from '../../config/apiService';
import ecommerce from "../../json/services/ecommerceService.json";

function Ecommerce() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Mobile App Development - Awwaltech Pvt. Ltd.";
    document.querySelector('meta[name="description"]').setAttribute("content", "Learn about our company");
  }, []);

  return (
    <>
     <Navbar />
      {ecommerce && (
        <>
          <EcommerceBanner apiData={ecommerce} />
          <EcommerceServices apiData={ecommerce} />
          <Ecommerceenterprizes apiData={ecommerce} />
          <EcommerceSolution apiData={ecommerce} />
          <GlobalContact />
          <Footer />
        </>
      )}
    </>
  );
}

export default Ecommerce;
