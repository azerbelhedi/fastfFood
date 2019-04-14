import React , { Component } from 'react' ;
import './card2.css' ;

class Card2 extends Component{
    constructor(props){
        super(props) ;
    }
    render(){
        return(
            <div className = "card2">
                <div className = "card-img" style = {{backgroundImage : `url(${this.props.data.picture})`}}></div>
                <div className = "card-data">
                    <h1 className = "food-name">{this.props.data.name}</h1>
                    <h4 className = "food-time">{this.props.data.duration} Minute(s) to prepare </h4>
                    <h3 className = "food-price"> {this.props.data.price} DNT</h3>
                </div>
            </div>
        )
    }
}

export default Card2 ;
