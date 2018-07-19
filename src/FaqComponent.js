import React, { Component } from 'react';
import ResourceStrings from './ResourceStrings';
import QuestionComponent from './QuestionComponent';

class FaqComponent extends Component {
	render() {
		let qanda = [];
		const len = ResourceStrings.questions.length;
		for(let i = 0; i<len; i++) {
			qanda.push(
				<QuestionComponent
					question={ResourceStrings.questions[i]}
					answer={ResourceStrings.answers[i]}
				/>
			);
		}
		return (
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
		);
	}
}

export default FaqComponent;
