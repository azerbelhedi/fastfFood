import React , { Component } from 'react' ;
import './section10.css' ;
import Owner from './owner.js' ;
import Maker from './maker.js' ;

class Footer extends Component{
  render(){
    return(
      <div className = "footer">
        <div className = "footer-flex">
          <Owner/>
          <Maker/>
        </div>
        <div className = "copyright"> &copy; 2019 Copyright Ploydev</div>
      </div>
    )
  }
}

export default Footer ;