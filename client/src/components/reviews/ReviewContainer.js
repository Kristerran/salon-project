import React from 'react';

import '../../css/reviews/reviews.css';

function ReviewContainer() {

    return (
        <>
            <div className="title">
                <h2>See what our clients have to say:</h2>
            </div>
            <figure className="review-card">
                <blockquote>{review.quote}</blockquote>
                <div class="author">
                    <img src={review.image} alt="image of person" />
                    <h5>{review.name} <span>{review.date}</span><span>{review.rating}</span></h5>
                </div>
            </figure>
        </>
    );
}

export default ReviewContainer;