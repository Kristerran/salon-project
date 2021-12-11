import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Row, Col } from 'reactstrap';
import Placeholder from '../../images/prod5.jpg';
import Placeholder1 from '../../images/prod2.jpg';
import Placeholder2 from '../../images/prod3.jpg';
import Placeholder3 from '../../images/prod4.jpg';

function ShopCard() {
    return (
        <>
            <h2>Our Products</h2>
            {/* <h4>BLURB</h4> */}
        <Row>
            <Col md={3}>
                <Card>
                    <CardImg src={Placeholder} alt="Card image" />
                    <CardImgOverlay>
                        <CardTitle>Shampoo & Conditioner</CardTitle>
                        {/* <CardText> Lorem</CardText> */}
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <CardImg src={Placeholder1} alt="Card image" />
                    <CardImgOverlay>
                        <CardTitle>Styling Products</CardTitle>
                        {/* <CardText>Lorem</CardText> */}
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <CardImg src={Placeholder2} alt="Card image" />
                    <CardImgOverlay>
                        <CardTitle>Mens Haircare</CardTitle>
                        {/* <CardText>Lorem</CardText> */}
                    </CardImgOverlay>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <CardImg src={Placeholder3} alt="Card image" />
                    <CardImgOverlay>
                        {/* <CardTitle>Lorem</CardTitle> */}
                        <CardText>Hair Accessories</CardText>
                    </CardImgOverlay>
                </Card>
            </Col>
            </Row>
            </>
    )
}

export default ShopCard;