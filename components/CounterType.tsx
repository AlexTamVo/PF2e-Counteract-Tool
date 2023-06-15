import React, { Fragment, useState } from 'react';
import styles from '../css/Questionnaire.module.css';

export function Questionnaire() {
  const [active, setActive] = useState("CounterType")
  return (
    <>
      {active === "CounterType" && <CounterType />}
      <h1 className={styles.header}>Let's get started</h1>
      <p className={styles.para}>What are you counteracting?</p>
    </>
  );
}
