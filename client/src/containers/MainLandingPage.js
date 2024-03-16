import React from 'react';
import HomeContainer from './HomeContainer';
import ServicesContainer from './ServicesContainer';
import QuoteContainer from './QuoteContainer';
import { Element } from 'react-scroll';
import NavBar from '../NavBar/NavBar.js';
import JoshContainer from './JoshContainer.js';
import FaqContainer from './FaqContainer.js';

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
    <Element name='about-josh'>
        <JoshContainer/>
    </Element>
    <Element name='faq'>
        <FaqContainer/>
    </Element>
    </div>
  )
}

export default MainLandingPage