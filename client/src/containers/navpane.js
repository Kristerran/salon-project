import React from 'react';
import { Navbar, Nav, NavbarBrand, NavLink} from 'reactstrap';
import '../css/navbar.css';

//feel free to change the icons, just be sure to update the icons call tags in
//the script below
import { FaHome, FaStore} from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';



function NavPane() {

    return (

        <Navbar sticky="top" expand="lg">
            <>
                <NavbarBrand href="/">INSERT TEXT FOR LOGO HERE</NavbarBrand>
                    <Nav className="me-auto">
                        <NavLink href="/home"><FaHome />Home</NavLink>
                        <NavLink href="/service-menu"><MdMenuBook />Services</NavLink>
                        <NavLink href="/profiles"><CgProfile />Stylists</NavLink>
                        <NavLink href="/store"><FaStore />Store</NavLink>
                    </Nav>
            </>
        </Navbar>
    );
}

export default NavPane;