import { useParams } from "react-router-dom";
import PortfolioTalk from "../../components/Portfolio/PortfolioTalk/PortfolioTalk";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import style from "./CareerDetails.module.scss";
import CareerDetailsDesc from "../../components/CareerDetails/CareerDetailsDesc";
import CareerDetailForm from "../../components/CareerDetails/CareerDetailForm";

function CareerDetails() {
  const { name } = useParams();
  return (
    <>
      <Navbar />
      <div className={style.careerDetails}>
        <h1>{name}</h1>
        <p>
          Sit justo, duis ut quis in morbi ultrices pretium, aliquam. Orci
          adipiscing a viverra eu ultrices quam venenatis eget. Integer
          elementum integer feugiat justo, tempus. Purus a sed felis sit arcu
          nulla a. Velit eu in facilisis tincidunt sed eu massa sit. Lorem vitae
          nunc odio sed viverra senectus. Est tortor dui neque placerat lacus.
          Venenatis, tincidunt molestie nam auctor mauris enim lorem. Vel urna,
          amet erat tincidunt commodo nec vitae, bibendum tempor. Vitae molestie
          interdum vulputate urna facilisis. Cursus orci sollicitudin quam vitae
          vel.
        </p>

        <div className={style.careerDetails__detail}>
          <div className={style.description}>
            <CareerDetailsDesc />
          </div>
          <div className={style.form}>
            <CareerDetailForm />
          </div>
        </div>
      </div>
      <PortfolioTalk />
      <Footer />
    </>
  );
}

export default CareerDetails;
