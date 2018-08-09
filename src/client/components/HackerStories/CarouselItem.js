import React from 'react';
import PropTypes from 'prop-types';

import photo from './../../assets/square_photo.PNG';

const CarouselItem = props => (
	<div className={'carousel-item ' + props.className} style={props.style}>
		<span className='carousel-item-img'>
			<img src={props.pic} alt='hacker'/>
		</span>
		<span className='carousel-item-text' >
			<h3>{props.title}<div id='sub'>{props.sub}</div></h3>
			<p>{'\"' + props.body + '\"'}</p>
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
