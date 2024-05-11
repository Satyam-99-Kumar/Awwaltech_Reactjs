import style from './ContactInvestors.module.scss'
import GlobalInvestors from "../../Global/GlobalInvestors/GlobalInvestors"

function ContactInvestors() {
  return (
    <div className={style.investors}>
        <h4>Businesses that use Awwaltech to build </h4>
        <GlobalInvestors />
    </div>
  )
}

export default ContactInvestors