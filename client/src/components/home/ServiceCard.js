import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Row, Col } from 'reactstrap';
import Placeholder1 from '../../images/cut.jpg';
import Placeholder2 from '../../images/color.jpg';
import Placeholder3 from '../../images/treatment.jpg';
import Placeholder4 from '../../images/styless.jpg';
import '../../css/services/services.css';

function ServiceCard() {
    return (
        <>
            <h2>Services</h2>
        <Row>
            <Col  md={3} >
                <Card>
                    <CardImg src={Placeholder1} alt="Card image" fluid />
                    <CardImgOverlay>
                        <CardTitle>Haircuts</CardTitle>
                        <CardText> Women's Signature Cuts</CardText>
                        <CardText>Men's Classic Cuts</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col md={3} >
                <Card>
                    <CardImg src={Placeholder2} alt="Card image" fluid /> {/* style={{height:'px'}} */}
                    <CardImgOverlay>
                        <CardTitle> Hair Color</CardTitle>
                        <CardText>All Over Color</CardText>
                        <CardText>Highlights</CardText>
                        <CardText>Balayage</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col  md={3} >
                <Card>
                    <CardImg src={Placeholder3} alt="Card image"  fluid />
                    <CardImgOverlay>
                        <CardTitle>Hair Treatments</CardTitle>
                        <CardText>Condition & Repair</CardText>
                        <CardText>Keratin Smoothing</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col md={3} >
                <Card>
                    <CardImg src={Placeholder4} alt="Card image" fluid />
                    <CardImgOverlay>
                        <CardTitle>Hair Styling</CardTitle>
                        <CardText>Signature Blowout</CardText>
                        <CardText>Special Events</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            </Row>

            {/* <Row> */}

            {/* <Col lg={4} md={3} sm={12} xs={12}>
                <Card>
                    <CardImg src={Placeholder} alt="Card image" fluid />
                    <CardImgOverlay>
                        <CardTitle>Extensions</CardTitle>
                        <CardText>Hand-Tied</CardText>
                        <CardText>Clip-In's</CardText>
                    </CardImgOverlay>
                </Card>
            </Col> */}

            {/* <Col lg={4} md={3} sm={12} xs={12}>
                <Card>
                    <CardImg src={Placeholder} alt="Card image" fluid />
                    <CardImgOverlay>
                        <CardTitle>Hair Styling</CardTitle>
                        <CardText>Signature Blowout</CardText>
                        <CardText>Special Events</CardText>
                    </CardImgOverlay>
                </Card>
            </Col> */}

            {/* <Col lg={4} md={3} sm={12} xs={12}>
                <Card>
                    <CardImg src={Placeholder} alt="Card image" fluid />
                    <CardImgOverlay>
                        <CardTitle>Luxury Products</CardTitle>
                        <CardText>Hair Products</CardText>
                        <CardText>Accessories</CardText>
                    </CardImgOverlay>
                </Card>
            </Col> */}
            {/* </Row> */}
        </>
    )
}

export default ServiceCard;