import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import ResourceStrings from './ResourceStrings';
import logo from './assets/logo.png';

class NavComponent extends Component {
    render() {
        return (
            <Navbar>
          			<Navbar.Header>
                    <Navbar.Brand>
            					Logo
                    </Navbar.Brand>
          	 		</Navbar.Header>
          	    <Nav pullRight>
                    <NavItem eventKey={1} href='#proj1'>
                        <p>{ResourceStrings.about}</p>
                    </NavItem>
                    <NavItem eventKey={2} href='#proj1'>
                        <p>{ResourceStrings.hacker_stories}</p>
                    </NavItem>
                    <NavItem eventKey={3} href='#proj1'>
                        <p>{ResourceStrings.partners}</p>
                    </NavItem>
                    <NavItem eventKey={4} href='#contact'>
                        <p>{ResourceStrings.faq.toUpperCase()}</p>
                    </NavItem>
                    <NavItem eventKey={5} href='#contact'>
                        <p>{ResourceStrings.contact}</p>
                    </NavItem>
                    <NavItem eventKey={6} href='#contact'>
                        <p>{ResourceStrings.apply_now}</p>
                    </NavItem>
          	    </Nav>
	           </Navbar>
        );
    }
}

export default NavComponent;
