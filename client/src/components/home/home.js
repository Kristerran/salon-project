import React from "react";
import { Card, Container, Button, Row, CardImg, CardBody, CardTitle, Col } from "reactstrap";

import '../../css/home/home.css';

import HeroBanner from './HeroBanner.js';
import Placeholder from '../assets/images/placeholder.png';


function Home() {
    return (
        <Container>
            <HeroBanner />
            <HomeCarousel/>
            <Row style={{marginTop: '5%' }}>
                <Col md={4}>
                    <Card className="profiles">
                        <CardImg style={{height: '300px'}} variant="top" src={Placeholder} alt="card-image" />
                        <CardBody>
                            <CardTitle>ENTER BLURB HERE</CardTitle>
                            <Button href="/profiles">Meet our Team of Stylists</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="products">
                        <CardImg style={{height: '300px'}} variant="top" src={Placeholder} alt="card-image" />
                        <CardBody>
                            <CardTitle>ENTER BLURB HERE</CardTitle>
                            <Button href="/profiles">View our selection of products</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="location">
                        <CardImg style={{height: '300px'}} variant="left" src={Placeholder} alt='google map snippet' />
                        <CardBody>
                            <CardTitle>SOME WORDS</CardTitle>
                            <Button href="googlemaps.com/.....">Map</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    {/* {testimonialInfo.map((each) => (
                        <TestimonialCards quote={each.quote} image={each.image} name={each.name} rating={each.rating}/> */}
                    ))}
                </Col>
            </Row>
        </Container >
    );
}

export default Home;