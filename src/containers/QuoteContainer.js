import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import QuoteForm from '../components/QuoteComponents/QuoteForm';

const QuoteContainer = () => {
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('apikey', '099dd778-2dab-49cf-b4cc-9784c27b5566'); // Ensure API key is included

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        history.push('/thank-you');
      } else {
        console.error('Server responded with an error');
      }
    } catch (error) {
      console.error('Form submission failed', error);
    }
  };

  return (
    <div>
      <QuoteForm onSubmit={handleSubmit}/>
    </div>
  );
}

export default QuoteContainer;
