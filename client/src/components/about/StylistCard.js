import React from "react";
import { Card, Container, Button } from "reactstrap";

import './data.js';

function StylistCard(stylist) {
    return (
        <Container>
            <Card className="stylist-cards">
                <img variant="top" src={stylist.imgPath} className="img-fluid" alt="card-img" />
                <Card.Body>
                    <Card.Title>{stylist.name}</Card.Title>
                    <Card.Text>Specializes In:
                        <span>
                            <li>{stylist.specialty}</li>
                        </span>
                    </Card.Text>
                    <Card.Text>Bio<span>{stylist.bio}</span></Card.Text>
                    <Card.Text>Years of Experience<span>{stylist.year}</span></Card.Text>
                    <Button><a href='../book/BookContainer.js'>Book an Appointment</a></Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default StylistCard;
