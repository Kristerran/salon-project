import React from 'react';
import { Card, Card.Img, Card.ImgOverlay, Card.Title, Card.Text, Row, Col } from 'react-bootstrap';
import Placeholder from '../../assets/images/placeholder.png';

function ServiceCard() {
    return (
        <Row>
            <Col md={4}>
                <Card>
                    <Card.Img src={Placeholder} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Haircuts</Card.Title>
                        <Card.Text> Women's Signature Cuts</Card.Text>
                        <Card.Text>Men's Classic Cuts</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Img src={Placeholder} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title> Hair Color</Card.Title>
                        <Card.Text>All Over Color</Card.Text>
                        <Card.Text>Highlights</Card.Text>
                        <Card.Text>Balayage</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Img src={Placeholder} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Hair Treatments</Card.Title>
                        <Card.Text>Condition & Repair</Card.Text>
                        <Card.Text>Keratin Smoothing</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Img src={Placeholder} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Extensions</Card.Title>
                        <Card.Text>Hand-Tied</Card.Text>
                        <Card.Text>Clip-In's</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Img src={Placeholder} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Hair Styling</Card.Title>
                        <Card.Text>Signature Blowout</Card.Text>
                        <Card.Text>Special Events</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Img src={Placeholder} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Luxury Products</Card.Title>
                        <Card.Text>Hair Products</Card.Text>
                        <Card.Text>Accessories</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </Row>
    )
}

export default ServiceCard;