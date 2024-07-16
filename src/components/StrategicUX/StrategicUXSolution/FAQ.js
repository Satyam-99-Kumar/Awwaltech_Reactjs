
import React, { useState } from 'react';
import style from "./StrategicUXSolution.module.scss";

const faqs = [
  {
    question: "What services does Nickelfox offer in UI/UX design?",
    answer: "Nickelfox provides comprehensive UI/UX design services, from user research to collaborative design workshops, ensuring seamless user experiences and visually appealing interfaces."
  },
  {
    question: "What is the cost of your UI/UX design services?",
    answer: "Our UI/UX design services at Nickelfox are priced based on project scope, complexity, and specific requirements. We offer tailored solutions to fit your needs and budget. Book a consultation for an accurate cost estimate."
  },
  {
    question: "How do you ensure the quality of UI/UX designs?",
    answer: "We adhere to best practices, conduct usability testing, and gather user feedback. Our designers stay updated with trends and technologies to deliver high-quality UI/UX designs."
  },
  {
    question: "Can you work with existing design guidelines or branding?",
    answer: "Yes, we can create UI/UX designs that align with your brand identity. Our team incorporates your design guidelines, branding elements, and style guide to ensure consistency and cohesion."
  },
  {
    question: "How long does it typically take to complete a UI/UX design project?",
    answer: "The timeline for UI/UX design varies based on project complexity. We collaborate with clients to establish milestones and ensure timely delivery. Duration can range from weeks for small projects to months for larger ones."
  },
  {
    question: "How do I get started with your UI/UX design services?",
    answer: "To start, contact us through our website. Share your project overview, and we'll guide you through the next steps, including consultation and assessment. Let's discuss your UI/UX design needs."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={style.faqcontainer}>
      <h1>Frequently Asked Questions</h1>
      <div className={style.faq}>
        {faqs.map((faq, index) => (
          <div key={index} className={style.faqitem}>
            <div className={style.faqquestion} onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className={style.faqanswer}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
