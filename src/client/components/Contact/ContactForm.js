import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import ResourceStrings from './../../ResourceStrings';

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subject: '',
			email: '',
			message: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e, type) {
		type === 'subject' && this.setState({ subject: e.target.value });
		type === 'email' && this.setState({ email: e.target.value });
		type === 'message' && this.setState({ message: e.target.value });
	}
	render() {
		return(
			<form>
				<FormGroup controlId='formBasicText'>
					<ControlLabel><p>{ResourceStrings.contact_subject}</p></ControlLabel>
					<FormControl
						type='text'
						value={this.state.subject}
						onChange={(e) => this.handleChange(e, 'subject')}
					/>
					<ControlLabel><p>{ResourceStrings.contact_email}</p></ControlLabel>
					<FormControl
						type='text'
						value={this.state.email}
						onChange={(e) => this.handleChange(e, 'email')}
					/>
					<ControlLabel><p>{ResourceStrings.contact_message}</p></ControlLabel>
					<FormControl
						componentClass='textarea'
						value={this.state.message}
						onChange={(e) => this.handleChange(e, 'message')}
					/>
					<a
						href={'mailto:contact@starterhacks.ca?subject='
						 			+ this.state.subject
									+ '&cc='
									+ this.state.email
									+ '&body='
									+ this.state.message}>
						<button type='button' className='btn'>
							<h4>{ResourceStrings.send.toUpperCase()}</h4>
						</button>
					</a>
				</FormGroup>
			</form>
		);
	}
}

export default ContactForm;
