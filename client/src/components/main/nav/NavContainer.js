import React from 'react';
import '../../../css/main/nav.css';

// import Logo from "../../Logo.js";
import MainMenu from './MainMenu.js';
import SocialIcons from '../social-icons.js';



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
                                <span> | </span>
                                <SocialIcons />
                            </div>
                        </div>
                    </div>
                    <div className="header-sticky" style={{ display: 'none' }}></div>
                    <div className="nav-header">
                        <div className='row'>
                            {/* <Logo /> */}
                            <MainMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default NavContainer;