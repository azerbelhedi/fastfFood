import React , { Component } from 'react' ;
import './section3.css' ;
import Cards from './cards' ;

const Title2 = () => {
    return (<div>
        <center>
            <h1 className = "sub-title"> Coffee </h1>
        </center>
    </div>)
}

class Coffee extends Component{
    constructor(props){
        super(props) ;  
        this.state = {
            name : this.props.name
        }
    }
    render(){
        return(
            <div className = "section3">
                <Title2/>
                <Cards/>
            </div>
        )
    }
}

export default Coffee ;