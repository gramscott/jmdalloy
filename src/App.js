import './App.css';
import React from 'react';
import { Element } from 'react-scroll'; 
import HomeContainer from './containers/HomeContainer';
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServicesContainer from './containers/ServicesContainer';
import QuoteContainer from './containers/QuoteContainer';



function App() {
  return (
    <div className="App">
     <NavBar/>
     <Element name="home"><HomeContainer/></Element>
     <Element name="services"><ServicesContainer/></Element>
     <Element name="quote"><QuoteContainer/></Element>
    </div>
  );
}

export default App;
