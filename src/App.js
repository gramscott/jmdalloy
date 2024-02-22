import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll'; 
import HomeContainer from './containers/HomeContainer';
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServicesContainer from './containers/ServicesContainer';
import QuoteContainer from './containers/QuoteContainer';
import ThankYou from '../components/QuoteComponents/ThankYou';



function App() {
  return (
    <Router>
    <div className="App">
     <NavBar/>
     <Routes>
     <Route path="/" exact>  
     <Element name="home"><HomeContainer/></Element>
     <Element name="services"><ServicesContainer/></Element>
     <Element name="quote"><QuoteContainer/></Element>
     </Route>
     <Route name="thank-you"><ThankYou/></Route>
     </Routes>
    </div>
    </Router>

  );
}

export default App;
