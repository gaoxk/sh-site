import React, { Component } from 'react';
import { Element } from 'react-scroll';

import ResourceStrings from './../../ResourceStrings';
import Question from './Question';
import faq_img from './../../assets/FAQ.png';

class Faq extends Component {
	render() {
		let qanda = [];
		const len = ResourceStrings.questions.length;
		for(let i = 0; i<len; i++) {
			qanda.push(
				<Question
					question={ResourceStrings.questions[i]}
					answer={ResourceStrings.answers[i]}
					key={i}
				/>
			);
		}
		return (
			<Element name='faq'>
				<div className='faq container-fluid' id='faq'>
					<img src={faq_img} alt='frequently asked questions'/>
					<div className='container hero'>
						<div className='row'>
							<div className='col-md-4'>
								<h1>{ResourceStrings.faq_long}</h1>
							</div>
							<div className='col-md-8'>
								{qanda}
							</div>
						</div>
					</div>
				</div>
			</Element>
		);
	}
}

export default Faq;
