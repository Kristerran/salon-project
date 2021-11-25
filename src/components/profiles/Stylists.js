import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//import cards
import StylistCard from './StylistCard.js';
//import model with prop data ?????
import Stylist from '../../../server/models/Stylist.js';

function Stylists() {

    return (
        <Container fluid>
            <h1> Meet Our <strong>Stylists </strong></h1>
            <Row style={{justifyContent: 'center'}}>
                <Col md={4}>
                    <StylistCard />
                </Col>
            </Row>
        </Container>
    );
}

