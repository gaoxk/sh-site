import React, { Component } from 'react';
import ResourceStrings from './../../ResourceStrings';

export const Gain = () => (
	<div>
		<p>{ResourceStrings.description_gain_arr[0][0]}
			<strong>{ResourceStrings.description_gain_arr[0][1]}</strong>
			{ResourceStrings.description_gain_arr[0][2]}
		</p>
		<p>{ResourceStrings.description_gain_arr[1][0]}</p>
		<p><strong>{ResourceStrings.description_gain_arr[2][0]}</strong>
			{ResourceStrings.description_gain_arr[2][1]}
		</p>
	</div>
);

export const Learn = () => (
	<div>
		<p>{ResourceStrings.description_learn_arr[0]}</p>
		<p>{ResourceStrings.description_learn_arr[1]}</p>
		<p>{ResourceStrings.description_learn_arr[2]}</p>
	</div>
);
