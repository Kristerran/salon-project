import React from 'react';
import { Row, Col, Container } from 'reactstrap';

<<<<<<< HEAD
import { Row, Col } from 'reactstrap';

=======
>>>>>>> b4c2079718495881596fe96e48edcf41fe56ed47
// import Map from './Map.js';

function Hours() {
    return (
        <Container className="hours">
            <Row>
                {/* <Col md={8}><Map /></Col> */}
<<<<<<< HEAD
                <Col md={4}>
=======
                <Col md={6}>
>>>>>>> b4c2079718495881596fe96e48edcf41fe56ed47
                    <Row>
                        <Col>Our Hours</Col>
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
