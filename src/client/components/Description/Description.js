import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';

const Description = props => (
	<Element name={'description-' + props.id}>
		<div className='description row container-fluid' id={props.id}>
			<div className='col-sm-6'>
				<img id={props.id+'img'} src={props.imger} alt='about StarterHacks'/>
			</div>
			<div className='col-sm-6'>
				<div className='container'>
					<div className='description-text'>
						<h1>{props.title}</h1>
						{props.bod}
					</div>
				</div>
			</div>
		</div>
	</Element>
);


Description.propTypes ={
	id: PropTypes.string,
	title: PropTypes.string.isRequired,
	style: PropTypes.objectOf(PropTypes.string),
	bod: PropTypes.element.isRequired,
	imger: PropTypes.string
};

export default Description;
