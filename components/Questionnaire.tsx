import React, { Fragment, useState } from 'react';
import styles from '../css/Questionnaire.module.css';
import { BasicSelect } from './BasicSelect';

function CounterType(props: { setActive: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <>
      <h1 className={styles.header}>Let's get started</h1>
      <p className={styles.para}>What are you counteracting?</p>
      <BasicSelect setActive={props.setActive}/>
    </>
  )
}

function CounterSpell(props: { setActive: React.Dispatch<React.SetStateAction<string>> }) {
    return (
      <>
        <h1 className={styles.header}>Great Let's figure out the DC!</h1>
        <p className={styles.para}>What spell DC does the monster have?</p>
        <BasicSelect setActive={props.setActive}/>
      </>
    )
}

export function Questionnaire() {
  const [active, setActive] = useState<string>("CounterType");

  return (
    <div>
      {active === "CounterType" && <CounterType setActive={setActive} />}
      {active === "CounterSpell" && <CounterSpell setActive={setActive} />}
      {active === "CounterAffliction" && <CounterSpell setActive={setActive} />}
    </div>
  );
}