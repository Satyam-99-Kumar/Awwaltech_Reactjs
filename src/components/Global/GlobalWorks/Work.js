import React from 'react'
import style from "./GlobalWorks.module.scss";
// Images
import img1 from "../../../assets/Global/Projects/1.png"
import img2 from "../../../assets/Global/Projects/2.png"
import img3 from "../../../assets/Global/Projects/3.png"
import { Link } from 'react-router-dom';

const Data = [
    {
        id: 1, 
        name: "Click DRS", 
        desc: "Our complete spectrum of mobile app development and web solutions help startups, small-medium enterprises, and organizations to create outcome",
        type: "Healthcare & Telemedicine",
        image: img1
    },
    {
        id: 2, 
        name: "Click DRS", 
        desc: "",
        type: "Healthcare & Telemedicine",
        image: img2
    },
    {
        id: 3, 
        name: "Click DRS", 
        desc: "Our complete spectrum of mobile app development and web solutions help startups, small-medium enterprises, and organizations to create outcome",
        type: "Healthcare & Telemedicine",
        image: img3
    },
    {
        id: 4, 
        name: "Click DRS", 
        desc: "Our complete spectrum of mobile app development and web solutions help startups, small-medium enterprises, and organizations to create outcome",
        type: "Healthcare & Telemedicine",
        image: img1
    },
    {
        id: 2, 
        name: "Click DRS", 
        desc: "",
        type: "Healthcare & Telemedicine",
        image: img2
    },
]

function Work({id}) {
  return (
    <div className={style.work}>
        <div className={style.work__container}>
            <div className={style.image} style={{background: `url(${Data[id - 1].image}) no-repeat center center / cover`}}>
            </div>
            <div className={style.content}>
                <h4>{Data[id - 1].name}</h4>
                <p>{Data[id - 1].desc}</p>
                <Link to="/">{Data[id - 1].type}</Link>
            </div>
        </div>
    </div>
  )
}

export default Work