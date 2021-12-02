import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Row, Col } from 'reactstrap';
import Placeholder from '../../assets/images/placeholder.png';

function ShopCard() {
    return (
        <Row>
            <Col md={3}>
                <Card>
                    <CardImg src={Placeholder} alt="Card image" />
                    <CardImgOverlay>
                        <CardTitle>Shampoo & Conditioner</CardTitle>
                        <CardText> Lorem</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <CardImg src={Placeholder} alt="Card image" />
                    <CardImgOverlay>
                        <CardTitle>Styling Products</CardTitle>
                        <CardText>Lorem</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <CardImg src={Placeholder} alt="Card image" />
                    <CardImgOverlay>
                        <CardTitle>Mens Haircare</CardTitle>
                        <CardText>Lorem</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <CardImg src={Placeholder} alt="Card image" />
                    <CardImgOverlay>
                        <CardTitle>Lorem</CardTitle>
                        <CardText>Hand-Tied</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>
    )
}

export default ShopCard;