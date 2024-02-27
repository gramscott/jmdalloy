import React from 'react';
import QuoteForm from '../components/QuoteComponents/QuoteForm';
import { Element } from 'react-scroll';


const QuoteContainer = () => {
  
  return (
    <Element name='quote'>
      <QuoteForm />
    </Element>
  );
}

export default QuoteContainer;
