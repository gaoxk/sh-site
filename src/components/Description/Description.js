import React from 'react';
import PropTypes from 'prop-types';

const Description = props => (
	<div className='description row container-fluid' id={props.id}>
		<div className='col-md-6'>
			<img src={props.imger} alt='about StarterHacks'/>
		</div>
		<div className='col-md-6'>
			<div className='container'>
				<div className='description-text'>
					<h1>{props.title}</h1>
					{props.bod}
				</div>
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
};

export default Description;
