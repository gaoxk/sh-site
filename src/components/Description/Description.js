import React from 'react';

const Description = props => (
	<div className='description' id={props.id}>
		<img src={props.imger} alt='about StarterHacks'/>
		<div className='container'>
			<div className='description-text'>
				<h1>{props.title}</h1>
				{props.bod}
			</div>
		</div>
	</div>
);
export default Description;
