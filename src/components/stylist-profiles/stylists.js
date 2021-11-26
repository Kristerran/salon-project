import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//import cards
import StylistCard from './StylistCard.js';
//import model with prop data ?????
import StylistModel from '../../../server/models/Stylist.js';
const stylistInfo = StylistModel;

function Stylists() {

    return (
        <Container fluid>
            <h1> Meet Our <strong>Stylists </strong></h1>
            <Row style={{justifyContent: 'center'}}>
                <Col md={4}>
                    {stylistInfo.map((stylist) => (
                        <StylistCard name={stylist.name} impPath={stylist.image} specialty1={stylist.specialty1} specialty2={stylist.specialty2} specialty3={stylist.specialty3} years={stylist.years}/>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

s