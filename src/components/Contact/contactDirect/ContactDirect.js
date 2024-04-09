


import React, { useState } from "react";
import style from "./ContactDirect.module.scss";
import { Card, Grid } from "@mui/material";
import { GrSkype } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


function ContactDirect() {
  
  const [contacts] = useState([
    {
      icon: <MdEmail size={35} color="#165FFF" />,
      title: "Email",
      info: "info@minttask.com"
    },
    {
      icon: <FaPhoneAlt size={30} color="#61C4E1" />,
      title: "Contact",
      info: "+123-234-456"
    },
    {
      icon: <GrSkype size={30} color="#00AFF0" />,
      title: "Skype",
      info: "minttask"
    }
  ]);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h1>Contact us Direct!</h1>
      </div>

      <Grid container spacing={2} justifyContent={'center'} mt={5}>
       
        {contacts.map((contact, index) => (
          <Grid item sm={3} key={index}>
            <Card className={style.card}>
              <div>{contact.icon}</div>
              <div><span className={style.span}>{contact.title}</span></div>
              <div>{contact.info}</div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ContactDirect;

