import React from "react";
import { Row, Col } from 'reactstrap';
import '../../css/main/footer.css';
import SocialIcons from "./social-icons.js";
// import Placeholder from "../assets/images/placeholder.png"


function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row ">
                     {/* <div className="col-sm-12 col-md-5"> */}
                        {/* <h6>About Us</h6>
                        <p className="text-justify">INSERT BIO OR INFO HERE</p> */}
                    {/* </div>  */}
                    <div className="col">
                        <h6>Contact Us</h6>
                        <ul className="list-unstyled">
                            <li>(916) 263-6858</li>
                            <li>2500 Franklin Blvd, Unit A,</li>
                            <li>Sacramento, CA 95818</li>
                            </ul>
                        </div>

                        <div className="col">
                            <h6>Hours</h6>
                            <ul className="list-unstyled">
                                <li>Sunday | Monday <span>Closed</span></li>
                                <li>Tuesday | Saturday 10:00 AM - 7:00 PM</li>
                                </ul>
                        </div>
                    
                    <div className=" col">
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
                <div className="row">
                    <p className="col-sm">
                    Copyright your website © 2021 <span> | </span>All Rights Reserved
                </p>
                </div>
                
                <SocialIcons className="social-icons"/>
            </div>
        </footer>
    );
}
export default Footer;


//source: https://codepen.io/scanfcode/pen/MEZPNd