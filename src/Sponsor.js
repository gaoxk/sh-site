import React, { Component } from 'react';
import ResourceStrings from './ResourceStrings';
import streamPhoto from './assets/stream_photo.PNG';

class Sponsor extends Component {
	render() {
		return (
			<div className='container stream'>
				<h1>{this.props.title}</h1>
				<img src={streamPhoto}/>
			</div>
		);
	}
}

export default Sponsor;
