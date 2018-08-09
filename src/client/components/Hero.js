import React from 'react';
import { Element } from 'react-scroll';

import ResourceStrings from './../ResourceStrings';
import NewsLetter from './Contact/NewsLetter';
import hero from './../assets/Hero.png';

const Hero = () => (
	<Element name='hero'>
		<div className='hero container-fluid' id='hero'>
			<img src={hero} alt='problem solving at StarterHacks'/>
			<div className='container'>
				<div className='hero-text'>
					<h1>{ResourceStrings.starterhacks}</h1>
					<p>{ResourceStrings.starterhacks_date.toUpperCase()}</p>
					<h3>{ResourceStrings.starterhacks_header}</h3>
					<NewsLetter
						header={false}
						placeholder={ResourceStrings.sign_up_news}
					/>
				</div>
			</div>
		</div>
	</Element>
);

export default Hero;
