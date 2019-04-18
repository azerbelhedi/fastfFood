import React , { Component } from 'react' ;

import './configpanel.css' ;

class ConfigPanel extends Component{
    constructor(props){
        super(props) ;
    }

    render(){
        return(
            <div className = "config-panel">
                <h1>config panel </h1>
            </div>
        )
    }
}

export default ConfigPanel ;