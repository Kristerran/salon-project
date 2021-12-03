import React from "react";

import '../../css/home/home.css';

import HeroBanner from './HeroBanner.js';
import AboutCard from './AboutCard.js';
import ServiceCard from './ServiceCard.js';
import BookCard from './BookCard.js';
import ShopCard from './ShopCard.js';



function HomeContainer() {
    return (
        <main class="w-100 p-3">
            <HeroBanner />
            <AboutCard />
            <ServiceCard />
            <BookCard />
            <ShopCard />
        </main>
            )
        }

export default HomeContainer;