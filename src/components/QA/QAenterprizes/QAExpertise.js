import React from 'react';
import QAExpertiseCard from './QAExpertiseCard';
import style from'./QAExpertise.module.scss';
import image1 from "../../../assets/QA/image-1.webp"
import image2 from "../../../assets/QA/image-2.webp"
import image3 from "../../../assets/QA/image-3.webp"
import image4 from "../../../assets/QA/image-4.webp"
const expertiseData = [
  {
    title: 'DEPLOYMENT MODEL',
    points: [
      'Cloud',
      'On-premise',
      'Continuous integration/ Continuous Delivery (CI/CD)',
    ],
    image: image1, 
  },
  {
    title: 'TECHNOLOGICAL STACK',
    points: [
      'Client-side (web, mobile)',
      'Middleware (API, gateway)',
      'Server-side (application and database servers)',
      'SAP technologies (S/4HANA/HANA DB)',
    ],
    image: image2, 
  },
  {
    title: 'PROJECT SET-UP',
    points: [
       'Multi-language speaking team',
       'Working across different cultures and continents',
       'Supporting multiple time zones in one project',
    ],
    image: image3, 
  },
  {
    title: 'APPROACHES',
    points: [
      'Classic approach',
      'Test Driven Development',
      'Waterfall / Agile (Scrum / Kanban)',
      'SAP Activate',
    ],
    image: image4
  }
];

const QAExpertise = () => {
  return (
    <div className={style.qaexpertise}>
      <h1>OUR QUALITY ASSURANCE EXPERTISE AT A GLANCE</h1>
      <div className={style.qaexpertisecards}>
        {expertiseData.map((data, index) => (
          <QAExpertiseCard key={index} title={data.title} points={data.points} image={data.image} />
        ))}
      </div>
    </div>
  );
};

export default QAExpertise;
