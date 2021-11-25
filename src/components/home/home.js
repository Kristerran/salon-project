import React from "react";
import { Card, Container, Button } from "react-bootstrap";

import '../../css/home/home.css';

import Navbar from "../navbar.js";
import Testimonials from "../home/testimonials.js"
import Footer from "../footer/footer.js";

import Example from '../../assets/images/example1.png';
import Placeholder from '../../assets/images/placeholder.png';



function Home() {
    return (
        <Container>
            <Navbar />
            <div class="hero" src={ Example } renderOverlay={() => (
                <View>
                    <Text>ENTER TEXT HERE</Text>
                    <Text>ENTER TEXT HERE</Text>
                    <Text><a href="/services">See out menu of services</a></Text>
                </View>)} />
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
                <Testimonials />
            </div>
            <Footer />
         </Container>
     );
}

export default Home;