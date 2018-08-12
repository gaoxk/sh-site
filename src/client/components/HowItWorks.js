import React, { Component } from 'react';

import ResourceStrings from './../ResourceStrings';
import plan from './../assets/Plan.png';
import proto from './../assets/Prototype.png';
import present from './../assets/Present.png';

class HowItWorks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: [
				'here',
				'nope',
				'nope'
			],
			colors: [
				'#3c56a5',
				'#ec1b69',
				'#80c241'
			]
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(num) {
		let i;
		let arr = ['here' , 'here', 'here'];
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
				<img
					src={assets[i]}
					className={this.state.visible[i] + ' imger'}
					alt={'how starterhacks works '+i}
					key={i}
				/>
			);
		}
		return (
			<div className='how-it-works row container-fluid'>
				<div className='how-it-works-content'>
					<div className='container col-md-6' id='how'>
						<div className='how-it-works-text'>
							<h1>{ResourceStrings.how_it_works}</h1>
							<p>{ResourceStrings.how_in_24}</p>
							<div className='how-it-works-row row'>
								<div
									className={'col-sm-4 ' + this.state.visible[0] + '-nav'}
									style={{color: this.state.colors[0]}}
									onClick={() => this.handleClick(0)}>
									<h4>{ResourceStrings.how_plan}</h4>
								</div>
								<div
									className={'col-sm-4 ' + this.state.visible[1] + '-nav'}
									style={{color: this.state.colors[1]}}
									onClick={() => this.handleClick(1)}>
      					<h4>{ResourceStrings.how_proto}</h4>
      				</div>
								<div
									className={'col-sm-4 ' + this.state.visible[2] + '-nav'}
									style={{color: this.state.colors[2]}}
									onClick={() => this.handleClick(2)}>
      					<h4>{ResourceStrings.how_present}</h4>
      				</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-6'>
					{imgs}
				</div>
			</div>
		);
	}
}

export default HowItWorks;
