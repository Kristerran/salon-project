import React from 'react';
import { Col, Row } from 'reactstrap';

function Contact() {
    return (
        <>
            <Row>
                <Col md={4}>Phone</Col>
                <Col md={4}>Email</Col>
                <Col md={4}>Location</Col>
            </Row>
            <Row>
                <Col md={4}>916-234-6858</Col>
                <Col md={4}>Email@email.com</Col>
                <Col md={4}>2500 Franklin Blvd, Unit A, Sacramento 95818</Col>
            </Row>
            <Row>
                <Col md={4}>Appointment Cancellation Policy</Col>
                <Col md={6}>BLURB</Col>
            </Row>
        </>
    )
}

export default Contact;