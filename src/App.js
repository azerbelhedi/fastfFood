import React, { Component } from 'react';
import './app.css' ;
import Home from './components/home/section' ;
import ExtraFood from './components/extrafood/section2' ;
import Coffee from './components/coffee/section3' ;
import Map from './components/map/section4' ;
import Staff from './components/staff/section5' ;
import Today from './components/today/sectio6' ;
import Gallery from './components/gallery/section7' ;
import Delivery from './components/delivery/section8' ;
import FeedbackContact from './components/feedback-contact/section9' ;
import Footer from './components/footer/section10' ;

import ThemeSwitcher from './components/nav/nav' ;

class App extends Component {
  render() {
    return (
      <div>
        <ThemeSwitcher/>
        <div id = "section1">
          <Home/>
        </div>
        <div id = "section6">
          <Today />
        </div>
        <div id = "section2">
          <ExtraFood />
        </div>
        <div id = "section3">
          <Coffee /> 
        </div>
        <div id = "section4">
          <Map/>
        </div>
        <div id = "section5">
          <Staff />
        </div>
        <div id = "section7">
          <Gallery/>
        </div>
        <div id = "section8">
          <Delivery/>
        </div>
        <div id = "section9">
          <FeedbackContact />
        </div>
        <div id = "section10">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
