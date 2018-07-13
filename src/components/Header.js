import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler } from 'mdbreact';

export default class Header extends Component {
    constructor(props) {
        super(props);
          this.state = {
            collapse: false,
            isWideEnough: false
          };
    }
    
    render() {
          return (
                <div>
                  <header>
                      <Navbar color="black" dark expand="md" scrolling>
                        <NavbarBrand href="/">
                            <strong>Client Name</strong>
                        </NavbarBrand>
                        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    {/* <Collapse isOpen = { this.state.collapse } navbar>
                      <NavbarNav left>
                        <NavItem active>
                            <NavLink to="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="#">Link</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="#">Profile</NavLink>
                        </NavItem>
                      </NavbarNav>
                    </Collapse> */}
                  </Navbar>
              </header>
            </div>
          );
        }
}