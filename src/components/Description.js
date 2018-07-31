import React, { Component } from 'react';
import ResourceStrings from './../ResourceStrings';

class Description extends Component {
	render() {
		return (
			<div className='description'>
				<img src={this.props.imger}/>
				<div className='container'>
					<div className='description-text'>
						<h1>{this.props.title}</h1>
						<p>{this.props.sub1}</p>
						<p>{this.props.sub2}</p>
						<p>{this.props.sub3}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Description;
