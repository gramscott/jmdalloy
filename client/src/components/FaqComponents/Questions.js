import React, { useState } from 'react';
import './Questions.css';

const Questions = ({ questionsAndAnswers }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActiveIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faq-container'>
      <h2>Frequently Asked Questions</h2>
      <div className='question-container'>
        {questionsAndAnswers.map((qa, index) => (
          <div key={index} className='faq-item'>
            <div className='faq-question' onClick={() => toggleActiveIndex(index)}>
              {activeIndex === index ? "−" : "+"} 
              {" "}{qa.question}
            </div>
            {activeIndex === index && (
              <div className='faq-answer'>
                {qa.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
