import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteForm from '../components/QuoteComponents/QuoteForm';
import { Element } from 'react-scroll';


const QuoteContainer = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('apikey', '099dd778-2dab-49cf-b4cc-9784c27b5566'); 

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();

      if (response.ok) {
        navigate('/thank-you');
      } else {
        console.error('Server responded with an error', responseData.message);
      }
    } catch (error) {
      console.error('Form submission failed', error);
    }

  };

  return (
    <Element name='quote'>
      <QuoteForm onSubmit={handleSubmit}/>
    </Element>
  );
}

export default QuoteContainer;
