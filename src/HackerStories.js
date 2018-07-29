import React, { Component } from 'react';
import ResourceStrings from './ResourceStrings';
import CarouselItem from './CarouselItem';
import CarouselItemlGrey from './CarouselItemGrey';
import CarouselBar from './CarouselBar';

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
			/*			arr: [
				<CarouselItemComponent title='11111'/>,
				<CarouselItemComponent title='22222'/>,
				<CarouselItemComponent title='33333'/>
			] */
		};
		this.onClick = this.onClick.bind(this);
		this.onScroll = this.onScroll.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
	}

	componentDidMount () {
		window.addEventListener('click', this.onClick, { passive: true });
		window.addEventListener('scroll', this.onScroll, { passive: true });
		window.addEventListener('keydown', this.onKeyDown, { passive: true });

	/*	setInterval(
			() => {
				console.log('gemgdg');
				this.setState(prevState => {
					const hm1 = prevState.arr[0];
					const hm2 = prevState.arr[1];
					const hm3 = prevState.arr[2];
					return {
						arr: [
							hm2,
							hm1,
							hm3
						]
					};
				});
			}, 3000); */
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
				} else if (cond2(event) && newTrans < 107*3) {
					newLTR = true;
					newRTL = false;
					newTrans+=107;
				}

				console.log(this.state);

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
		return (
			<div className='hacker-stories container'>
				<h1>{ResourceStrings.hacker_stories}</h1>
				{/*	{this.state.arr}*/}
				<CarouselItemlGrey style={this.state} />
				<CarouselItem style={this.state} title='11111'/>
				<CarouselItem style={this.state} title='22222'/>
				<CarouselItem style={this.state} title='33333'/>
				<CarouselItemlGrey style={this.state} />
				<CarouselBar/>
			</div>
		);
	}
}

export default HackerStories;
