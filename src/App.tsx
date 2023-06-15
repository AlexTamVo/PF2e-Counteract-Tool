import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home'
import { Questionnaire } from '../components/Questionnaire'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Questionnaire" element={<Questionnaire />} />
    </Routes>
  );
}
