import React from 'react';

import ResourceStrings from './../ResourceStrings';
import stream from './../assets/Stream.png';

const Stream = () => (
	<div className='stream container-fluid'>
		<div className='container'>
			<h1>{ResourceStrings.stream_title}</h1>
			<img src={stream} alt='depiction of streams'/>
			<div className='row'>
				<div className='col-md-4'>
					<h3 style={{color: ResourceStrings.blue}}>
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
					<h3 style={{color: ResourceStrings.green}}>
						{ResourceStrings.stream_business}
					</h3>
					<p>{ResourceStrings.stream_business_desc}</p>
				</div>
			</div>
		</div>
	</div>
);

export default Stream;
