import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

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
            <NavbarBrand href="/">ENTER LOGO HERE</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/BookContainer.js">Appointments</NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>Services</DropdownToggle>
                  <DropdownMenu right>
                    <UncontrolledDropdown nav inDropdownItem direction="right">
                        <DropdownToggle nav caret>Hair Solutions</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <NavLink href="/menu/#cut">Cuts</NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <NavLink href="/menu/#color">Color</NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <NavLink href="/menu/#styling">Styling</NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <NavLink href="/menu/#extensions">Extensions</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <DropdownItem divider />
                        <DropdownItem>
                            <NavLink href="/menu/#treatments">Hair Treatments</NavLink>
                        </DropdownItem>
                 </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>About</DropdownToggle>
                  <DropdownMenu down>
                        <DropdownItem>
                            <NavLink href="/about">Who We Are</NavLink>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <NavLink href="/about/stylistCard">Our Stylists</NavLink>
                            </DropdownItem>
                        <DropdownItem divider />
                        <UncontrolledDropdown nav inDropdownItem direction="right">
                        <DropdownToggle nav caret>Contact Us</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/menu/map">Location</NavLink>
                                    </DropdownItem>
                                          <DropdownItem>
                                          <NavLink href="/menu/hours">
                                          Hours</NavLink></DropdownItem>
                                <DropdownItem>Contact Info </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                   </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav in Navbar>
                <DropdownToggle nav caret>Testimonials</DropdownToggle>
                  <DropdownMenu down>
                        <DropdownItem>Our Clients</DropdownItem>
                        <DropdownItem divider />
                        <UncontrolledDropdown nav in Navbar direction="right">
                        <DropdownToggle nav caret>Leave A Review</DropdownToggle>
                            <DropdownMenu down>
                                <DropdownItem>
                                    <NavLink href="www.google.com">Review Us on Google </NavLink>
                                    </DropdownItem>
                                <DropdownItem divider />
                                    <DropdownItem>
                                        <NavLink href="mailto:email@email.com">Email Us</NavLink>
                                    </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav in Navbar>
                <DropdownToggle nav caret>Products</DropdownToggle>
                    <DropdownMenu down>
                        <DropdownItem>
                            <NavLink href="/storeContainer">All Products</NavLink>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <NavLink href="/storeContainer/">Shampoo & Conditioner</NavLink>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <NavLink href="/storeContainer/#style">Styling Products</NavLink>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <NavLink href="/storeContainer/#accessories">Accessories</NavLink>
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