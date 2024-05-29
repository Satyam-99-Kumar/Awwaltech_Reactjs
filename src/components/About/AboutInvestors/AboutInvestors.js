import style from './AboutInvestors.module.scss';
import GlobalInvestors from "../../Global/GlobalInvestors/GlobalInvestors"

function AboutInvestors() {
  return (
    <div className={style.investors}>
        <h4>Our Investors</h4>
        <GlobalInvestors />
    </div>
  )
}

export default AboutInvestors