import React from 'react';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';

import ResourceStrings from './../ResourceStrings';

const Sponsor = props => (
	<Element name='sponsors'>
		<div className='sponsor container-fluid' id='sponsor'>
			<div classNamme='sponsor-text'>
				<h1>{props.title}</h1>
				<p>{ResourceStrings.sponsor_soon.toUpperCase()}</p>
			</div>
		</div>
	</Element>
);

Sponsor.propTypes = {
	title: PropTypes.string.isRequired
};

export default Sponsor;
