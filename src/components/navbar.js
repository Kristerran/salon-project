import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../css/nav.css';

//feel free to change the icons, just be sure to update the icons call tags in
//the script below
import { FaHome} from 'react-icons/fa';
import { MdMenuBook, MdOutlineLocalGroceryStore } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IoStorefrontSharp, IoLoginOutline } from 'react-icons/io';


function Navbar() {

    return (

        <Navbar collapseOnSelect sticky="top" expand="lg">
            <Container>
                <Navbar.Brand href="/">INSERT TEXT FOR LOGO HERE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home<FaHome /></Nav.Link>
                        <Nav.Link href="/service-menu"><MdMenuBook />Services</Nav.Link>
                        <Nav.Link href="/profiles"><CgProfile />Stylists</Nav.Link>
                        <Nav.Link href="/store"><IoStorefrontSharp />Store</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login"><IoLoginOutline />Login</Nav.Link>
                        <Nav.Link href="/cart"><MdOutlineLocalGroceryStore />Cart</Nav.Link>
                    </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar;