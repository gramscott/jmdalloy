import React from 'react';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className='review-container pt-5'>
      <h2>Testimonials</h2>
      <div className="reviews-list row">
      <div className="col-lg-6">
      <p className='review'>
      "Contacted Josh last minute to see if he could help out and it was no hassle to him. His standards are unreal and would definitely recommend to anyone looking for a professional and trustworthy service. You would never know the wheel had been damaged it looks brand new. Thanks for you help Josh" - <strong>Matthew</strong>
      </p>

      <p className='review-divider'> 
      </p>

      <p className='review'>
      "Highly recommended. Josh did a great job, he was recommended by another company as they couldn't get the colour to match my wheel. Was done quickly and professionally. Have recommended to friends already and passed on details. My partner who does bodywork has also passed on details as well."  - <strong>Debbie</strong>
      </p>

      <p className='review-divider'> 
      </p>

      <p className='review'>
      "We recently had all four alloys refurbished at JMD Alloys and what an amazing transformation.
    I can’t rate the work highly enough plus Josh was so welcoming and polite. 
    Without a doubt we will be back to JMD Alloys with other family cars" -  <strong>Zandra</strong>
      </p>
      </div>

      

      <div className="col-lg-6">
      <p className='review'>
      "Brilliant service, had my callipers sprayed. Great attention to detail as well as straight forward and simple service. Dropped off and finished within the same day, extremely quick. Would recommend to anyone" - <strong>Ben</strong>
      </p>

      <p className='review-divider'> 
      </p>

      <p className='review'>
      "Really good, efficient and cost effective service without compromising quality. Alloys looked absolutely flawless in the end. Josh is very easy to deal with and extremely accommodating. Would highly recommend." - <strong>Wesley</strong>
      </p>

      <p className='review-divider'> 
      </p>

      <p className='review'>
      "Josh did all 4 of my alloys and they look amazinggg! Great price and reliable service, highly highly recommend"
      - <strong> Natalie</strong> 
    </p> 
      </div>

<p className="reviews-footer">
        Want to read more? Check out <a href="https://www.facebook.com/profile.php?id=100087670551689&sk=reviews" target="_blank" rel="noopener noreferrer">Facebook</a> and <a href="https://www.google.com/search?q=jmd+alloys" target="_blank" rel="noopener noreferrer">Google</a>.
      </p>
      </div>

    </div>
  );
}

export default Reviews;
