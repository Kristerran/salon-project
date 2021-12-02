import React from 'react';
import { Row, Col } from "reactstrap";


function About() {
    return(
        <section id="about-us" class="w-100 p-3">
            <Row>
                <Col md={7} className="d-flex align-items-center">
                    <img src={Placeholder} alt="logo" />
                    <h4 className="font-italic">About us</h4>
                    <h1>SALON NAME</h1>
                    <h4 className="text-justify">Lorem ipsum dolor sit amet, consectetur adip</h4>
                </Col>
                <Col md={4}>
                    <img src={Placeholder} alt="photo of owner" />
                </Col>
            </Row>
        </section>
    )
}

export default About;