import style from "./MobileSolution.module.scss";
import { AiOutlineCheck, AiOutlineMobile } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import img from "../../../assets/Services/image.png";
import Slider from "react-slick/lib/slider";
import { Card, Grid } from "@mui/material";
import { useState } from "react";




function MobileSolution({ apiData }) {
    const [contacts] = useState([
        {
          number:<AiOutlineCheck size={20}/>,
          title: "Ecommerce, ",
          info: "Retail & B2B"
        },
        {
            number:<AiOutlineCheck size={20}/>,
          title: "Health care",
          info: "fitness"
        },
        {
            number:<AiOutlineCheck size={20}/>,
            title: "One Demand",
            info: "Solutions"
          },
          {
            number:<AiOutlineCheck size={20}/>,
            title: "Transport and ",
            info: "Automotive"
          },
          {
            number:<AiOutlineCheck size={20}/>,
            title: "Transport and ",
            info: "Automotive"
          },
          {
            number:<AiOutlineCheck size={20}/>,
            title: "Ecommerce, ",
            info: "Retail & B2B"
          },
          {
            number:<AiOutlineCheck size={20}/>,
          title: "Health care",
          info: "fitness"
        },
        {
            number:<AiOutlineCheck size={20}/>,
            title: "One Demand",
            info: "Solutions"
          },

          {
            number:<AiOutlineCheck size={20}/>,
            title: "Transport and ",
            info: "Automotive"
          },
          {
            number:<AiOutlineCheck size={20}/>,
            title: "Transport and ",
            info: "Automotive"
          },
          {
            number:<AiOutlineCheck size={20}/>,
            title: "Transport and ",
            info: "Automotive"
          },
          {
            number:<AiOutlineCheck size={20}/>,
            title: "Transport and ",
            info: "Automotive"
          },
      ]);
  return (
    <div className={style.serviceSolution}>
      {/* ///////////////////////////////////// */}
      {/* Content */}
      {/* ///////////////////////////////////// */}
      <div className={style.wrapper}>
        <div className={style.wrapper__left}>
          <img src={img} alt="" />
        </div>
        <div className={style.wrapper__right}>
          <p>{apiData.OurSolutionsSection.Title1}</p>
          <h3>{apiData.OurSolutionsSection.Title2}</h3>
          <ul>
            {apiData.OurSolutionsSection.List.map(item => {
              return (
                <li>
                  <div>
                    <AiOutlineCheck />
                  </div>
                  <div>{item.Name} </div>
                </li>
              )
            })}

          </ul>
        </div>
      </div>

      <div className={style.maingridstl}>
    <Grid className={style.gridmain} container spacing={2} justifyContent={'center'}>
       
       {contacts.map((contact, index) => (
         <Grid item sm={2} xs={12} key={index}>
           <Card className={style.card}>
             <div className={style.number}>{contact.number}</div>
             <div><span className={style.span}>{contact.title}</span></div>
             <div>{contact.info}</div>
           </Card>
         </Grid>
       ))}
     </Grid>
     <div className={style.mbsrbtn}>
        <button>inquire now</button>
     </div>
    </div>
     
     
    </div>
  );
}

export default MobileSolution;
