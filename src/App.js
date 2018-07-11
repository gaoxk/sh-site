import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResourceStrings from './ResourceStrings';
import NavComponent from './NavComponent';
import HeroComponent from './HeroComponent';
import DescriptionComponent from './DescriptionComponent';
import StreamComponent from './StreamComponent';
import FaqComponent from './FaqComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <HeroComponent />
        <DescriptionComponent
          title={ResourceStrings.description_gain}
          sub1={ResourceStrings.description_gain_1}
          sub2={ResourceStrings.description_gain_2}
          sub3={ResourceStrings.description_gain_3}
        />
        {/*temporary */}
        <DescriptionComponent
          title={ResourceStrings.how_it_works}
          sub1={ResourceStrings.description_gain_1}
          sub2={ResourceStrings.description_gain_2}
          sub3={ResourceStrings.description_gain_3}
        />
        <DescriptionComponent
          title={ResourceStrings.description_learn}
          sub1={ResourceStrings.description_learn_1}
          sub2={ResourceStrings.description_learn_2}
          sub3={ResourceStrings.description_learn_3}
        />
        <StreamComponent />
        {/* hacker story */}
        <FaqComponent />
        {/* sponsor */}
        {/* contact us */}
        {/* footer */}
      </div>
    );
  }
}

export default App;
