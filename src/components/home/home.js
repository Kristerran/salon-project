import React from "react";
import { Card, Container, Button } from "react-bootstrap";

import '../../css/home/home.css';

import NavPane from "../navpane.js";
import TestimonialCards from "../home/testimonial-card.js"
import Footer from "../footer/footer.js";

// layout idea- see Example from '../../assets/images/example1.png';
import Placeholder from '../../assets/images/placeholder.png';



function Home() {
    return (
        <Container>
            <NavPane />
            <div class="hero" src={ Placeholder } renderOverlay={() => (
                <div>
                    <h1>ENTER TEXT HERE</h1>
                    <h3>ENTER TEXT HERE</h3>
                    <p><a href="/services">See out menu of services</a></p>
                </div>)} />
            <div>
                <Card className="profiles">
                    <Card.Img variant="top" src={Placeholder} alt="card-image" />
                    <Card.Body>
                        <Card.Title>ENTER BLURB HERE</Card.Title>
                        <Button href="/profiles">Meet our Team of Stylists</Button>
                    </Card.Body>
                </Card>
                <Card className="products">
                    <Card.Img variant="top" src={Placeholder} alt="card-image" />
                    <Card.Body>
                        <Card.Title>ENTER BLURB HERE</Card.Title>
                        <Button href="/profiles">View our selection of products</Button>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <TestimonialCards />
            </div>
            <Footer />
         </Container>
     );
}

export default Home;