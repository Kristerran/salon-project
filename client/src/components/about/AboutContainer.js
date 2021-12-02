import React from 'react';

import '../../css/about/about.css';

function AboutContainer() {
    return(
        <>
            <header>
                <img src={Placeholder} alt="logo" />
                <h4 className="font-italic">About us</h4>
                <h1>SALON NAME</h1>
            </header>
            <StylistCard />
            <Hours />
            <Contact />
        </>
    )
}

export default AboutContainer;