import React from "react";
import { Container } from "react-bootstrap";

import '../../css/home/testimonials.css';

import '../home/testimonial-props.js';


function Testimonials(props) {
    return (
        <Container>
            {props.testimonials.map(item => (
                <figure className="testimonial-cards">
                    <blockquote key={item.id}>{item.quote}</blockquote>
                    <div class="author">
                        <img src={item.image} alt="image of person" />
                        <h5>{item.name} <span>{item.rating}</span></h5>
                    </div>
                </figure>
            ))}
        </Container>
    );
}

export default Testimonials;

//source: https://codepen.io/ashcon/pen/MEoeaE