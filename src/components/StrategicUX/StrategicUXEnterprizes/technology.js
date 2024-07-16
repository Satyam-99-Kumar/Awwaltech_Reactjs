import style from "./technology.module.scss";
import React from 'react';

export default function Technology () {
    const Technologies = [
        {
            title: "Sketch",
            description:  "For creating wireframes, prototypes, and high-fidelity UI designs."
        },
        {
            title: "Adobe Creative Suite",
            description: "Adobe tools for creating stunning visual designs and graphics."
        }, 
        {
            title: "Figma",
            description: "For creating interactive prototypes and design systems."
        },
        {
            title: "InVision",
            description:  "For creating interactive prototypes and showcase design concepts to clients."
        },
        {
            title: "Zeplin",
            description: "To generate design specifications, assets, and style guides for smooth development."
        }, 
        {
            title: "HTML/CSS",
            description: "To create pixel-perfect designs in collaboration with developers."
        },
    ];
    return(
        <>
            <div className={style.UXtechnology}>
              <h2 className={style.technologyheading}>Our Technology Stack for UX/UI Design</h2>
              <p className={style.technologysubtitle}>Choosing the right UI/UX design company is 
                crucial for the success of your business. Trust Nickefox to deliver exceptional 
                designs that will captivate your users. We have a modern technology stack for 
                developing UI/UX designs.</p>
              <div className={style.Technologies}>
              {Technologies.map((Technologies,index) => (
                <div key={index} className={style.Technologycard}>
                    <h3>{Technologies.title}</h3>
                    <p>{Technologies.description}</p>
                </div>
              ))}
            </div> 
              <h2 className={style.technologysubheading}>Professional web and mobile app design services at your disposal</h2>  
              <button className={style.technologybtn}>CONNECT WITH EXPERTS</button>
            </div>
       </>
    )
}





















