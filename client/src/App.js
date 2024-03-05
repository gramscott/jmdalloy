import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThankYou from './components/QuoteComponents/ThankYou';
import MainLandingPage from './containers/MainLandingPage';
import AlloyWheelRefurbishment from './components/ServicesComponents/AlloyWheelRefurbishment';
import BrakeCaliperResprays from './components/ServicesComponents/BrakeCaliperResprays';
import ColourChanges from './components/ServicesComponents/ColourChanges';



function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/alloy-wheel-refurbishment" element={<AlloyWheelRefurbishment />} />
        <Route path="/brake-caliper-resprays" element={<BrakeCaliperResprays />} />
        <Route path="/colour-changes" element={<ColourChanges/>} />
     </Routes>
    </div>
    </Router>

  );
}

export default App;
