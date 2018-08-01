import React from 'react';
import PropTypes from 'prop-types';

import photo from './../../assets/square_photo.PNG';

const CarouselItem = props => (
	<div className={'carousel-item ' + props.className} style={props.style}>
		<span className='carousel-item-img'>
			<img src={photo} alt='hacker'/>
		</span>
		<span className='carousel-item-text' >
			<h3>{props.title}</h3>
			<p>
							Aenean id sapien eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris efficitur nunc ut dapibus lobortis. Vivamus facilisis augue non rutrum venenatis. Duis eleifend dignissim viverra. Vestibulum ut efficitur sem, id gravida purus. Nullam eleifend pellentesque turpis ac rhoncus. Ut tristique orci eget velit auctor porta. Maecenas metus nisi, consectetur id ultrices quis, malesuada quis magna. Pellentesque venenatis vel est vitae viverra. Vestibulum sed finibus urna. Praesent eu sapien vitae felis convallis blandit ac vitae tellus. Donec nec velit in nunc interdum ornare.
			</p>
		</span>
	</div>
);

CarouselItem.propTypes ={
	title: PropTypes.string.isRequired,
	style: PropTypes.shape({
		transform: PropTypes.string,
		opacity: PropTypes.number
	})
};

export default CarouselItem;
