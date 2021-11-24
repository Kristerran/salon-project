import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../css/nav.css';

import { FaHome, Fa } from 'react-icons/fa';
import { MdMenuBook, MdOutlineLocalGroceryStore } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IoStorefrontSharp, IoLoginOutline } from 'react-icons/io';

//makes text appear when hovering over nav icons
function useHover() {
    const [hovering, setHovering] = useState(false)
    const onHoverProps = {
        onMouseEnter: () => setHovering(true),
        onMouseLeave: () => setHovering(false),
    }
    return [hovering, onHoverProps]
    };


function Navbar() {

    const [linkAIsHovering, linkAHoverProps] = useHover()
    const [linkBIsHovering, linkBHoverProps] = useHover()
    const [linkCIsHovering, linkCHoverProps] = useHover()
    const [linkDIsHovering, linkDHoverProps] = useHover()
    
    return (
        <Navbar>
            <Nav className="ml-auto" defaultActiveKey="#home">
                <Navbar.Brand href="/">INSERT NAME FOR LOGO HERE</Navbar.Brand>
                <Nav.Item>
                    <Nav.Link 
                </Nav.Item>
        </Navbar>
    );
}

export default Navbar;