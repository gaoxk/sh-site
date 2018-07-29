import React, {  } from 'react';
import logo from './logo.svg';
import './App.css';
import ResourceStrings from './ResourceStrings';
import NavComponent from './NavComponent';
import Hero from './Hero';
import Description from './Description';
import Stream from './Stream';
import Faq from './Faq';
import Sponsor from './Sponsor';
import Contact from './Contact';
import Footer from './Footer';
import HackerStories from './HackerStories';

class App extends  {
	render() {
		return (
			<div className="App">
				<NavComponent />
				<Hero />
				<Description
					title={ResourceStrings.description_gain}
					sub1={ResourceStrings.description_gain_1}
					sub2={ResourceStrings.description_gain_2}
					sub3={ResourceStrings.description_gain_3}
				/>
				{/*temporary */}
				<Description
					title={ResourceStrings.how_it_works}
					sub1={ResourceStrings.description_gain_1}
					sub2={ResourceStrings.description_gain_2}
					sub3={ResourceStrings.description_gain_3}
				/>
				<Description
					title={ResourceStrings.description_learn}
					sub1={ResourceStrings.description_learn_1}
					sub2={ResourceStrings.description_learn_2}
					sub3={ResourceStrings.description_learn_3}
				/>
				<Stream />
				<HackerStories />
				<Faq />
				<Sponsor
					title={ResourceStrings.sponsors}
				/>
				<Sponsor
					title={ResourceStrings.partners}
				/>
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default App;
