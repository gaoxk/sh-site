import React from 'react';
import PropTypes from 'prop-types';

const CarouselItemGrey = props => (
	<div
		className={'carousel-item carousel-item-grey'}
		style={props.style}
	>
	</div>
);

CarouselItemGrey.propTypes = {
	style: PropTypes.shape({
		transform: PropTypes.string,
		opacity: PropTypes.number
	})
};

export default CarouselItemGrey;
