import React, { Component } from 'react';
import ResourceStrings from './../ResourceStrings';
import plan from './../assets/Plan.png';

class HowItWorks extends Component {
	render() {
		return (
			<div className='how-it-works'>
				<div className='container' id='how'>
					<div className='how-it-works-text'>
						<h1>{ResourceStrings.how_it_works}</h1>
						<p>hihiihh</p>
					</div>
				</div>
				<img src={plan} align='left'/>
			</div>
		);
	}
}

export default HowItWorks;
