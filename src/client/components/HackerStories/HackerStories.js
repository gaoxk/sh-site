import React, { Component } from 'react';
import { Element } from 'react-scroll';
import shuffle from 'lodash/shuffle';

import ResourceStrings from './../../ResourceStrings';

import CarouselItem from './CarouselItem';
import CarouselItemlGrey from './CarouselItemGrey';
import CarouselBar from './CarouselBar';

import Ariane from './assets/Ariane.png';
import Kalil from './assets/Kalil.png';
import Kritin from './assets/Kritin.png';
import Nicolas from './assets/Nicolas.png';
import Stephanie from './assets/Stephanie.png';

class HackerStories extends Component {
	constructor (props) {
		super(props);
		this.state = {
			toggle: false,
			trans: 107,
			transform: 'translateX(-107%)',
			ltr: true,
			rtl: false,
			opacity: 0.5,
		/* timer: setInterval(
				() => {this.animate(() => true, () => true, true);},
				3000) */
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

	onClick (event) {
		clearInterval(this.state.timer);
		const cond1 = e => e.screenX < window.innerWidth*0.2;
		const cond2 = e => e.screenX > window.innerWidth*0.6;
		this.animate(cond1, cond2, event);
	/*	this.setState({
			timmer: setInterval(
				() => {this.animate(() => true, () => true, true);},
				3000)
		}); */
	}

	onKeyDown (event) {
		clearInterval(this.state.timer);
		const cond1 = e => e.keyCode === 37; //left
		const cond2 = e => e.keyCode === 39; //right
		(cond1(event) || cond2(event)) && this.animate(cond1, cond2, event);
	/*	this.setState({
			timmer: setInterval(
				() => {this.animate(() => true, () => true, true);},
				3000)
		}); */
	}

	onScroll (event) {
		if(window.scrollY > window.innerHeight * 4.5 &&
			window.scrollY < window.innerHeight * 5.25) {
			this.setState({opacity: 1, toggle: true});
		} else {
			this.setState({opacity: 0.5, toggle: false});
		}
	}

	animate (cond1, cond2, event, auto) {
		if(this.state.toggle) {
			this.setState((prevState) => {
				let newTrans = prevState.trans;
				let newLTR = prevState.ltr;
				let newRTL = prevState.rlt;
			  if (cond1(event) && newTrans > 107) {
					newLTR = false;
					newRTL = true;
					newTrans-=107;
				} else if (cond2(event) && newTrans < 107*5) {
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

	render() {
	  const mixer = shuffle([0, 1, 2, 3, 4]);
		let display = [];
		const pics = [Kritin, Stephanie, Kalil, Ariane, Nicolas];
		for(let i = 0; i < 5; i++) {
			display.push(
				<CarouselItem
					style={this.state}
					title={ResourceStrings.hs_name[mixer[i]]}
					sub={ResourceStrings.hs_sub[mixer[i]]}
					pic={pics[mixer[i]]}
					body={ResourceStrings.hs_body[mixer[i]]}
				/>
			);
		}
		return (
			<Element name='hacker-stories'>
				<div className='hacker-stories container' id='hacker-stories'>
					<h1>{ResourceStrings.hacker_stories}</h1>
					<CarouselItemlGrey style={this.state} />
					{display}
					<CarouselItemlGrey style={this.state} />
					<CarouselBar/>
				</div>
			</Element>
		);
	}
}

export default HackerStories;
