import style from "./Nickefox.module.scss";
import React from 'react';

export default function Nickefox () {
    const Nickfoxdesigns = [
        {
            index: '01',
            title: "Creative and Innovative Designs",
            description: "We create visually captivating interfaces that stand out in the competitive market. Our designs combine functionality and creativity to deliver memorable user experiences."
        },
        {
            index: '02',
            title: "Technical Proficiency",
            description: "We are proficient in using industry-standard design tools and knowledge to create designs that are not only visually appealing but also technically feasible and easy to implement."
        }, 
        {
            index: '03',
            title: "Attention to Detail",
            description: "We ensure that every aspect of the design, from typography and color schemes to interactive elements to ensure the overall usability and quality of the final product."
        },
        {
            index: '04',
            title: "Professionalism and Reliability",
            description:  "Nickelfox is known for their professionalism, reliability, and commitment to delivering high-quality work, maintaining transparent communication throughout the design process."
        },
        {
            index: '05',
            title: "Designs on a Budget",
            description:"Nickelfox understands your budget constraints. With our competitive pricing, you can access top-notch UI/UX design services tailored to your needs."
        }, 
        {
            index: '06',
            title: "Quick Turnaround Time",
            description: "Short on time but not on quality? Nickelfox is here to deliver. Our UI/UX design team is known for their ability to produce exceptional designs within tight timelines."
        },
    ];
    return(
        <>
            <div className={style.UXdesign}>
              <h2 className={style.designheading}>Why Nickefox for UI/UX Design?</h2>
              <p className={style.designsubtitle}>Looking to enhance your brand’s online presence? 
                Build a strong online presence with Nickelfox, the premier UI/UX design company 
                offering web and mobile app design services.</p>
              <div className={style.Designs}>
              { Nickfoxdesigns.map(( Nickfoxdesigns,index) => (
                <div key={index} className={style.designcard}>
                    <h1>{ Nickfoxdesigns.index}</h1>
                    <h3>{ Nickfoxdesigns.title}</h3>
                    <p>{ Nickfoxdesigns.description}</p>
                </div>
              ))}
            </div> 
            </div>
       </>
    )
}





















