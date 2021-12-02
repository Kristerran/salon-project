import React from 'react';
import '../css/navbar.css';

import Logo from "../../Logo.js";
import MainMenu from './MainMenu.js';
import MobileNav from './MobileMenu.js';



function NavContainer() {
    return (
        <header className="header-wrapper">
            <div class="header-container">
                <div className="contact-header">
                    <div class="row">
                        <div className="align-content-left">
                            <div className="contact-info">
                                <span> Phone Number </span>
                                <span> | </span>
                                <span><a href="mailto:email@email.com">email@email.com</a></span>
                            </div>
                        </div>
                        <div className="align-content-left"><SocialIcons /></div>
                    </div>
                    <div className="header-sticky" style={{ display: 'none' }}></div>
                    <div className="nav-header">
                        <div className='row'>
                            <Logo />
                            <MainMenu />
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default NavContainer;