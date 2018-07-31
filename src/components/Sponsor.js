import React, { Component } from 'react';
import ResourceStrings from './../ResourceStrings';

class Sponsor extends Component {
	render() {
		return (
			<div className='container sponsor'>
				<h1>{this.props.title}</h1>
				<p>{ResourceStrings.sponsor_soon.toUpperCase()}</p>
			</div>
		);
	}
}

export default Sponsor;
