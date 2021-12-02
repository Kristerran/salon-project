import React from "react";
import { Container } from "reactstrap";

import '../../css/home/testimonials.css';



function TestimonialCard(props) {
    return (
        <Container>
            <figure className="testimonial-card">
                <blockquote>{item.quote}</blockquote>
                <div class="author">
                    <img src={item.image} alt="image of person" />
                    <h5>{item.name} <span>{item.rating}</span></h5>
                </div>
            </figure>
        </Container>
    );
}

export default TestimonialCard;

source: https://codepen.io/ashcon/pen/MEoeaE