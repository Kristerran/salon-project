import React from 'react';
import '../css/social-icons.css';

import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import { FaYelp } from "react-icons/fa";


function SocialIcons() {

    return (
        <>
            <ul>
                <li><a href="https://facebook.com"><AiFillFacebook /></a></li>
                <li><a href="https://twitter.com"><AiFillTwitterSquare /></a></li>
                <li><a href="https://instagram.com"><AiFillInstagram /></a></li>
                <li><a href="https://yelp.com"><FaYelp /></a></li>
            </ul>
        </>
    );
}
export default SocialIcons;

//dont add any background styling to the social icon container