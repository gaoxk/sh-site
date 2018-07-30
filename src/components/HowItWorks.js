import React, { Component } from 'react';
import ResourceStrings from './../ResourceStrings';

import plan from './../assets/Plan.png';
import proto from './../assets/ideal.png';
import present from './../assets/logo.png';

class HowItWorks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: [
				'',
				'nope',
				'nope'
			]
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(num) {
		console.log(num);
		let i;
		let arr = ['' , '', ''];
		for(i=0; i<3; i++) {
			if(i !== num) arr[i]='nope';
		}
		this.setState({visible: arr});
	}

	render() {
		const assets = [plan, proto, present];
		let imgs = [];
		let i;
		for(i=0; i<3; i++){
			imgs.push(
				<img src={assets[i]} className={this.state.visible[i]}/>
			);
		}
		return (
			<div className='how-it-works'>
				<div className='container' id='how'>
					<div className='how-it-works-text'>
						<h1>{ResourceStrings.how_it_works}</h1>
						<p>{ResourceStrings.how_in_24}</p>
						<div className='row'>
							<div className='col-md-2' onClick={() => this.handleClick(0)}>
								<h3>{ResourceStrings.how_plan}</h3>
							</div>
							<div className='col-md-2' onClick={() => this.handleClick(1)}>
      					<h3>{ResourceStrings.how_proto}</h3>
      				</div>
							<div className='col-md-2' onClick={() => this.handleClick(2)}>
      					<h3>{ResourceStrings.how_present}</h3>
      				</div>
						</div>
					</div>
				</div>
				{imgs}
			</div>
		);
	}
}

export default HowItWorks;
