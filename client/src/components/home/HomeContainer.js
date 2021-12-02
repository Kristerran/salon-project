import React from "react";


import '../../css/home/home.css';
import Placeholder from '../assets/images/placeholder.png';

import HeroBanner from './HeroBanner.js';
import About from './About.js';



function HomeContainer() {
    return (
        <main class="w-100 p-3">
            <HeroBanner />
            <About />
        </main>
            )
        }

export default HomeContainer;