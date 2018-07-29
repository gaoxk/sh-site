import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import ResourceStrings from './../ResourceStrings';
import logo from './../assets/logo.png';

class NavComponent extends Component {
	constructor (props) {
		super(props);
		this.state = {
			visibility: 'visible'
		};
		this.animate = this.animate.bind(this);
	}

	componentDidMount () {
		window.addEventListener('mousemove', this.animate, { passive: true });
		window.addEventListener('scroll', this.animate, { passive: true });
	}

	componentWillUnmount () {
		window.removeEventListener('mousemove', this.animate);
		window.removeEventListener('scroll', this.animate);
	}

	animate (event) {
		const scrollPos = window.scrollY;
		if (scrollPos > window.innerHeight * 0.75) {
			this.setState({
				className: 'animated fadeOutUp'
			});
		} else {
			this.setState({
				className: 'animated fadeInDown'
			});
			return null;
		}

		if (event.clientY < 100) {
			this.setState({
				className: 'animated fadeInDown'
			});
		} else {
			this.setState({
				className: 'animated fadeOutUp'
			});
		}
	}

	render() {
		return (
			<Navbar fixedTop {... this.state}>
				<Navbar.Header>
					<Navbar.Brand>
	          	Logo
					</Navbar.Brand>
      	</Navbar.Header>
      	<Nav pullRight>
					<NavItem eventKey={1} href='#proj1'>
						<p>{ResourceStrings.about}</p>
					</NavItem>
					<NavItem eventKey={2} href='#hacker-stories'>
						<p>{ResourceStrings.hacker_stories}</p>
					</NavItem>
					<NavItem eventKey={3} href='#sponsors'>
						<p>{ResourceStrings.sponsors}</p>
					</NavItem>
					<NavItem eventKey={4} href='#faq'>
						<p>{ResourceStrings.faq.toUpperCase()}</p>
					</NavItem>
					<NavItem eventKey={5} href='#contact'>
						<p>{ResourceStrings.contact}</p>
					</NavItem>
					<NavItem eventKey={6} href='google.com'>
						<p>{ResourceStrings.apply_now}</p>
					</NavItem>
    		</Nav>
	  	</Navbar>
		);
	}
}

export default NavComponent;
