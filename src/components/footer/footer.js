import React from "react";

import '../../css/footer/footer.css';

import SocialIcons from "../social-icons";
import Placeholder from "../../assets/images/placeholder.png"


function Footer() {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About Us</h6>
                        <p class="text-justify">INSERT BIO OR INFO HERE</p>
                    </div>
                    <div class="col-xs-6 col-md-3">
                        <h6>LINKS</h6>
                        <ul class="footer-links">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/service-menu">Services</a></li>
                            <li><a href="/portfolios">Stylists</a></li>
                            <li><a href="/store">Shop Products</a></li>
                        </ul>
                    </div>
                        <img class="col-xs-6 col-md-3" src={Placeholder} alt="logo">INSERT LOGO HERE</img>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by ENTER COMPANY NAME HERE</p>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;


//source: https://codepen.io/scanfcode/pen/MEZPNd