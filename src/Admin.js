import React , { Component } from 'react' ;
import View from './adminComponents/view/view' ;
import ConfigPanel from './adminComponents/configpanel/configpanel' ;

import './admin.css' ;

class Admin extends Component{
    constructor(props){
        super(props) ;
    }

    render(){
        return(
            <div className = "admin">
                <View/>
                <ConfigPanel/>
            </div>
        )
    }
}

export default Admin ;