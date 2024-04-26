import React, { useState } from "react";
import style from "./ContactDirect.module.scss";
import { Card, Grid } from "@mui/material";
import { GrSkype } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import contact from  '../../../assets/Contact/contact.png';
import skype from  '../../../assets/Contact/Skype-Emblem 1.png';
import mail from  '../../../assets/Contact/mail.png';

function ContactDirect() {
  
  const [contacts] = useState([
    {
      icon: <img src={mail} alt="Email" />,
      title: "Email",
      info: "info@minttask.com"
    },
    {
      icon: <img src={contact} alt="Contact" />,
      title: "Contact",
      info: "+123-234-456"
    },
    {
      icon: <img src={skype} alt="Skype" />,
      title: "Skype",
      info: "minttask"
    }
  ]);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h1>Contact us Direct!</h1>
      </div>

      <div className={style.gridmain}>
       
        {contacts.map((contact, index) => (
          <div className={style.grid_card} key={index}>
            <Card className={style.card}>
              <div>{contact.icon}</div>
              <div><span className={style.span}>{contact.title}</span></div>
              <div className={style.span_info}>{contact.info}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactDirect;

