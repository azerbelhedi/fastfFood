import React , { Component } from 'react' ;
import './section2.css' ;
import  Subnav  from './subnav' ;
import Cards from './cards' ;

const Title2 = () => {
    return (<div>
        <center>
            <h1 className = "sub-title"> Food </h1>
        </center>
    </div>)
}

class ExtraFood extends Component{
    constructor(props){
        super(props) ;  
        this.state = {
            name : this.props.name
        }
    }
    render(){
        return(
            <div className = "section2">
                <Title2/>
                <Subnav/>
                <Cards/>
            </div>
        )
    }
}

export default ExtraFood ;