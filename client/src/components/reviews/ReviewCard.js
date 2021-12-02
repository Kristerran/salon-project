import React from "react";

import './data.js';

function ReviewCard(review) {
    return (
        <>
            <figure className="review-card">
                <blockquote>{review.quote}</blockquote>
                <div class="author">
                    <img src={review.imgPath} alt="image of person" />
                    <h5>{review.name} <span>{review.date}</span><span>{review.rating}</span></h5>
                </div>
            </figure>
        </>
    );
}

export default ReviewCard;

// source: https://codepen.io/ashcon/pen/MEoeaE