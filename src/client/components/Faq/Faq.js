import React, { Component } from 'react';
import { Element } from 'react-scroll';
import {PanelGroup, Panel} from 'react-bootstrap';
import ResourceStrings from './../../ResourceStrings';
import Question from './Question';
import faq_img from './../../assets/FAQ.png';

class Faq extends Component {
	render() {
		let qanda = [];
		const len = ResourceStrings.questions.length;
		for(let i = 0; i<len; i++) {
			qanda.push(
				<Panel eventKey={String(i+1)}>
					<Question
						question={ResourceStrings.questions[i]}
						answer={ResourceStrings.answers[i]}
						key={i}
					/>
				</Panel>
			);
		}
		return (
			<Element name='faq'>
				<div className='faq container-fluid' id='faq'>
					<img src={faq_img} alt='frequently asked questions'/>
					<div className='faq faq-content-container container hero'>
						<div className='row'>
							<div className='col-md-4'>
								<h1>{ResourceStrings.faq_long}</h1>
							</div>
							
							<div className='col-md-8'>
							<PanelGroup accordion id="faq-body">
								{qanda}
								</PanelGroup>
							</div>
							
						</div>
					</div>
				</div>
			</Element>
		);
	}
}

export default Faq;
