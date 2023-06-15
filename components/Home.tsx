import React, { Fragment } from 'react';
import { Link, Route, Routes } from'react-router-dom';
import styles from '../css/Home.module.css'

export function Home () {
  return (
    <>
      <h1 className={styles.homeTitle}>Pathfinder 2e Counteract Tool</h1>
      <Link to='/Questionnaire'>
        <button className={styles.container}>Start</button>
      </Link>
    </>
  );
}
