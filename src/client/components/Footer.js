import React, { Component } from 'react';

import ResourceStrings from './../ResourceStrings';
import tw from './../assets/twitter.svg';
import ig from './../assets/instagram.svg';
import fb from './../assets/facebook.svg';

class Footer extends Component {
	render() {
		let icons = [];
		const svgs = [tw, ig, fb];
		const len = svgs.length;
		for(let i = 0; i<len; i++) {
			icons.push(
				<a href={ResourceStrings.media[i]} key={i}>
					<img src={svgs[i]} alt={ResourceStrings.media[i]} />
				</a>
			);
		}
		return (
			<div className='footer row'>
				<div className='footer-icons'>
					{icons}
				</div>
			</div>
		);
	}
}

export default Footer;
