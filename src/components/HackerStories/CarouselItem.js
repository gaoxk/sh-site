import React, { Component } from 'react';
import ResourceStrings from './../../ResourceStrings';
import photo from './../../assets/square_photo.PNG';

class CarouselItem extends Component {
	render() {
		return (
			<div className={'carousel-item ' + this.props.className} style={this.props.style}>
				<span className='carousel-item-img'>
					<img src={photo} />
				</span>
				<span className='carousel-item-text' >
					<h3>{this.props.title}</h3>
					<p>
							Aenean id sapien eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris efficitur nunc ut dapibus lobortis. Vivamus facilisis augue non rutrum venenatis. Duis eleifend dignissim viverra. Vestibulum ut efficitur sem, id gravida purus. Nullam eleifend pellentesque turpis ac rhoncus. Ut tristique orci eget velit auctor porta. Maecenas metus nisi, consectetur id ultrices quis, malesuada quis magna. Pellentesque venenatis vel est vitae viverra. Vestibulum sed finibus urna. Praesent eu sapien vitae felis convallis blandit ac vitae tellus. Donec nec velit in nunc interdum ornare.
					</p>
				</span>
			</div>
		);
	}
}

export default CarouselItem;
