import style from './ContactMap.module.scss';
import mapImage from "../../../assets/Contact/map.png"

function ContactMap() {
  return (
    <div className={style.map}>
        <img src={mapImage} alt="" />
    </div>
  )
}

export default ContactMap