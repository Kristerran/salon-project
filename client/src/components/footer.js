import React from "react";

import { Row, Col } from 'reactstrap';

import '../css/footer/footer.css';

import SocialIcons from "../containers/social-icons.js";
// import Placeholder from "../assets/images/placeholder.png"


function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About Us</h6>
                        <p className="text-justify">INSERT BIO OR INFO HERE</p>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <h6>LINKS</h6>
                        <ul className="footer-links">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/service-menu">Services</a></li>
                            <li><a href="/portfolios">Stylists</a></li>
                            <li><a href="/store">Shop Products</a></li>
                        </ul>
                    </div>
                    {/* <img className="col-xs-6 col-md-3" src={Placeholder} alt="logo">INSERT LOGO HERE</img> */}
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <SocialIcons className="social-icons"/>
                    </div>
                    <Row>
                        <Col md='12' style={{textAlign: 'center', paddingTop:'30px'}}>Copyright your website © 2018 All Rights Reserved</Col>
                    </Row>
                </div>
            </div>
        </footer>
    );
}
export default Footer;


//source: https://codepen.io/scanfcode/pen/MEZPNd