import React from 'react';
import '../../css/main/social-icons.css';

import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import { FaYelp } from "react-icons/fa";


function SocialIcons() {

    return (
        <>
                <a href="https://facebook.com"><AiFillFacebook /></a>
                <a href="https://twitter.com"><AiFillTwitterSquare /></a>
                <a href="https://instagram.com"><AiFillInstagram /></a>
                <a href="https://yelp.com"><FaYelp /></a>
        </>
    );
}
export default SocialIcons;

//dont add any background styling to the social icon container