import React from 'react';
import { Collapse, Navbar, NavLink, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <>

        <Navbar color="light" light expand="md">
          <NavbarBrand to="/">ENTER LOGO HERE</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/">Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/book">Appointments</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/services">Services</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/about">About Us</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/reviews">Contact Us</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/store">Products</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}