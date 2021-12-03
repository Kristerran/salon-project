import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Row, Col } from 'reactstrap';
import Placeholder from '../../assets/images/placeholder.png';

function ServiceCard() {
    return (
        <>
            <h2>Our Services</h2>
            <h4>BLURB</h4>
        <Row>
            <Col md={5} >
                <Card>
                    <CardImg src={Placeholder} alt="Card image" style={{height:'400px'}}/>
                    <CardImgOverlay>
                        <CardTitle>Haircuts</CardTitle>
                        <CardText> Women's Signature Cuts</CardText>
                        <CardText>Men's Classic Cuts</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <CardImg src={Placeholder} alt="Card image" style={{height:'400px'}} />
                    <CardImgOverlay>
                        <CardTitle> Hair Color</CardTitle>
                        <CardText>All Over Color</CardText>
                        <CardText>Highlights</CardText>
                        <CardText>Balayage</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <CardImg src={Placeholder} alt="Card image"  style={{height:'400px'}}/>
                    <CardImgOverlay>
                        <CardTitle>Hair Treatments</CardTitle>
                        <CardText>Condition & Repair</CardText>
                        <CardText>Keratin Smoothing</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <CardImg src={Placeholder} alt="Card image" style={{height:'400px'}}/>
                    <CardImgOverlay>
                        <CardTitle>Extensions</CardTitle>
                        <CardText>Hand-Tied</CardText>
                        <CardText>Clip-In's</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <CardImg src={Placeholder} alt="Card image" style={{height:'400px'}}/>
                    <CardImgOverlay>
                        <CardTitle>Hair Styling</CardTitle>
                        <CardText>Signature Blowout</CardText>
                        <CardText>Special Events</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col md={5}>
                <Card>
                    <CardImg src={Placeholder} alt="Card image" style={{height:'400px'}}/>
                    <CardImgOverlay>
                        <CardTitle>Luxury Products</CardTitle>
                        <CardText>Hair Products</CardText>
                        <CardText>Accessories</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            </Row>
        </>
    )
}

export default ServiceCard;