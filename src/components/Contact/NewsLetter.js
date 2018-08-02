import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import ResourceStrings from './../../ResourceStrings';

class NewsLetter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			news: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({ news: e.target.value });
	}
	render() {
		return(
			<div>
    		<h2><strong>{ResourceStrings.news}</strong></h2>
    		<p>{ResourceStrings.news_desc}</p>
    		<form
      	action='https://starterhacks.us15.list-manage.com/subscribe/post?u=9cabc53f9cf6bf533679316aa&amp;id=b8f1bed003'
      	method='post'
      	name='mc-embedded-subscribe-form'
      	className='validate'
      	target='_blank'
      	noValidate
    		>
      	<FormGroup controlId='formBasicText'>
      		<FormControl
      			name='EMAIL'
      			placeholder={ResourceStrings.sign_up_email}
      			value={this.state.news}
      			onChange={(e) => this.handleChange(e)}
      		/>
      		<button  type='submit' name='subscribe' className='btn'>
      			<h4>{ResourceStrings.subscribe.toUpperCase()}</h4>
      		</button>
      	</FormGroup>
    		</form>
    	</div>
		);
	}
}

export default NewsLetter;
