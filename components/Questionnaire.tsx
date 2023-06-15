import React, { Fragment, useState } from 'react';
import styles from '../css/Questionnaire.module.css';
import { BasicSelect } from './BasicSelect';

function CounterType() {
  return (
    <>
      <h1 className={styles.header}>Let's get started</h1>
      <p className={styles.para}>What are you counteracting?</p>
      <BasicSelect/>
    </>
  )
}

export function Questionnaire() {
  const [active, setActive] = useState<string>("CounterType");

  return (
    <div>
      {active === "CounterType" && <CounterType />}
    </div>
  );
}
