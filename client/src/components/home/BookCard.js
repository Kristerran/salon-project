import React from 'react';

import { Col, Row, Button } from 'reactstrap';

// import BookingForm from '../book/BookingForm.js';

function BookCard() {
    return (
        <Row>
            <Col md={12} style={{textAlign: "center"}}>
                <h2>Book An Appointment</h2>
            </Col>
            <Col />
            <Col md={12}>
                <h4>Hey Beautiful!</h4>
                <p>Nice to see you again! You may request an appointment with one of our stylists by using the "request new appointment" form or by contacting the salon directly!</p>
                <Button><a href="/bookContainer">See Our Availability</a></Button>
            </Col>
            <Col md={6}>
                {/* <BookingForm /> */}
            </Col>
            <Col />
        </Row>
    )
}

export default BookCard;