import React from 'react';
import HomeContainer from './HomeContainer';
import ServicesContainer from './ServicesContainer';
import QuoteContainer from './QuoteContainer';
import { Element } from 'react-scroll';

const MainLandingPage = () => {

  return (

    <div>
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