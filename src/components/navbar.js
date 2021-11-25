import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import '../css/navbar.css';

//feel free to change the icons, just be sure to update the icons call tags in
//the script below
import { FaHome, FaStore} from 'react-icons/fa';
import { MdMenuBook, MdOutlineLocalGroceryStore } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BiLogIn } from 'react-icons/bi';


function NavPane() {

    return (

        <Navbar collapseOnSelect sticky="top" expand="lg">
            <>
                <Navbar.Brand href="/">INSERT TEXT FOR LOGO HERE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home<FaHome /></Nav.Link>
                        <Nav.Link href="/service-menu"><MdMenuBook />Services</Nav.Link>
                        <Nav.Link href="/profiles"><CgProfile />Stylists</Nav.Link>
                        <Nav.Link href="/store"><FaStore />Store</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login"><BiLogIn />Login</Nav.Link>
                        <Nav.Link href="/cart"><MdOutlineLocalGroceryStore />Cart</Nav.Link>
                    </Nav>
            </Navbar.Collapse>
            </>
        </Navbar>
    );
}

export default NavPane;