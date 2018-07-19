import React, { Component } from 'react';
import ResourceStrings from './ResourceStrings';
import CarouselItemComponent from './CarouselItemComponent';
import CarouselBarComponent from './CarouselBarComponent';

class HackerStoriesComponent extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	componentDidMount () {
		setTimeout(() => {
			console.log('ji_');
			this.setState({
				transform: 'translateX(50%)'
			});
		}, 3000);
		setTimeout(() => {
			console.log(this.state);
		}, 6000);
	}

	render() {
		return (
			<div className='hacker-stories container'>
				<h1>{ResourceStrings.hacker_stories}</h1>
				<CarouselItemComponent style={this.state} />
				<CarouselBarComponent />
			</div>
		);
	}
}

export default HackerStoriesComponent;
