import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import RankingsPage from './pages/RankingsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rankings" element={<RankingsPage />} />
    </Routes>
  );
}

export default App;
