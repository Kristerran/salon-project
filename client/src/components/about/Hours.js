import React from 'react';
import { Row, Col, Container } from 'reactstrap';

// import Map from './Map.js';

function Hours() {
    return (
        <Container className="hours">
            <Row>
                {/* <Col md={8}><Map /></Col> */}
                <Col md={6}>
                    <Row>
                        <Col>Hours</Col>
                    </Row>
                    <Row>
                        <Col>Sunday</Col>
                        <Col>Closed</Col>
                    </Row>
                    <Row>
                        <Col>Monday</Col>
                        <Col>Closed</Col>
                    </Row>
                    <Row>
                        <Col>Tuesday</Col>
                        <Col>10:00 AM - 7:00 PM</Col>
                    </Row>
                    <Row>
                        <Col>Wednesday</Col>
                        <Col>10:00 AM - 7:00 PM</Col>
                    </Row>
                    <Row>
                        <Col>Thursday</Col>
                        <Col>10:00 AM - 7:00 PM</Col>
                    </Row>
                    <Row>
                        <Col>Friday</Col>
                        <Col>10:00 AM - 7:00 PM</Col>
                    </Row>
                    <Row>
                        <Col>Saturday</Col>
                        <Col>10:00 AM - 7:00 PM</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Hours;
