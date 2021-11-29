import React from "react";
import { Card, Container, Button, Col, Row } from "react-bootstrap";

import '../../css/home/home.css';

import NavPane from "../components/navpane.js";
import HeroBanner from '../components/home/HeroBanner.js'

//import cards
import TestimonialCards from "../components/home/TestimonialCard.js";
//import model with prop data
import TestimonialModel from '../../server/models/Testimonials.js';
const testimonialInfo = TestimonialModel;

import Footer from "../components/footer/footer.js";

// layout idea- see Example from '../../assets/images/example1.png';
import Placeholder from '../../assets/images/placeholder.png';



const Home = () => (
        <Container>
            <NavPane />
            <Helmet>
                <title> ENTER TITLE HERE</title>
                <meta name="description" content="company name"></meta>
            </Helmet>
            <HeroBanner />
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
                <Card className="location">
                    <Card.Img variant="left" src={Placeholder} alt='google map snippet' />
                    <Card.Body>
                        <Card.Title>SOME WORDS</Card.Title>
                        <Button href="googlemaps.com/.....">Find us on Google Maps</Button>
                    </Card.Body>
                </Card>
            </div>
            <Row>
                <Col md={3}>
                    {testimonialInfo.map((each) => (
                        <TestimonialCards quote={each.quote} image={each.image} name={each.name} rating={each.rating}/>
                    ))}
                </Col>
            </Row>
            <Footer />
         </Container >
);

export default Home;