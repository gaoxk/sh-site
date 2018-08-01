import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';

import ResourceStrings from './../ResourceStrings';
import logo from './../assets/logo.png';

class NavComponent extends Component {
	constructor (props) {
		super(props);
		this.state = {
			className: 'animated fadeInDown hero-nav',
			visibility: 'visible',
			lastscrollpos: 0
		};
		this.onScroll = this.onScroll.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
	}

	componentDidMount () {
		window.addEventListener('mousemove', this.onMouseMove, { passive: true });
		window.addEventListener('scroll', this.onScroll, { passive: true });
	}

	componentWillUnmount () {
		window.removeEventListener('mousemove', this.onMouseMove);
		window.removeEventListener('scroll', this.onScroll);
	}

	onMouseMove (event) {
		if (event.pageY < window.innerHeight*1.5) {
			return null;
		}
		if (event.clientY > 100) {
			this.setState({
				className: 'animated fadeOutUp'
			});
		} else {
			this.setState({
				className: 'animated fadeInDown'
			});
		}
	}

	onScroll (event) {
		const scrollPos = window.scrollY;
		const ogcn = this.state.className + '';
		if (!ogcn.includes('fadeInDown') && ogcn !== ''
				&& scrollPos < this.state.lastscrollpos) {
			this.setState({
				className: 'animated fadeInDown'
			});
		} else if (scrollPos > this.state.lastscrollpos) {
			this.setState({
				className: 'animated fadeOutUp'
			});
		} else {
			this.setState({
				className: ''
			});
		}
		if (scrollPos < window.innerHeight * 0.33){
			this.setState({
				style: {
					backgroundColor: 'transparent'
				}
			});
		} else {
			this.setState({
				style: {
					backgroundColor: 'white'
				}
			});
		}
		this.setState({lastscrollpos: scrollPos});
	}

	render() {
		window.scroll({behaviour: 'smooth'});
		return (
			<Navbar fixedTop {... this.state}>
				<Navbar.Header>
					<Scrollchor to='#hero' className="nav-link">
						<Navbar.Brand>
	          	<img src={logo} alt='starterhacks logo'/>
						</Navbar.Brand>
					</Scrollchor>
      	</Navbar.Header>
      	<Nav pullRight>
					<NavItem eventKey={1}>
						<Scrollchor to='#about' className="nav-link">
							<p>{ResourceStrings.about}</p>
						</Scrollchor>
					</NavItem>
					<NavItem eventKey={2}>
						<Scrollchor to='#hacker-stories' className="nav-link">
							<p>{ResourceStrings.hacker_stories}</p>
						</Scrollchor>
					</NavItem>
					<NavItem eventKey={3}>
						<Scrollchor to='#sponsor' className="nav-link">
							<p>{ResourceStrings.sponsors}</p>
						</Scrollchor>
					</NavItem>
					<NavItem eventKey={4}>
						<Scrollchor to='#faq' className="nav-link">
							<p>{ResourceStrings.faq.toUpperCase()}</p>
						</Scrollchor>
					</NavItem>
					<NavItem eventKey={5}>
						<Scrollchor to='#contact' className="nav-link">
							<p>{ResourceStrings.contact}</p>
						</Scrollchor>
					</NavItem>
    		</Nav>
	  	</Navbar>
		);
	}
}

export default NavComponent;
