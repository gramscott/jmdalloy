import React from 'react'
import Questions from '../components/FaqComponents/Questions'

const FaqContainer = () => {


    const questionsAndAnswers = [
        {
            question: "How long will the refurbishment take?",
            answer: "In most cases, refurbishment can be completed the same day. However, depending on the damage and the finish you require, it may take longer."
        },
        {
            question : "Do you remove the scratches from my wheels?",
            answer: "Yes, we remove scratches from your wheels as part of the refurbishment process."
        }, 
        {
            question: "Do you offer blow in services?",
            answer: "No, we don’t offer this service, sorry."
        },
        {
            question: "Do you offer a payment plan?",
            answer: "Yes, you can spread the cost of the work over 3 months interest-free. For example, a £300 job requires a £100 deposit followed by 2 monthly payments of £100."
        },
        {
            question: "Will I have to pay a deposit?",
            answer: "No deposit is required."
        }
    ];



  return (
    <div>
    <Questions questionsAndAnswers={questionsAndAnswers} />
    </div>
  )
}

export default FaqContainer