import React from 'react';

// import Review from './ReviewCard.js';
import reviews from './reviews.js';

import '../../css/reviews/reviews.css';

function ReviewContainer() {

    return (
        <>
            <div className="title">
                <h2>See what our clients have to say:</h2>
            </div>
            <figure className="review-card">
                <blockquote>{reviews.quote}</blockquote>
                <div class="author">
                    <img src={reviews.imgPath} alt="image of person" />
                    <h5>{reviews.name} <span>{reviews.date}</span><span>{reviews.rating}</span></h5>
                </div>
            </figure>
        </>
    );
}

export default ReviewContainer;