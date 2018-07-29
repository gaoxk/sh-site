import React, { Component } from 'react';
import './App.css';
import ResourceStrings from './ResourceStrings';
import NavComponent from './components/NavComponent';
import Hero from './components/Hero';
import Description from './components/Description';
import HowItWorks from './components/HowItWorks';
import Stream from './components/Stream';
import Faq from './components/Faq';
import Sponsor from './components/Sponsor';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HackerStories from './components/HackerStories/HackerStories';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavComponent/>
				<Hero/>
				<Description
					title={ResourceStrings.description_gain}
					sub1={ResourceStrings.description_gain_1}
					sub2={ResourceStrings.description_gain_2}
					sub3={ResourceStrings.description_gain_3}
				/>
				<HowItWorks/>
				<Description
					title={ResourceStrings.description_learn}
					sub1={ResourceStrings.description_learn_1}
					sub2={ResourceStrings.description_learn_2}
					sub3={ResourceStrings.description_learn_3}
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
