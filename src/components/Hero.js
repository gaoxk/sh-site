import React from 'react';
import ResourceStrings from './../ResourceStrings';

import hero from './../assets/Hero.png';

const Hero = () => (
	<div className='hero' id='hero'>
		<img src={hero} alt='problem solving at StarterHacks'/>
		<div className='container'>
			<div className='hero-text'>
				<h1>{ResourceStrings.starterhacks}</h1>
				<p>{ResourceStrings.starterhacks_date.toUpperCase()}</p>
                		<h2>{ResourceStrings.starterhacks_header}</h2>
				<a href='#contact'>
        		<button type='button' className='btn'>
						<h4>{ResourceStrings.subscribe.toUpperCase()}</h4>
					</button>
				</a>
			</div>
		</div>
	</div>
);

export default Hero;
