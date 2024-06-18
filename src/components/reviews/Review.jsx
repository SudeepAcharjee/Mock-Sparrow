import React, { useState } from 'react';
import './review.css';

const Review = () => {        
    return (
<section className="reviews" data-aos="fade-up">
  <h2>Our happy clients say about us</h2>
  <div className="review-container">
    <div className="review">
      <div className="stars">★★★★★</div>
      <p>
        “You made it so simple. My new site is so much faster and easier to work
        with than my old site. I just choose the page, make the change.”
      </p>
      <div className="client">
        <img src="https://via.placeholder.com/50" alt="Leslie Alexander" />
        <div className="client-info">
          <h3>Leslie Alexander</h3>
          <p>Freelance React Developer</p>
        </div>
      </div>
    </div>
    <div className="review">
      <div className="stars">★★★★★</div>
      <p>
        “Simply the best. Better than all the rest. I’d recommend this product
        to beginners and advanced users.”
      </p>
      <div className="client">
        <img src="https://via.placeholder.com/50" alt="Jacob Jones" />
        <div className="client-info">
          <h3>Jacob Jones</h3>
          <p>Digital Marketer</p>
        </div>
      </div>
    </div>
    <div className="review">
      <div className="stars">★★★★★</div>
      <p>
        “I cannot believe that I have got a brand new landing page after getting
        Omega. It was super easy to edit and publish.”
      </p>
      <div className="client">
        <img src="https://via.placeholder.com/50" alt="Jenny Wilson" />
        <div className="client-info">
          <h3>Jenny Wilson</h3>
          <p>Graphic Designer</p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
export default Review;