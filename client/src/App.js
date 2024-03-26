import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLandingPage from './containers/MainLandingPage';
import AlloyWheelRefurbishment from './components/ServicesComponents/AlloyWheelRefurbishment';
import BrakeCaliperResprays from './components/ServicesComponents/BrakeCaliperResprays';
import ColourChanges from './components/ServicesComponents/ColourChanges';
import DiamondCutting from './components/ServicesComponents/DiamondCutting';
import CustomColours from './components/ServicesComponents/CustomColours';



function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/alloy-wheel-refurbishment" element={<AlloyWheelRefurbishment />} />
        <Route path="/brake-caliper-resprays" element={<BrakeCaliperResprays />} />
        <Route path="/colour-changes" element={<ColourChanges/>} />
        <Route path="/diamond-cutting" element={<DiamondCutting/>} />
        <Route path="/custom-colours" element={<CustomColours/>} />
     </Routes>
    </div>
    </Router>

  );
}

export default App;
