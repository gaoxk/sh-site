import React, { Component } from 'react';
import ResourceStrings from './../../ResourceStrings';

class Description extends Component {
	render() {
		return (
			<div className='description'>
				<img src={this.props.imger}/>
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
