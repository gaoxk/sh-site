import React, { Component } from 'react';
import './App.css';
import ResourceStrings from './ResourceStrings';

import NavComponent from './components/NavComponent';
import Hero from './components/Hero';
import Description from './components/Description/Description';
import { Gain, Learn} from './components/Description/Descriptions';
import HowItWorks from './components/HowItWorks';
import Stream from './components/Stream';
import Faq from './components/Faq';
import Sponsor from './components/Sponsor';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HackerStories from './components/HackerStories/HackerStories';

import gain from './assets/Gain.png';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavComponent/>
				<Hero/>
				<Description
					title={ResourceStrings.description_gain}
					bod={Gain()}
					imger={gain}
					id='about'
				/>
				<HowItWorks/>
				<Description
					title={ResourceStrings.description_learn}
					bod={Learn()}
				/>
				<Stream/>
				<HackerStories/>
				<Faq/>
				<Sponsor
					title={ResourceStrings.sponsors}
				/>
				<Contact/>
				<Footer/>
			</div>
		);
	}
}

export default App;
