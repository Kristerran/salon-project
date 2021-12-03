import React from 'react';

import Placeholder from '../../assets/images/placeholder.png';
// import StylistCard from './StylistCard.js';
import Hours from './Hours.js';
import Contact from './Contact.js';
import Map from './Map.js'
import '../../css/about/about.css';

function AboutContainer() {
    return(
        <>
            <header>
                <img src={Placeholder} alt="logo" />
                <h4 className="font-italic">About us</h4>
                <h1>SALON NAME</h1>
            </header>
            {/* <StylistCard /> */}
            <Map />
            <Hours />
            <Contact />
        </>
    )
}

export default AboutContainer;