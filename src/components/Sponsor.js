import React from 'react';
import PropTypes from 'prop-types';

import ResourceStrings from './../ResourceStrings';

const Sponsor = props => (
	<div className='container sponsor' id='sponsor'>
		<h1>{props.title}</h1>
		<p>{ResourceStrings.sponsor_soon.toUpperCase()}</p>
	</div>
);

Sponsor.propTypes ={
	title: PropTypes.string.isRequired
};

export default Sponsor;
