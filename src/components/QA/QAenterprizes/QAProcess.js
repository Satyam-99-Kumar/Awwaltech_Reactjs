import React from 'react';
import QAStep from './QASteps';
import style from "./QAProcess.module.scss";

const steps = [
  {
    number: 1,
    title: 'Test strategy and test plans',
    description: 'At this stage, we define scope, QA measures, timelines, scope of non-functional tests, acceptance procedures, and timeframes for each test phase.',
  },
  {
    number: 2,
    title: 'Functional system modeling',
    description: 'This is a graphical system representation where each block indicates a distinct function.',
  },
  {
    number: 3,
    title: 'Acceptance criteria preparation',
    description: 'We define conditions a software product must satisfy to be accepted by our customers.',
  },
  {
    number: 4,
    title: 'Test cases',
    description: 'This stage defines steps to validate whether a software application is working as expected. The test case specifies the work procedure, expected results, and the conditions a tester must verify.',
  },
  {
    number: 5,
    title: 'Test execution',
    description: 'This stage covers all the manual and automated test cases, following quality KPIs. It also includes incident management, traceability maintenance, and quality reporting.',
  },
  {
    number: 6,
    title: 'Bug resolving and validation',
    description: 'At this stage, we fix all the issues identified in the previous step. After fixing, we validate the modifications to ensure they don’t cause new errors.',
  },
  {
    number: 7,
    title: 'QA report/acceptance',
    description: 'To ensure a solution is ready for release, we prepare reports covering numerous metrics, from the total number of successful and failed tests to bug listing and their priority.',
  }
];

const QAProcess = () => {
  return (
    <div className={style.qaprocess}>
      <h1 className={style.qaheading}>OUR QUALITY ASSURANCE PROCESS</h1>
      <p className={style.qapara}>
        Each project phase is subject to Quality Control — this is the <br/> principle the LeverX QA team follows when testing.
      </p>
      <p className={style.qapara}>Our Quality Assurance process includes six crucial steps:</p>
      {steps.map(step => (
        <QAStep key={step.number} number={step.number} title={step.title} description={step.description} />
      ))}
      <h1 className={style.qaheading2}>ENSURE THE QUALITY OF YOUR SOFTWARE AND APPS WITH THE EXPERIENCED LEVERX QA TEAM</h1>
      <button className={style.qabtn}>GET A CONSULTATION</button>
    </div>
  );
};

export default QAProcess;
