import React from "react";
import { Card, Container } from "react-bootstrap";

import '../../css/home/profiles.css';

function StylistCard(props) {
    return (
        <Container>
            <Card className="stylist-cards">
                <img variant="top" src={props.imgPath} className="img-fluid" alt="card-img" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>Specializes In:
                        <span>
                            <li>{props.specialty1}</li>
                            <li>{props.specialty2}</li>
                            <li>{props.specialty3}</li>
                        </span>
                    </Card.Text>
                    <Card.Text>Years of Experience<span>{props.years}</span></Card.Text>
                    <Button>Book an Appointment</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default StylistCard;
