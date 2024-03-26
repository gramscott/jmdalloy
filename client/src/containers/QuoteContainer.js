import React from 'react';
import QuoteLink from '../components/QuoteComponents/QuoteLink';
import { Element } from 'react-scroll';


const QuoteContainer = () => {
  
  return (
    <Element name='quote'>
      <QuoteLink />
    </Element>
  );
}

export default QuoteContainer;
