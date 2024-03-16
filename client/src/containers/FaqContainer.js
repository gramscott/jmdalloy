import React from 'react'
import Questions from '../components/FaqComponents/Questions'

const FaqContainer = () => {


    const questionsAndAnswers = [
        {
            question: "How long will the refurbishment take?",
            answer: "The refurbishment process can take between 2-3 days, depending on the level of damage and the type of finish you require."
        },
        {
            question : "Do you remove the scratches from my wheels?",
            answer: "Yes, we remove scratches from your wheels as part of the refurbishment process."
        }, 
        {
            question: "Do you offer blow in services?",
            answer: "Yes, we offer blow in services for minor damage."
        },
        {
            question: "Do you offer a payment plan?",
            answer: "Yes, we offer a payment plan for all our customers."
        },
        {
            question: "Will I have to pay a deposit?",
            answer: "Yes, we require a deposit to secure your booking. The deposit will be deducted from the final cost of the refurbishment."
        }
    ];



  return (
    <div>
    <Questions questionsAndAnswers={questionsAndAnswers} />
    </div>
  )
}

export default FaqContainer