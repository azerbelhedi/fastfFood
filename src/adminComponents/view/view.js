import React , { Component } from 'react' ;
import Coffee from '../../components/coffee/section3' ;

import './view.css' ;

class View extends Component{
    constructor(props){
        super(props) ;
    }

    render(){
        return(
            <div className = "view">
                <h1> view </h1>
                <Coffee data = {[]}/>
            </div>
        )
    }
}

export default View ;