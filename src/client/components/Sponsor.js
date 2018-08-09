import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';

import ResourceStrings from './../ResourceStrings';

const Sponsor = props => (
	<Element name='sponsors'>
		<div className='sponsor container-fluid' id='sponsor'>
			<h1>{props.title}</h1>
			<p>{ResourceStrings.sponsor_soon.toUpperCase()}</p>
		</div>
	</Element>
);

Sponsor.propTypes = {
	title: PropTypes.string.isRequired
};

export default Sponsor;
