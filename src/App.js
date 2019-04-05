import React, { Component } from 'react';
import './app.css' ;
import Section1 from './components/section1/section' ;
import Section2 from './components/section2/section2' ;
import ThemeSwitcher from './components/nav/nav' ;

class App extends Component {
  render() {
    return (
      <div>
        <ThemeSwitcher/>
        <div><Section1 /></div>
        <div><Section2 /></div>
        <div>section3</div>
        <div>section4</div>
      </div>
    );
  }
}

export default App;
