import React , { Component } from 'react' ;
import './general.css' ;

class General extends Component{
    constructor(props){
        super(props) ;
        this.state = {
            logoStyle : {backgroundImage : `url(${this.props.data.logo})`}
        }
    }
    render(){
        return(
            <div className = "general">
                <div className = "contact-logo" style = {this.state.logoStyle}></div>
                <div className = "contact-data">
                    <a href = {this.props.data.link}>
                        {this.props.data.data}
                    </a>
                </div> 
            </div>
        )
    }
}

export default General ;