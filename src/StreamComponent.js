import React, { Component } from 'react';
import ResourceStrings from './ResourceStrings';
import streamPhoto from './assets/stream_photo.PNG';

class StreamComponent extends Component {
	render() {
		return (
			<div className='container stream'>
				<h1>{ResourceStrings.stream_title}</h1>
				<img src={streamPhoto}/>
				<div className='row'>
					<div className='col-md-4'>
						<h3>{ResourceStrings.stream_design}</h3>
						<p>{ResourceStrings.stream_design_desc}</p>
					</div>
					<div className='col-md-4'>
						<h3>{ResourceStrings.stream_dev}</h3>
						<p>{ResourceStrings.stream_dev_desc}</p>
					</div>
					<div className='col-md-4'>
						<h3>{ResourceStrings.stream_bussiness}</h3>
						<p>{ResourceStrings.stream_bussiness_desc}</p>
					</div>
				</div>
				<h2>{ResourceStrings.stream_follow}</h2>
				<a href='#contact'>
					<button type='button' className='center-block'>
						<h4>{ResourceStrings.apply_now.toUpperCase()}</h4>
					</button>
				</a>
			</div>
		);
	}
}

export default StreamComponent;
