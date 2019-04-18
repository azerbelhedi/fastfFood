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
import Nav2 from './components/nav2/nav2' ;

import ThemeSwitcher from './components/nav/nav' ;

class Public extends Component {
  constructor(props){
    super(props) ;
    this.state = {
          coffee : [
              {
                  name : "Caffè americano" ,
                  picture : "https://www.gustissimo.it/articoli/drink/caffe-the-e-tisane/caffe-americano.jpg" ,
                  price : 5.000 ,
                  duration : 3 ,
                  rate : 3
              } ,
              {
                  name : "Café Latte" ,
                  picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuciJRnMGewsICdwfBxoivm_EMFvUyhK5S2w9U7AHJfQIBJzdq" ,
                  price : 4.300 ,
                  duration : 3 ,
                  rate : 2.8
              } ,
              {
                  name : "Flat White" ,
                  picture : "https://globalassets.starbucks.com/assets/79b276794c714d7c9c14dd2d1757b097.jpg" ,
                  price : 6.000 ,
                  duration : 3 ,
                  rate : 5
              } ,
              {
                  name : "Long Black" ,
                  picture : "https://whitehorsecoffee.com.au/wp-content/uploads/2016/09/unnamed-6-1170x780.jpg" ,
                  price : 1.500 ,
                  duration : 3 ,
                  rate : 5
              } 
          ] ,

          food : [
            {
                name : "Makloub" ,
                picture : "https://pizzeriayai.files.wordpress.com/2016/04/1652145_1655069722_n.jpg?w=1531&h=1077" ,
                price : 5000 ,
                duration : 12 ,
                rate : 4.3
            } ,
            {
                name : "Makloub" ,
                picture : "https://www.lasultanemag.com/wp-content/uploads/2017/03/mlawi-1024x643.jpg" ,
                price : 4100 ,
                duration : 8 ,
                rate : 4.3
            } ,
            {
                name : "Makloub" ,
                picture : "https://pizzeriayai.files.wordpress.com/2016/04/1652145_1655069722_n.jpg?w=1531&h=1077" ,
                price : 5000 ,
                duration : 12 ,
                rate : 4.3
            } ,
            {
                name : "Makloub" ,
                picture : "https://pizzeriayai.files.wordpress.com/2016/04/1652145_1655069722_n.jpg?w=1531&h=1077" ,
                price : 5000 ,
                duration : 12 ,
                rate : 4.3
            } ,
            {
                name : "Makloub" ,
                picture : "https://pizzeriayai.files.wordpress.com/2016/04/1652145_1655069722_n.jpg?w=1531&h=1077" ,
                price : 5000 ,
                duration : 12 ,
                rate : 4.3
            } 
        ]

    }
  }

  render() {
    return (
      <div className = "public-app">
        {/*<ThemeSwitcher/>*/}
        <Nav2/>
         
        <div id = "section1">
          <Home/>
        </div>
        
        <div id = "section6">
          <Today />
        </div>
        
        <div id = "section2">
          <ExtraFood data = {this.state.food}/>
        </div>
        
        <div id = "section3">
          <Coffee data = {this.state.coffee}/> 
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

export default Public;
