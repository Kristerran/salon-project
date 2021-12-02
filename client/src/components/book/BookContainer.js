import React from 'react';

import { Col, Row } from 'reactstrap';

import BookApptForm from './BookApptForm.js';
import Calendar from './Calendar.js';
import Hours from "../about/Hours.js";

function BookContainer() {
    return (
        <>
            <Row>
                <Col md={12} style="textAlign: center">
                    <h2>Book An Appointment</h2>
                    <h6>BLURB</h6>
                </Col>
                <Col md={6}>
                    <BookApptForm />
                </Col>
                <Col md={6}>
                    <Hours />
                </Col>
                <Col md={12}>
                    <Calendar />
                </Col>
            </Row>
        </>
    )
}

export default BookCard;