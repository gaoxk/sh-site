import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arrow: {
				transform: 'rotate(-90deg)'
			},
			answer: {
				display: 'none'
			}
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
				}
			}) :
			this.setState({
				arrow: {
					transform: 'rotate(-90deg)'
				},
				answer: {
					display: 'none'
				}
			});
			



	}
	render() {
		return (
			<div>
				<div className="accordion" onClick={this.clicker}>
					<h3 className="question">{this.props.question}</h3>
					<h3 className="questionArrow"><i className="fas fa-angle-left" style={this.state.arrow}></i></h3>
				</div>
				<div className="answer animated fadeIn" style={this.state.answer}>
					<p>{this.props.answer}</p>
				</div>
			</div>
		);
	}
}

Question.propTypes = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired
};

export default Question;
