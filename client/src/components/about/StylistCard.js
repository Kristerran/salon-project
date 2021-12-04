import React from "react";
import { Card, Container, Button, CardBody, CardTitle, CardText } from "reactstrap";

import stylist from './data.js';

function StylistCard() {
    return (
        <Container className="stylists">
            <Card className="stylist-cards">
                <img variant="top" src={stylist.imgPath} className="img-fluid" alt="card-img" />
                <CardBody>
                    <CardTitle>{stylist.name}</CardTitle>
                    <CardText>Specializes In:
                        <span>
                            <li>{stylist.specialty}</li>
                        </span>
                    </CardText>
                    <CardText>Bio<span>{stylist.bio}</span></CardText>
                    <CardText>Years of Experience<span>{stylist.year}</span></CardText>
                    <Button><a href='../book/BookContainer.js'>Book an Appointment</a></Button>
                </CardBody>
            </Card>
        </Container>
    );
}

export default StylistCard;
