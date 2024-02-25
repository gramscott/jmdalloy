import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThankYou from './components/QuoteComponents/ThankYou';
import MainLandingPage from './containers/MainLandingPage';



function App() {
  return (
    <Router>
    <div className="App">
     <NavBar/>
     <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
     </Routes>
    </div>
    </Router>

  );
}

export default App;
