import React from 'react';
import Testimonials from '../../src/components/home/testimonial-card.js';

const testimonials = [
    {
        id: '',
        name: '',
        image: '',
        quote: '',
        rating: '',
    }
];

function Tests() {
    return <Testimonials testimonials={testimonials} />;
}

export default Tests;