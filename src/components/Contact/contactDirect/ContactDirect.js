


import React, { useState } from "react";
import style from "./ContactDirect.module.scss";
import { Card, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';

function ContactDirect() {
  
  const [contacts, setContacts] = useState([
    {
      icon: <EmailIcon className={style.mail} />,
      title: "Email",
      info: "info@indi123gmail.com"
    },
    {
      icon: <LocalPhoneIcon className={style.phone} />,
      title: "Contact",
      info: "+123-234-456"
    },
    {
      icon: <InstagramIcon className={style.insta} />,
      title: "Instagram",
      info: "i23-faizu_11"
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

