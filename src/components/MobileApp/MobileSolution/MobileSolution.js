import style from "./MobileSolution.module.scss";
import { AiOutlineCheck, AiOutlineMobile } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import img from "../../../assets/Services/image.png";
import Slider from "react-slick/lib/slider";
import { Card, Grid } from "@mui/material";
import { useState } from "react";
import { BsPatchCheck } from "react-icons/bs"
import php from "../../../assets/Technologies/php.png"
import node from "../../../assets/Technologies/node.png"
import net from "../../../assets/Technologies/net.png"
import java from "../../../assets/Technologies/java.png"

function MobileSolution({ apiData }) {
  const [contacts] = useState([
    {
      number: <AiOutlineCheck size={20} />,
      title: "Ecommerce, ",
      info: "Retail & B2B"
    },
    {
      number: <AiOutlineCheck size={20} />,
      title: "Health care",
      info: "fitness"
    },
    {
      number: <AiOutlineCheck size={20} />,
      title: "One Demand",
      info: "Solutions"
    },
    {
      number: <AiOutlineCheck size={20} />,
      title: "Transport and ",
      info: "Automotive"
    },
    {
      number: <AiOutlineCheck size={20} />,
      title: "Transport and ",
      info: "Automotive"
    },
    {
      number: <AiOutlineCheck size={20} />,
      title: "Ecommerce, ",
      info: "Retail & B2B"
    },
    {
      number: <AiOutlineCheck size={20} />,
      title: "Health care",
      info: "fitness"
    },
    {
      number: <AiOutlineCheck size={20} />,
      title: "One Demand",
      info: "Solutions"
    },

    {
      number: <AiOutlineCheck size={20} />,
      title: "Transport and ",
      info: "Automotive"
    },
    {
      number: <AiOutlineCheck size={20} />,
      title: "Transport and ",
      info: "Automotive"
    },
    {
      number: <AiOutlineCheck size={20} />,
      title: "Transport and ",
      info: "Automotive"
    },
    {
      number: <AiOutlineCheck size={20} />,
      title: "Transport and ",
      info: "Automotive"
    },
  ]);
  return (
    <div className={style.serviceSolution}>
      {/* ///////////////////////////////////// */}
      {/* Content */}
      {/* ///////////////////////////////////// */}
      {/* <div className={style.wrapper}>
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
      </div> */}

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
      <div className={style.key_back}>
        <div className={style.key}>
          <p>
            <BsPatchCheck />
          </p>
          <h1>Key Technologies To Evolve Your
            Retail Digital Experience</h1>
          <p className={style.para}>Codiant backed with the seasoned team of e-commerce website developers empowers retails and brands by helping them
            choose the right eCommerce platform that suits to their business requirements and accelerate their growth quickly with
            increased sales and ROI.</p>
          <div className={style.card}>

            <div className={style.code}>
              <img src={php} alt="" />
              <h4>PHP</h4>
              <p>PHP is open-source, and all features and updates are free to use. PHP is still the most common language for server-side development. Since it was designed specifically for the web, developers need less time to create websites with dynamic features.</p>
              <h4>Can be used for :</h4>
              <p>Web applications</p>
              <p>CMS development</p>
              <p>Social networks</p>
            </div>

            <div className={style.code}>
              <img src={node} alt="" />
              <h4>NODE.JS</h4>
              <p>A relatively young technology that is gaining popularity recently.  This allows achieving high performance without the use of multithreading. Having a single language on the stack breaks down communication barriers in a team and makes software easier to maintain.</p>
              <h4>Can be used for :</h4>
              <p>Developing programs for OS.</p>
              <p>API formation</p>
              <p>Web and mobile applications.</p>
            </div>

            <div className={style.code}>
              <img src={net} alt="" />
              <h4>C# (.NET CORE)</h4>
              <p>C # is a programming language that follows OOPs and is used for desktop, mobile, and enterprise applications. Due to developed infrastructure and excellent integration with the desktop infrastructure, Azure allows you to run highly loaded applications in a short time.</p>
              <h4>Can be used for :</h4>
              <p>Web services and applications.</p>
              <p>Mobile applications</p>
              <p>Any Windows program.</p>
            </div>

            <div className={style.code}>
              <img src={java} alt="" />
              <h4>JAVA</h4>
              <p>Java is fast, highly protected, and reliable. Despite the growing popularity of Go and Python, Java has remained at the top of the list for more than a decade. And it’s everywhere – from laptops to data centers, from game consoles to supercomputers used for scientific research, etc.</p>
              <h4>Can be used for :</h4>
              <p>Android applications</p>
              <p>Software products</p>
              <p>POS, Financial programs.</p>
            </div>
          </div>

        </div>

      </div>
      <div className={style.blog}>
        <div>
          <h1>Empowering and Serving All Sizes of Clients</h1>
          <p>Codiant’s network of development teams cater clients with comprehensive, integrated solutions across the entire software development chain through agile deliveries. No matter if you are a small scale startup, SME, or a large scale enterprise we develop and deliver simplified solutions with new technologies and business model innovations.</p>
        </div>
        <div className={style.new}>
          <div className={style.blogg}>
            <div className={style.img}></div>
            <div>
              <h2>Startups</h2>
              <p className={style.our}>Our solutions for startup innovators act as an accelerator to growth, capability building, and other strategic imperatives. View our custom startup solution offerings to stay ahead of the innovation.</p>
            </div>
          </div>
          <div className={style.blogg}>
            <div className={style.img}></div>
            <div>
              <h2>SME's</h2>
              <p className={style.our}>Find the next vectors of growth to strengthen your operations with our end-to-end SME specific solution offerings and digital expertise. Our customized solutions are designed to help you move with speed and confidence.</p>
            </div>
          </div>
          <div className={style.blogg}>
            <div className={style.img}></div>
            <div>
              <h2>Enterprise</h2>
              <p className={style.our}>Innovate and scale flexibly with our integrated suite of software development offerings for large-scale enterprises. Our exhaustive services expands and covers all thing Web and Mobility. Discover here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSolution;
