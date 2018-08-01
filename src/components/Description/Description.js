import React, { Component } from 'react';

class Description extends Component {
	render() {
		return (
			<div className='description' id={this.props.id}>
				<img src={this.props.imger} alt='about StarterHacks'/>
				<div className='container'>
					<div className='description-text'>
						<h1>{this.props.title}</h1>
						{this.props.bod}
					</div>
				</div>
			</div>
		);
	}
}

export default Description;
