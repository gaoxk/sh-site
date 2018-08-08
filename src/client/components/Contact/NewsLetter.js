import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormGroup, FormControl} from 'react-bootstrap';

import ResourceStrings from './../../ResourceStrings';

class NewsLetter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			news: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.send = this.send.bind(this);
	}

	send() {
		fetch('/news', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
			body: JSON.stringify({email: this.state.news})
		})
			.then(res => res.json())
			.then(res => console.log(res));
	}

	handleChange(e) {
		this.setState({ news: e.target.value });
	}

	render() {
		return(
			<div>
    		{this.props.header ?
					<div><h2><strong>{ResourceStrings.news}</strong></h2>
						<p>{ResourceStrings.news_desc}</p></div>
					: null}
    		<form>
      	<FormGroup controlId='formBasicText'>
      		<FormControl
      			name='EMAIL'
      			placeholder={this.props.placeholder}
      			value={this.state.news}
      			onChange={(e) => this.handleChange(e)}
      		/>
      		<button  type='submit' name='subscribe' className='btn' onClick={this.send}>
      			<h4>{ResourceStrings.subscribe.toUpperCase()}</h4>
      		</button>
      	</FormGroup>
    		</form>
    	</div>
		);
	}
}

NewsLetter.proptypes = {
	header: PropTypes.bool.isRequired,
	placeholder: PropTypes.string.isRequired
};

export default NewsLetter;
