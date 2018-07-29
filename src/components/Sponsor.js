import React, { Component } from 'react';
import ResourceStrings from './../ResourceStrings';
import streamPhoto from './../assets/stream_photo.PNG';

class Sponsor extends Component {
	render() {
		return (
			<div className='container sponsor'>
				<h1>{this.props.title}</h1>
				<p>Coming soon!</p>
			</div>
		);
	}
}

export default Sponsor;
