import React from 'react';

import Review from './ReviewCard.js';

import '../../css/reviews/reviews.css';

function ReviewContainer() {

    return (
        <>
            <div className="title">
                <h2>See what our clients have to say:</h2>
            </div>
            <Review />
        </>
    );
}

export default ReviewContainer;