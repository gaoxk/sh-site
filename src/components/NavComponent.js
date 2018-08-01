import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import ResourceStrings from './../ResourceStrings';
import logo from './../assets/logo.png';

class NavComponent extends Component {
	constructor (props) {
		super(props);
		this.state = {
			className: 'animated fadeInDown',
			visibility: 'visible',
			lastScrollPos: 0,
			lastMovePos: 0
		};
		this.animate = this.animate.bind(this);
	}

	componentDidMount () {
		window.addEventListener('scroll', this.animate, { passive: true });
	}

	componentWillUnmount () {
		window.removeEventListener('scroll', this.animate);
	}

	animate (event) {
		const scrollPos = window.scrollY;
		const ogcn = this.state.className + '';

		if (!ogcn.includes('fadeInDown') && ogcn != '' && scrollPos < this.state.lastScrollPos) {
			this.setState({
				className: 'animated fadeInDown'
			});
		} else if (scrollPos > this.state.lastScrollPos) {
			this.setState({
				className: 'animated fadeOutUp'
			});
		} else {
			this.setState({
				className: ''
			});
		}
		this.setState({lastScrollPos: scrollPos, lastMovePos: event.clientY});
	}

	render() {
		window.scroll({behaviour: 'smooth'});
		return (
			<Navbar fixedTop {... this.state}>
				<Navbar.Header>
					<Navbar.Brand>
	          	<img src={logo} />
					</Navbar.Brand>
      	</Navbar.Header>
      	<Nav pullRight>
					<NavItem eventKey={1} href='#about'>
						<p>{ResourceStrings.about}</p>
					</NavItem>
					<NavItem eventKey={2} href='#hacker-stories'>
						<p>{ResourceStrings.hacker_stories}</p>
					</NavItem>
					<NavItem eventKey={3} href='#sponsor'>
						<p>{ResourceStrings.sponsors}</p>
					</NavItem>
					<NavItem eventKey={4} href='#faq'>
						<p>{ResourceStrings.faq.toUpperCase()}</p>
					</NavItem>
					<NavItem eventKey={5} href='#contact'>
						<p>{ResourceStrings.contact}</p>
					</NavItem>
    		</Nav>
	  	</Navbar>
		);
	}
}

export default NavComponent;
