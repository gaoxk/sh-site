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
		this.send = this.send.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	send() {
		fetch('/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
			body: JSON.stringify({
				subject: this.state.subject,
				email: this.state.email,
				message: this.state.message
			})
		})
			.then(res => res.json())
			.then(res => console.log(res));
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
					<div className='field'>
						<ControlLabel><p>{ResourceStrings.contact_subject}</p></ControlLabel>
						<FormControl
							type='text'
							value={this.state.subject}
							onChange={(e) => this.handleChange(e, 'subject')}
						/>
					</div>
					<div className='field'>
						<ControlLabel><p>{ResourceStrings.contact_email}</p></ControlLabel>
						<FormControl
							type='text'
							value={this.state.email}
							onChange={(e) => this.handleChange(e, 'email')}
						/>
					</div>
					<div className='field'>
						<ControlLabel><p>{ResourceStrings.contact_message}</p></ControlLabel>
						<FormControl
							className='textarea'
							componentClass='textarea'
							value={this.state.message}
							onChange={(e) => this.handleChange(e, 'message')}
						/>
					</div>
					<button type='button' className='btn' onClick={this.send}>
						<h4>{ResourceStrings.send.toUpperCase()}</h4>
					</button>
				</FormGroup>
			</form>
		);
	}
}

export default ContactForm;
