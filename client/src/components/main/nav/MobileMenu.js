import React from 'react';

function MobileMenu() {
    return (
        <nav className="mobile-nav-container" aria-label="Main Menu Mobile">
            <button class="mobile-selector" aria-expanded="false" aria-controls="mobile-menu-saloon-main-menu">
                <span>Go To</span>
                <div className="selector-down"></div>
            </button>
            <ul id="mobile-menu-salon-main-menu">
                <li id="mobile-menu-item" className="mobile-nav-item current-nav-item">
                    <a href="/"><span className="menu-text">Home</span></a>
                </li>
                <li id="mobile-menu-item" className="mobile-nav-item current-nav-item">
                    <a href="/book"><span className="menu-text">Book</span></a>
                </li>
                <li className="mobile-nav-item menu-item-has-children">
                    <a href="/service-menu">
                        <span>Services</span>
                    </a>
                    <button href="#" aria-label="Open submenu of services" aria-expanded="false" className="open-submenu" />
                    <ul className="submenu" style={{display:'none'}}>
                        <li className="mobile-menu-item menu-item-has-children">
                            <a href="#hair" aria-haspopup="true">
                                <span>Hair Solutions</span>
                            </a>
                            <ul className="submenu" style={{display:'none'}}>
                                <li className="mobile-menu-item">
                                    <a href="/hair/#haircut"><span>Haircuts</span></a>
                                </li>
                                <li className="mobile-menu-item">
                                    <a href="/hair/#color"><span>Hair Color</span></a>
                                </li>
                                <li className="mobile-menu-item">
                                    <a href="/hair/#styling"><span>Hair Styling</span></a>
                                </li>
                                <li className="mobile-menu-item">
                                    <a href="/hair/#extensions"><span>Hair Extensions</span></a>
                                </li>
                            </ul>
                        </li>
                        <li className="mobile-menu-item menu-item-has-children">
                            <a href="/treatments"> <span>Treatments</span></a>
                            <button href="#" aria-label="Open submenu of hair treatments" aria-expanded="false" class="open-submenu" />
                        </li>
                    </ul>
                </li>
                <li className="mobile-nav-item menu-item-has-children">
                    <a href="/about">
                        <span>About</span>
                    </a>
                    <button href="#" aria-label="Open submenu of hair treatments" aria-expanded="false" class="open-submenu" />
                    <ul className="submenu">
                        <li className="mobile-menu-item">
                            <a href="#bio"><span>About SALON NAME</span></a>
                        </li>
                        <li className="mobile-menu-item">
                            <a href="#profiles"><span>Our Stylists</span></a>
                        </li>
                        <li className="mobile-menu-item">
                            <a href="#hours"><span> Our Hours</span></a>
                        </li>
                        <li className="mobile-menu-item">
                            <a href="#contact" aria-haspopup="true">
                                <span>Contact Us</span>
                            </a>
                            <button href="#" aria-label="Open submenu of hair treatments" aria-expanded="false" class="open-submenu" />
                            <ul className="submenu">
                                <li className="mobile-menu-item">
                                    <a href="#map"><span>Location</span></a>
                                </li>
                                <li className="mobile-menu-item">
                                    <a href="#contact-info"><span>Contact</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="mobile-nav-item menu-item-has-children">
                    <a href="/testimonials">
                        <span>Reviews</span>
                    </a>
                    <button href="#" aria-label="Open submenu of hair treatments" aria-expanded="false" class="open-submenu" />
                    <ul className="submenu">
                        <li className="mobile-menu-item">
                            <a href="#testimonials"><span>Our clients</span></a>
                        </li>
                        <li className="mobile-menu-item">
                            <a href="#new-review"><span>Leave us a review</span></a>
                            <button href="#" aria-label="Open submenu of hair treatments" aria-expanded="false" class="open-submenu" />
                            <ul className="submenu">
                                <li className="mobile-menu-item">
                                    <a href="mailto:email@email.com"><span>Email Us</span></a>
                                </li>
                                <li className="mobile-menu-item">
                                    <a href="www.google.com/salonName"><span>Google review</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="mobile-nav-item menu-item-has-children">
                    <a href="/store">
                        <span>Products</span>
                    </a>
                    <button href="#" aria-label="Open submenu of hair treatments" aria-expanded="false" class="open-submenu" />
                    <ul className="submenu">
                        <li className="mobile-menu-item">
                            <a href='/store'><span>Shop Our Salon Products</span></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default MobileMenu;