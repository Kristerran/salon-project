import React from 'react';

import { Col, Row } from 'reactstrap';

import '../../css/booking/booking.css';

// import BookingForm from './BookingForm.js';
import Calendar from './Calendar2.0.js';
import Hours from "../about/Hours.js";

function Book() {
    return (
        <>
        <div>
            <h2>
                Book Appointment
            </h2>
        </div>
        <Calendar />
        <Hours />
        </>
    )
}

export default Book;