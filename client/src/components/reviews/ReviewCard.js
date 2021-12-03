import React from "react";

import reviews from './reviews.js';

function Review() {
    return (
        <figure className="review-card">
            <blockquote>{reviews.quote}</blockquote>
            <div class="author">
                <img src={reviews.imgPath} alt="image of person" />
                <h5>{reviews.name} <span>{reviews.date}</span><span>{reviews.rating}</span></h5>
            </div>
        </figure>
    );
}

export default Review;

// source: https://codepen.io/ashcon/pen/MEoeaE