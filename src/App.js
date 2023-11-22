import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Page1 from './components/page1';
import Table from './components/table';
import FeedbackForm from './components/FeedbackPage';
import PlanetsPage from './components/pages/PlanetsPage';
import PieCharts from './components/pie';
import Asteroid from './components/pages/asteroids';
import Satellite from './components/pages/Satelliets';
import Rockets from './components/pages/Rockets';
import BlackHoleInfo from './components/pages/Blackhole';
import Upcome from './components/pages/Upcome';


const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/FeedbackForm" element={<FeedbackForm />} /> 
        <Route path="/PieCharts" element={<PieCharts />} /> 
        <Route path="/Table" element={<Table />} /> 
        <Route path="/planets" element={<PlanetsPage />} /> 
        <Route path="/Asteroid" element={<Asteroid />} /> 
        <Route path="/Satellite" element={<Satellite />} /> 
        <Route path="/Rockets" element={<Rockets />} /> 
        <Route path="/BlackHoleInfo" element={<BlackHoleInfo />} /> 
        <Route path="/Upcome" element={<Upcome />} /> 

        
       
        
      </Routes>
    </Router>
  );
};

export default App;
