import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Panel} from 'react-bootstrap';

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arrow: {
				transform: 'rotate(-90deg)'
			},
			answer: {
				display: 'none'
			},
		};
		this.clicker = this.clicker.bind(this);
	}
	clicker () {


		this.state.answer.display === 'none' ?
			
			this.setState({
				arrow: {
					transform: 'rotate(0deg)'
				},
				answer: {
					display: 'block'
				},
			}) :
			this.setState({
				arrow: {
					transform: 'rotate(-90deg)'
				},
				answer: {
					display: 'none'
				},
			});
			



	}
	render() {
		return (
			<div>
				
				{/* <div className="accordion" onClick={this.clicker}>
					<h3 className="question">{this.props.question}</h3>
					<h3 className="questionArrow"><i class="fas fa-angle-left" style={this.state.arrow}></i></h3>
				</div>
				<div className="answer animated fadeIn" style={this.state.answer}>
					<p>{this.props.answer}</p>
				</div> */}
					<Panel.Heading className="questionContainer">
						<Panel.Title  className="question" toggle>{this.props.question}</Panel.Title>
						<h3 className="questionArrow"><i class="fas fa-angle-left" style={this.state.arrow}></i></h3>
					</Panel.Heading>
						<Panel.Body className="answer animated fadeIn" collapsible>{this.props.answer}</Panel.Body>
			</div>
		);
	}
}

Question.propTypes = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired
};

export default Question;
