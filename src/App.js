import React, { Component } from 'react';
import './app.css' ;
import Section1 from './components/section1/section' ;
import Section2 from './components/section2/section2' ;
import Section3 from './components/section3/section3' ;
import Section4 from './components/section4/section4' ;
import Section5 from './components/section5/section5' ;
import Section6 from './components/section6/sectio6' ;
import Section7 from './components/section7/section7' ;
import Section8 from './components/section8/section8' ;
import Section9 from './components/section9/section9' ;
import Footer from './components/section10/section10' ;

import ThemeSwitcher from './components/nav/nav' ;

class App extends Component {
  render() {
    return (
      <div>
        <ThemeSwitcher/>
        <div id = "section1">
          <Section1/>
        </div>
        <div id = "section6">
          <Section6 />
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
        <div id = "section5">
          <Section5 />
        </div>
        <div id = "section7">
          <Section7/>
        </div>
        <div id = "section8">
          <Section8/>
        </div>
        <div id = "section9">
          <Section9 />
        </div>
        <div id = "section10">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
