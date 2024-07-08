import React from 'react';
import styles from './ITTimeline.module.scss';

const steps = [
  {
    title: "Creating an SAP implementation and adoption strategy",
    subtitle: "To identify business requirements, set clear goals, deadlines, and project success criteria, our SAP consultants create an adoption strategy. It allows the contractor to be sure that every stage of the project is properly executed, without taking shortcuts or compromising quality.",
    date: "step #1"
  },
  {
    title: "Evaluating business challenges and benefits",
    subtitle: "We identify your current business challenges and outline the improvement area to develop project success criteria and assess your project after implementation. The assessment will show the project's pros and cons that still need to be improved.",
    date: "step #2"
  },
  {
    title: "Engaging shareholders and key employees",
    subtitle: "To ensure effective implementation of SAP solutions, we dive deep into the organizational structure and business processes to understand how the company works as a whole. This results in consolidating the insights into the technical requirements for the implementation project.",
    date: "step #3"
  },
  {
    title: "Guiding organizational change in the company",
    subtitle: "To support the changes brought by the successful implementation of SAP solutions, we help ensure effective communication between the company management, key company departments, and the integrator.",
    date: "step #4"
  },
  {
    title: "Setting clear implementation milestones",
    subtitle: "We assist our customers in defining four clear milestones to guide project development and indicate its advancement. It helps create the project structure and keep it on schedule with individual deadlines.",
    date: "step #5"
  },
  {
    title: "Managing the scope and scale of the project",
    subtitle: "We create an implementation plan to keep the project under the budget and schedule. It also helps manage the project scaling to eliminate the ever-growing features and add them after the main implementation is completed to further streamline your business.",
    date: "step #6"
  }
];

const ITTimeline = () => {
  return (
    <section className={styles.timeline}>
      <div className={styles.container}>
        <h2 className={styles.heading}>YOUR SAP IMPLEMENTATION JOURNEY WITH OUR CONSULTING SERVICES</h2>
        <div className={styles.timelineCardWrap}>
          {steps.map((step, index) => (
            <div key={index} className={styles.timelineCard}>
              <p className={styles.timelineCardDate}>{step.date}</p>
              <div className={styles.timelineCardContent}>
                <h3 className={styles.timelineCardTitle}>{step.title}</h3>
                <div className={styles.timelineCardSubtitle}>
                  {step.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITTimeline;
