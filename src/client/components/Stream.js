import React from 'react';

import ResourceStrings from './../ResourceStrings';
import streamPhoto from './../assets/stream_photo.PNG';

const Stream = () => (
	<div className='stream container-fluid'>
		<div className='container'>
			<h1>{ResourceStrings.stream_title}</h1>
			<img src={streamPhoto} alt='depiction of streams'/>
			<div className='row'>
				<div className='col-md-4'>
					<h3 style={{color: ResourceStrings.green}}>
						{ResourceStrings.stream_design}
					</h3>
					<p>{ResourceStrings.stream_design_desc}</p>
				</div>
				<div className='col-md-4'>
					<h3 style={{color: ResourceStrings.red}}>
						{ResourceStrings.stream_dev}
					</h3>
					<p>{ResourceStrings.stream_dev_desc}</p>
				</div>
				<div className='col-md-4'>
					<h3 style={{color: ResourceStrings.blue}}>
						{ResourceStrings.stream_bussiness}
					</h3>
					<p>{ResourceStrings.stream_bussiness_desc}</p>
				</div>
			</div>
		</div>
	</div>
);

export default Stream;
