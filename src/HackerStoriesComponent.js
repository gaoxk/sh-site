import React, { Component } from 'react';
import ResourceStrings from './ResourceStrings';
import CarouselItemComponent from './CarouselItemComponent';
import CarouselItemlGreyComponent from './CarouselItemGreyComponent';
import CarouselBarComponent from './CarouselBarComponent';

class HackerStoriesComponent extends Component {
	constructor (props) {
		super(props);
		this.state = {
			trans: 107,
			transform: 'translateX(-107%)',
			ltr: true,
			rtl: false,
			opacity: 0.5
		};
		this.onClick = this.onClick.bind(this);
		this.onScroll = this.onScroll.bind(this);
	}

	componentDidMount () {
		window.addEventListener('click', this.onClick, { passive: true });
		window.addEventListener('scroll', this.onScroll, { passive: true });
		setInterval(() => {
			this.setState((prevState) => {
				let newTrans = prevState.trans;
				let newLTR = prevState.ltr;
				let newRTL = prevState.rlt;

				if(newTrans > 108+107) {
					newLTR = false;
					newRTL = true;
				}

				if(newTrans < 108) {
					newLTR = true;
					newRTL = false;
				}

				if(newLTR) {
					newTrans+=107;
				}else {
					newTrans-=107;
				}

				return({
					trans: newTrans,
					transform: 'translateX(-'+ newTrans + '%)',
					ltr: newLTR,
					rtl: newRTL
				});
			});
		}, 2000000);
	}

	componentWillUnmount () {
		window.removeEventListener('click', this.onClick);
		window.removeEventListener('scroll', this.onScroll);
	}

	onClick (event) {
		if(window.scrollY > window.innerHeight * 4.5 && window.scrollY < window.innerHeight * 5.25){
			this.setState((prevState) => {
				let newTrans = prevState.trans;
				let newLTR = prevState.ltr;
				let newRTL = prevState.rlt;

				if(event.screenX < window.innerWidth*0.2 && newTrans > 107) {
					newLTR = false;
					newRTL = true;
					newTrans-=107;
				}

				if(event.screenX > window.innerWidth*0.6 && newTrans < 108+107) {
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

	onScroll (event) {
		if(window.scrollY > window.innerHeight * 4.5 && window.scrollY < window.innerHeight * 5.25){
			this.setState({opacity: 1});
		} else {
			this.setState({opacity: 0.5});
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
