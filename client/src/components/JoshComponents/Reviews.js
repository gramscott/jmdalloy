import React from 'react';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className='review-container pt-5'>
    <h2>Reviews</h2>
      <iframe 
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmatthew.stewart.1000469%2Fposts%2Fpfbid025L4vWVefPS5JPE5QrnH548BjUPryUsS1XzQKqE13Pq2hfcAdSoXLumPLJYWhWx2sl&show_text=true&width=500" 
        width="500" 
        height="208" 
        style={{border: "none", overflow: "hidden"}} 
        scrolling="no" 
        frameBorder="0" 
        allowFullScreen={true} 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>

      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falastair.gourlay.52%2Fposts%2Fpfbid025H7vcFurAL75oDR13QtnUP7ND1Nsgj5YH9U9SfSb6eFaCCpYewitD4EGK5W53x1cl&show_text=true&width=500" 
       width="500" 
       height="195"
       style= {{border: "none", overflow: "hidden"}}
        scrolling="no"
        frameborder="0" 
         allowfullscreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
       ></iframe>
    </div>
  );
}

export default Reviews;
