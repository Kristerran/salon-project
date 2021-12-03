import React from "react";

import { Row, Col } from 'reactstrap';

import '../../css/main/footer.css';

import SocialIcons from "./social-icons.js";
// import Placeholder from "../assets/images/placeholder.png"


function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <h6>About Us</h6>
                        <p className="text-justify">INSERT BIO OR INFO HERE</p>
                        <SocialIcons className="social-icons"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <h6>Contact Us</h6>
                        <Row>
                            <Col>Phone</Col>
                            <Col>555<span> | </span>555<span> | </span>555</Col>
                        </Row>
                        <Row>
                            <Col>Address</Col>
                            <Col>2 water st <span> | </span>City <span> | </span>State</Col>
                        </Row>
                        <Row>
                            <Col><h6>Hours</h6></Col>
                        </Row>
                        <Row>
                            <Col>Sunday <span> | </span>Monday</Col>
                            <Col>Closed</Col>
                        </Row>
                        <Row>
                            <Col>Tuesday <span> | </span>Saturday</Col>
                            <Col>10:00 AM <span> | </span>7:00 PM</Col>
                        </Row>
                    </div>
                    <div className=" col-sm-12 col-md-3">
                        <h6>LINKS</h6>
                        <ul className="footer-links">
                            <li><a href="../home/HomeContainer.js">Home</a></li>
                            <li><a href="../services/ServicesContainer.js">Services</a></li>
                            <li><a href="../about/AboutContainer.js">About</a></li>
                            <li><a href="../store/StoreContainer.js">Products</a></li>
                        </ul>
                    </div>
                    {/* <img className="col-xs-6 col-md-3" src={Placeholder} alt="logo">INSERT LOGO HERE</img> */}
                </div>
                <Row>
                    <Col md='12' style={{textAlign: 'center', paddingTop:'30px'}}>Copyright your website © 2021 <span> | </span>All Rights Reserved</Col>
                </Row>
            </div>
        </footer>
    );
}
export default Footer;


//source: https://codepen.io/scanfcode/pen/MEZPNd