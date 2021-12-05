import React from 'react';

import { Col, Row } from 'reactstrap';

import '../../css/booking/booking.css';

import BookingForm from './BookingForm.js';
import Calendar from './Calendar.js';
import Hours from "../about/Hours.js";

function Book() {
    return (
        <>
        <Calendar />
            {/* <Row>
                <Col md={12} style="textAlign: center">
                    <h2>Book An Appointment</h2>
                    <h6>BLURB</h6>
                </Col>
                <Col md={6}>
                    <BookingForm />
                </Col>
                <Col md={6}>
                    <Hours />
                </Col>
                <Col md={12}>
                </Col>
            </Row> */}
        </>
    )
}

export default Book;