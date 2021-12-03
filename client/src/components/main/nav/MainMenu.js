import React from 'react';
import { Collapse, Navbar,NavLink, NavbarToggler, NavbarBrand, Nav, NavItem,UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
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
                  <NavLink><Link to="/">Home<span> | </span></Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to="/BookContainer">Appointments<span> | </span></Link></NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>Services<span> | </span></DropdownToggle>
                  <DropdownMenu right>
                    <UncontrolledDropdown nav inDropdownItem direction="right">
                        <DropdownToggle nav caret>Hair Solutions</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link to="/menu">Cuts</Link>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <Link to="/menu">Color</Link>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <Link to="/menu">Styling</Link>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <Link to="/menu">Extensions</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <DropdownItem divider />
                        <DropdownItem>
                            <Link to="/menu">Hair Treatments</Link>
                        </DropdownItem>
                 </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>About<span> | </span></DropdownToggle>
                  <DropdownMenu down>
                        <DropdownItem>
                            <Link to="/about">Who We Are</Link>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <Link to="/stylistCards">Our Stylists</Link>
                            </DropdownItem>
                        <DropdownItem divider />
                        <UncontrolledDropdown nav inDropdownItem direction="right">
                        <DropdownToggle nav caret>Contact Us</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link to="/map">Location</Link>
                                    </DropdownItem>
                                          <DropdownItem>
                                          <Link to="/hours">
                                          Hours</Link></DropdownItem>
                                <DropdownItem>Contact Info </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                   </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav in Navbar>
                <DropdownToggle nav caret>Testimonials<span> | </span></DropdownToggle>
                  <DropdownMenu down>
                        <DropdownItem>Our Clients</DropdownItem>
                        <DropdownItem divider />
                        <UncontrolledDropdown nav in Navbar direction="right">
                        <DropdownToggle nav caret>Leave A Review</DropdownToggle>
                            <DropdownMenu down>
                                <DropdownItem>
                                    <Link to="www.google.com">Review Us on Google </Link>
                                    </DropdownItem>
                                <DropdownItem divider />
                                    <DropdownItem>
                                        <Link to="mailto:email@email.com">Email Us</Link>
                                    </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav in Navbar>
                <DropdownToggle nav caret>Products<span> | </span></DropdownToggle>
                    <DropdownMenu down>
                        <DropdownItem>
                            <Link to="/store">All Products</Link>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <Link to="/store">Shampoo & Conditioner</Link>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <Link to="/store">Styling Products</Link>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <Link to="/store">Accessories</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </>
      );
    }
  }