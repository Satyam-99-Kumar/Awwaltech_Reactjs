import React from 'react';
import style from "./GlobalWorks.module.scss";
// Images
import img1 from "../../../assets/Global/Projects/1.png";
import img2 from "../../../assets/Global/Projects/gomedii-app.png";
import img3 from "../../../assets/Global/Projects/jetblue.png";
import img4 from "../../../assets/Global/Projects/bus.png";
import img5 from "../../../assets/Global/Projects/shopyglam.png";
import img6 from "../../../assets/Global/Projects/makeup.png";
import img7 from "../../../assets/Global/Projects/IT.png";
import img8 from "../../../assets/Global/Projects/aws.png";
import { Link } from 'react-router-dom';

export const Data = [
  {
    id: 1,
    ProjectName: "GoMedii App",
    Paragraph: "",
    type: "Healthcare & Telemedicine",
    Image: img2,
    link: "https://play.google.com/store/apps/details?id=com.gomedii"
  },
  {
    id: 2,
    ProjectName: "Jetblue",
    Paragraph: "",
    type: "Travel Booking",
    Image: img3,
    link: "https://play.google.com/store/apps/details?id=com.jetblue.JetBlueAndroid"
  },
  {
    id: 3,
    ProjectName: "Bus on Demand",
    Paragraph: "",
    type: "Transport Booking",
    Image: img4,
    link: "https://play.google.com/store/apps/details?id=dubai.rta&hl=en&" 
  },
  {
    id: 4,
    ProjectName: "ShopyGlam",
    Paragraph: "",
    type: "E-commerce WebApp",
    Image: img5,
    link: "https://myshopyglam.com/"
  },
  {
    id: 5,
    ProjectName: "Makeup",
    Paragraph: "",
    type: "Lifestyle Website",
    Image: img6,
    link: "https://makeupcrave.com/"
  },
  {
    id: 6,
    ProjectName: "IT Q&A",
    Paragraph: "",
    type: "Educational Website",
    Image: img7,
    link: "https://itquestionanswer.com/"
  },
  {
    id: 7,
    ProjectName: "AWS",
    Paragraph: "",
    type: "Production Webapp",
    Image: img8,
    link: "https://aws.amazon.com/marketplace/pp/prodview-n6yuvr2g44wpo?sr=0-2&ref_=beagle&applicationId=AWSMPContessa"
  }
];
