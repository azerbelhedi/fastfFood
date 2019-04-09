import React, { Component } from 'react';
import './app.css' ;
import Section1 from './components/section1/section' ;
import Section2 from './components/section2/section2' ;
import Section3 from './components/section3/section3' ;
import Section4 from './components/section4/section4' ;

import ThemeSwitcher from './components/nav/nav' ;

class App extends Component {
  render() {
    return (
      <div>
        <ThemeSwitcher/>
        <div id = "section1">
          <Section1/>
        </div>
        <div id = "section2">
          <Section2 />
        </div>
        <div id = "section3">
          <Section3 /> 
        </div>
        <div id = "section4">
          <Section4/>
        </div>
      </div>
    );
  }
}

export default App;
