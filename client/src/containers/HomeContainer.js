import React from "react";
import { Card, Container, Button, Row, CardImg, CardBody, CardTitle } from "reactstrap";

import '../css/home/home.css';
import HeroBanner from '../components/home/HeroBanner.js';
import HomeCarousel from '../components/store/HomeCarousel.js';

//import cards
// import TestimonialCards from "../components/home/TestimonialCardjs";
//import model with prop data


import Footer from "../components/footer.js";

// layout idea- see Example from '../../assets/images/example1.png';
import Placeholder from '../assets/images/placeholder.png';



function Home() {
    return (
        <Container>
            <div>
                <title> ENTER TITLE HERE</title>
                <meta name="description" content="company name"></meta>
            </div>
            <HeroBanner />
            <div><HomeCarousel /></div>
            <div>
                <Card className="profiles">
                    <CardImg variant="top" src={Placeholder} alt="card-image" />
                    <CardBody>
                        <CardTitle>ENTER BLURB HERE</CardTitle>
                        <Button href="/profiles">Meet our Team of Stylists</Button>
                    </CardBody>
                </Card>
                <Card className="products">
                    <CardImg variant="top" src={Placeholder} alt="card-image" />
                    <CardBody>
                        <CardTitle>ENTER BLURB HERE</CardTitle>
                        <Button href="/profiles">View our selection of products</Button>
                    </CardBody>
                </Card>
            </div>
            <div>
                <Card className="location">
                    <CardImg variant="left" src={Placeholder} alt='google map snippet' />
                    <CardBody>
                        <CardTitle>SOME WORDS</CardTitle>
                        <Button href="googlemaps.com/.....">Find us on Google Maps</Button>
                    </CardBody>
                </Card>
            </div>
            <Row>
                {/* <Col md={3}>
                    {testimonialInfo.map((each) => (
                        <TestimonialCards quote={each.quote} image={each.image} name={each.name} rating={each.rating}/>
                    ))}
                </Col> */}
            </Row>
            <Footer />
        </Container >
    );
}

export default Home;