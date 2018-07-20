import React, { Component } from 'react';
import ResourceStrings from './ResourceStrings';
import photo from './assets/square_photo.PNG';

class CarouselItemGreyComponent extends Component {
	render() {
		return (
			<div className={'carousel-item carousel-item-grey'} style={this.props.style}>
			</div>
		);
	}
}

export default CarouselItemGreyComponent;
