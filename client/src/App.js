import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThankYou from './components/QuoteComponents/ThankYou';
import MainLandingPage from './containers/MainLandingPage';
import AlloyWheelRefurbishment from './components/ServicesComponents/AlloyWheelRefurbishment';



function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/alloy-wheel-refurbishment" element={<AlloyWheelRefurbishment />} />
     </Routes>
    </div>
    </Router>

  );
}

export default App;
