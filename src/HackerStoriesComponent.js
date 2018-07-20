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
			rtl: false
		};
	}

	componentDidMount () {
		setInterval(() => {
			this.setState((prevState) => {
				let newTrans = prevState.trans;
				let newLTR = prevState.ltr;
				let newRTL = prevState.rlt;

				if(newTrans > 108+107	) {
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

				console.log(prevState);

				return({
					trans: newTrans,
					transform: 'translateX(-'+ newTrans + '%)',
					ltr: newLTR,
					rtl: newRTL
				});
			});
		}, 2500);
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
