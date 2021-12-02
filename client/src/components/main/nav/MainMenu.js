import React from 'react';

function MainMenu() {
    return (
        <nav className="main-menu">
            <ul>
                <li>
                    <a href="/home">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="/book">
                        <span>Book</span>
                    </a>
                </li>

                <li class='dropdown services'>
                    <a href="/service-menu" aria-haspopup="true">
                        <span>Services</span>
                    </a>
                    <ul className="submenu">
                        <li className="submenu-item">
                            <a href="#hair" aria-haspopup="true">
                                <span>Hair Solutions</span>
                            </a>
                            <ul className="submenu">
                                <li className="submenu-item">
                                    <a href="#haircut"><span>Haircuts</span></a>
                                </li>
                                <li className="submenu-item">
                                    <a href="#color"><span>Hair Color</span></a>
                                </li>
                                <li className="submenu-item">
                                    <a href="#styling"><span>Hair Styling</span></a>
                                </li>
                                <li className="submenu-item">
                                    <a href="#extensions"><span>Hair Extensions</span></a>
                                </li>
                            </ul>
                        </li>
                        <li className="submenu-item">
                            <a href="#treatments"> <span>Treatments</span></a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/about">
                        <span>About</span>
                    </a>
                    <ul className="submenu">
                        <li>
                            <a href="#bio"><span>About SALON NAME</span></a>
                        </li>
                        <li>
                            <a href="#profiles"><span>Our Stylists</span></a>
                        </li>
                        <li>
                            <a href="#hours"><span> Our Hours</span></a>
                        </li>
                        <li className="submenu-item">
                            <a href="#contact" aria-haspopup="true">
                                <span>Contact Us</span>
                            </a>
                            <ul className="submenu">
                                <li className="submenu-item">
                                    <a href="#map"><span>Location</span></a>
                                </li>
                                <li className="submenu-item">
                                    <a href="#contact-info"><span>Contact</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/testimonials">
                        <span>Reviews</span>
                    </a>
                    <ul className="submenu">
                        <li>
                            <a href="#testimonials"><span>Our clients</span></a>
                        </li>
                        <li>
                            <a href="#new-review"><span>Leave us a review</span></a>
                            <ul className="submenu">
                                <li>
                                    <a href="mailto:email@email.com"><span>Email Us</span></a>
                                </li>
                                <li>
                                    <a href="www.google.com/salonName"><span>Google review</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/store">
                        <span>Products</span>
                    </a>
                    <ul className="submenu">
                        <li>
                            <a href='/store'><span>Shop Our Salon Products</span></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default MainMenu;