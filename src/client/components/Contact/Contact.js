import React, { Component } from 'react';
import { Element } from 'react-scroll';

import ResourceStrings from './../../ResourceStrings';
import ContactForm from './ContactForm';
import NewsLetter from './NewsLetter';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e, type) {
		type === 'name' && this.setState({ name: e.target.value });
		type === 'email' && this.setState({ email: e.target.value });
		type === 'message' && this.setState({ message: e.target.value });
	}
	render() {
		return (
			<Element name='contact'>
				<div className='contact' id='contact'>
					<div className='contact-container container'>
						<h1>{ResourceStrings.contact}</h1>
						<div className='row' >
							<div className='col-md-6'>
								<ContactForm/>
							</div>
							<div className='col-md-6 newsletter'>
								<NewsLetter
									header={true}
									placeholder={ResourceStrings.sign_up_email}
								/>
							</div>
						</div>
					</div>
				</div>
			</Element>
		);
	}
}

export default Contact;
