import React , { Component } from 'react' ;

import './configpanel.css' ;
import Card2 from '../../components/coffee/card2' ;
import InputCard from './inputCard' ;

class ConfigPanel extends Component{
    constructor(props){
        super(props) ;
    }

    render(){
        console.log("Card2") ;
        console.log(Card2) ;
        return(
            <div className = "config-panel">
                <h1>config panel </h1>
                <Card2 data = {{}}/>
                <InputCard/>
            </div>
        )
    }
}

export default ConfigPanel ;