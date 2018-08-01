import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import ResourceStrings from './../ResourceStrings';
import logo from './../assets/logo.png';

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 'none'
		};
		this.clicker = this.clicker.bind(this);
	}
	clicker () {
		this.state.display === 'none' ?
			this.setState({
				display: 'block'
			}) :
			this.setState({
				display: 'none'
			});
	}
	render() {
		return (
			<div>
				<div className="accordion" onClick={this.clicker}>
					<p>{this.props.question}</p>
				</div>
				<div className="answer animated fadeIn" style={this.state}>
					<p>{this.props.answer}</p>
				</div>
			</div>
		);
	}
}

export default Question;
