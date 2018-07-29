import React, { Component } from 'react';
import ResourceStrings from './ResourceStrings';

class Hero extends Component {
	render() {
		return (
			<div className='container hero'>
				<div className='hero-text'>
					<h1>{ResourceStrings.starterhacks}</h1>
					<p>{ResourceStrings.starterhacks_date.toUpperCase()}</p>
                		<h2>{ResourceStrings.starterhacks_header}</h2>
					<a href='#contact'>
        		          <button type='button' className='btn'>
							<h4>{ResourceStrings.apply_now.toUpperCase()}</h4>
						</button>
					</a>
				</div>
			</div>
		);
	}
}

export default Hero;
