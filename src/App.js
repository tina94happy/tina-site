import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MainPage from './MainPage';
import CodingPage from './CodingPage';
import MePage from './MePage';
import LearningPage from './LearningPage.js';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/me" element={<MePage />} />
        <Route path="/learning" element={<LearningPage />} />
      </Routes>
    </Router>
  );
}

export default App;