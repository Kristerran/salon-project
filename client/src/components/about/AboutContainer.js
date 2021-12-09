import React from 'react';

import Placeholder from '../../assets/images/lai.jpeg';
import StylistCard from './StylistCard.js';
import Hours from './Hours.js';
import Contact from './Contact.js';
import Map from './Map.js'
import '../../css/about/about.css';

function About() {
    return(
        <>
        <div className="d-flex container justify-content-evenly flex-wrap-reverse">
        <StylistCard />
        <header>
                {<img src={Placeholder} alt="logo" />}
                <h4 className="font-italic">About us</h4>
                <h1>Lai Hairstylist</h1>

            </header>
        </div>
            <div className="d-flex container-sm ">
            <Map />
            <Hours />
            
            </div>
            <React.Fragment>
                
                
                
                <Contact />
            </React.Fragment>
        </>
    )
}

export default About;