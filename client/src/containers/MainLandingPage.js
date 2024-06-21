import React from 'react';
import HomeContainer from './HomeContainer';
import ServicesContainer from './ServicesContainer';
import QuoteContainer from './QuoteContainer';
import { Element } from 'react-scroll';
import NavBar from '../NavBar/NavBar.js';
import ReviewContainer from './ReviewContainer.js';
import FaqContainer from './FaqContainer.js';
// import Footer from '../Footer/Footer.js';

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
    <Element name='testimonials'>
        <ReviewContainer/>
    </Element>
    <Element name='faq'>
        <FaqContainer/>
    </Element>
    {/* <Footer/> */}
    </div>
  )
}

export default MainLandingPage