import React, { Component } from 'react';

import ResourceStrings from './../ResourceStrings';
import Question from './Question';

import faq_img from './../assets/FAQ.png';

class Faq extends Component {
	render() {
		let qanda = [];
		const len = ResourceStrings.questions.length;
		for(let i = 0; i<len; i++) {
			qanda.push(
				<Question
					question={ResourceStrings.questions[i]}
					answer={ResourceStrings.answers[i]}
				/>
			);
		}
		return (
			<div className='faq' id='faq'>
				<img src={faq_img} alt='frequently asked questions'/>
				<div className='container hero'>
					<div className='row'>
						<div className='col-md-4'>
							<h2>{ResourceStrings.faq_long}</h2>
						</div>
						<div className='col-md-8'>
							{qanda}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Faq;
