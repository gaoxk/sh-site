import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-scroll';

import ResourceStrings from './../ResourceStrings';
import logo from './../assets/logo.png';

class NavComponent extends Component {
	constructor (props) {
		super(props);
		this.state = {
			className: 'animated fadeInDown hero-nav',
			visibility: 'visible',
			lastscrollpos: 0,
			style: {
				backgroundColor: 'transparent'
			}
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
		let navs = [];
		const titles = [ResourceStrings.about,	ResourceStrings.hacker_stories,
			ResourceStrings.sponsors,	ResourceStrings.faq.toUpperCase(),
			ResourceStrings.contact];
		const locals = ['description-about', 'hacker-stories',
			'sponsors', 'faq', 'contact'];
		for(let i = 0; i < 5; i++) {
			navs.push(
				<NavItem eventKey={i+1} key={i}>
					<Link smooth={true} to={locals[i]}>
						<p>{titles[i]}</p>
					</Link>
				</NavItem>
			);
		}
		return (
			<Navbar fixedTop {... this.state}>
				<div className='nav-bod'>
					<Navbar.Header>
						<Link smooth={true} to='hero' className="nav-link">
							<Navbar.Brand>
	          	<img src={logo} alt='starterhacks logo'/>
							</Navbar.Brand>
						</Link>
      	</Navbar.Header>
      	<Nav pullRight>
						{navs}
    		</Nav>
				</div>
	  	</Navbar>
		);
	}
}

export default NavComponent;
