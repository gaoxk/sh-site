import React from 'react';
import ResourceStrings from './../ResourceStrings';

const Sponsor = props => (
	<div className='container sponsor' id='sponsor'>
		<h1>{this.props.title}</h1>
		<p>{ResourceStrings.sponsor_soon.toUpperCase()}</p>
	</div>
);

export default Sponsor;
