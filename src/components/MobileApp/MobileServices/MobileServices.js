import style from "./Mobileservices.module.scss";
import { FiMonitor } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GrSkype } from "react-icons/gr";
import { Card, Grid } from "@mui/material";
import { useState } from "react";

function MobileServices({ apiData }) {
  const [contacts] = useState([
    {
      number: "1.",
      title: "Iphone App",
      info: "Development",
    },
    {
      number: "2.",
      title: "Android App",
      info: "Development",
    },
    {
      number: "3.",
      title: "Wearable App",
      info: "Development",
    },
    {
      number: "4.",
      title: "IPad App",
      info: "Development",
    },
    {
      number: "5.",
      title: "Cross ",
      info: "Platform",
    },
    {
      number: "6.",
      title: "Progressiveweb App",
      info: "Development",
    },
  ]);
  return (
    <div className={style.solve}>
      {/* ///////////////////////////////////// */}
      {/* short desc */}
      {/* ///////////////////////////////////// */}
      <div className={style.solve__identity}>
        <div className={style.head}>
          <p>{apiData.MobileAppSolutionSection.Title1}</p>
          <h2>
            <div>{apiData.MobileAppSolutionSection.Title2}</div>
            <div>{apiData.MobileAppSolutionSection.Title3}</div>
            <div className={style.headMobile}>
              {apiData.MobileAppSolutionSection.Title2}{" "}
              {apiData.MobileAppSolutionSection.Title2}{" "}
              {apiData.MobileAppSolutionSection.Title3}
            </div>
          </h2>
        </div>
        <div className={style.text}>
          <p>{apiData.MobileAppSolutionSection.Paragraph}</p>
          <p>
            Being a rising name in the IT industry across the world, we deliver
            quality services in a timely fashion to help our clients gain a
            leading edge in this competitive market. 
          </p>
          <p> We are your one-stop
            solution provider for Android, iOS & Flutter Mobile App development
            services. Leading Startups and Companies hiring Android, iOS and
            Flutter App developers from Zignuts Technolab to successfully drive
            and achieve their critical mobile app development projects. As a
            leading Indian mobile app development company with skiiled team of
            app developers in India, we help building custom mobile apps that
            have most interactive and modern interfaces.</p>
        </div>
      </div>

      {/* ///////////////////////////////////// */}
      {/* solutions */}
      {/* ///////////////////////////////////// */}
      <div className={style.maingridstl}>
        <Grid
          className={style.gridmain}
          container
          spacing={2}
          justifyContent={"center"}
        >
          {contacts.map((contact, index) => (
            <Grid item sm={2} xs={12} key={index}>
              <Card className={style.card}>
                <div className={style.number}>{contact.number}</div>
                <div>
                  <span className={style.span}>{contact.title}</span>
                </div>
                <div className={style.span}>{contact.info}</div>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className={style.mbsrbtn}>
          <button>Inquire now </button>
        </div>
      </div>
    </div>
  );
}

export default MobileServices;
