import React from 'react';
import PropTypes from 'prop-types';

const Description = props => (
	<div className='description' id={props.id}>
		<img src={props.imger} alt='about StarterHacks'/>
		<div className='container'>
			<div className='description-text'>
				<h1>{props.title}</h1>
				{props.bod}
			</div>
		</div>
	</div>
);


Description.propTypes ={
	id: PropTypes.string,
	title: PropTypes.string.isRequired,
	style: PropTypes.objectOf(PropTypes.string),
	bod: PropTypes.element.isRequired,
	imger: PropTypes.string
	//not sure how to proptype jsx or image sources
};

export default Description;
