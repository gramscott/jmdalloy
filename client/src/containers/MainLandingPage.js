import React from 'react';
import HomeContainer from './HomeContainer';
import ServicesContainer from './ServicesContainer';
import QuoteContainer from './QuoteContainer';
import { Element } from 'react-scroll';
import NavBar from '../NavBar/NavBar.js';

const MainLandingPage = () => {

  return (

    <div>
       <NavBar/>
    <Element name='home'>
        <HomeContainer/>
    </Element>
    <Element name='services'>
        <ServicesContainer/>
    </Element>
    <Element name='quote'>
        <QuoteContainer/>
    </Element>
    </div>
  )
}

export default MainLandingPage