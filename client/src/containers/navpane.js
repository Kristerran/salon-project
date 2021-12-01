import React from 'react';
import { Navbar, Nav, NavbarBrand, NavbarToggler, NavLink, Collapse} from 'reactstrap';
import '../css/navbar.css';

//feel free to change the icons, just be sure to update the icons call tags in
//the script below
import { FaHome, FaStore} from 'react-icons/fa';
import { MdMenuBook, MdOutlineLocalGroceryStore } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BiLogIn } from 'react-icons/bi';


function NavPane() {

    return (

        <Navbar sticky="top" expand="lg">
            <>
                <NavbarBrand href="/">INSERT TEXT FOR LOGO HERE</NavbarBrand>
                <NavbarToggler aria-controls="responsive-navbar-nav" />
                <Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink href="/home">Home<FaHome /></NavLink>
                        <NavLink href="/service-menu"><MdMenuBook />Services</NavLink>
                        <NavLink href="/profiles"><CgProfile />Stylists</NavLink>
                        <NavLink href="/store"><FaStore />Store</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink href="/login"><BiLogIn />Login</NavLink>
                        <NavLink href="/cart"><MdOutlineLocalGroceryStore />Cart</NavLink>
                    </Nav>
            </Collapse>
            </>
        </Navbar>
    );
}

export default NavPane;