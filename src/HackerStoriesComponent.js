import React, { Component } from 'react';
import ResourceStrings from './ResourceStrings';
import CarouselItemComponent from './CarouselItemComponent';
import CarouselItemlGreyComponent from './CarouselItemGreyComponent';
import CarouselBarComponent from './CarouselBarComponent';

class HackerStoriesComponent extends Component {
	constructor (props) {
		super(props);
		this.state = {
			toggle: false,
			trans: 107,
			transform: 'translateX(-107%)',
			ltr: true,
			rtl: false,
			opacity: 0.5
		};
		this.onClick = this.onClick.bind(this);
		this.onScroll = this.onScroll.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
	}

	componentDidMount () {
		window.addEventListener('click', this.onClick, { passive: true });
		window.addEventListener('scroll', this.onScroll, { passive: true });
		window.addEventListener('keydown', this.onKeyDown, { passive: true });
	}

	componentWillUnmount () {
		window.removeEventListener('click', this.onClick);
		window.removeEventListener('scroll', this.onScroll);
		window.removeEventListener('keydown', this.onKeyDown);
	}

	animate (cond1, cond2, event) {
		if(this.state.toggle) {
			this.setState((prevState) => {
				let newTrans = prevState.trans;
				let newLTR = prevState.ltr;
				let newRTL = prevState.rlt;

				if(cond1(event) && newTrans > 107) {
					newLTR = false;
					newRTL = true;
					newTrans-=107;
				}

				if(cond2(event) && newTrans < 108+107) {
					newLTR = true;
					newRTL = false;
					newTrans+=107;
				}

				return({
					trans: newTrans,
					transform: 'translateX(-'+ newTrans + '%)',
					ltr: newLTR,
					rtl: newRTL
				});
			});
		}
	}

	onClick (event) {
		const cond1 = e => e.screenX < window.innerWidth*0.2;
		const cond2 = e => e.screenX > window.innerWidth*0.6;
		this.animate(cond1, cond2, event);
	}

	onKeyDown (event) {
		const cond1 = e => e.keyCode === 37;
		const cond2 = e => e.keyCode === 39;
		(cond1(event) || cond2(event)) && this.animate(cond1, cond2, event);
	}

	onScroll (event) {
		if(window.scrollY > window.innerHeight * 4.5 && window.scrollY < window.innerHeight * 5.25){
			this.setState({opacity: 1, toggle: true});
		} else {
			this.setState({opacity: 0.5, toggle: false});
		}
	}

	render() {
		return (
			<div className='hacker-stories container'>
				<h1>{ResourceStrings.hacker_stories}</h1>
				<CarouselItemlGreyComponent style={this.state} />
				<CarouselItemComponent style={this.state} title='11111'/>
				<CarouselItemComponent className='carousel-right'style={this.state} title='22222'/>
				<CarouselItemComponent className='carousel-left' style={this.state} title='33333'/>
				<CarouselItemlGreyComponent style={this.state} />
				<CarouselBarComponent />
			</div>
		);
	}
}

export default HackerStoriesComponent;
