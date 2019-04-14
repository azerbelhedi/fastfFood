import React , { Component } from 'react' ;
import './nav2.css' ;

class Nav2 extends Component{
    constructor(props){
        super(props) ;
        this.state = {
            display :"block"
        }
        this.toggleDisplay = this.toggleDisplay.bind(this) ;
    }

    toggleDisplay(){
        //alert(window.innerWidth) ;
        if(window.innerWidth <600){
            let mode = this.state.display ;
            (mode == "block") ? mode = "none" : mode = "block" ;
            this.setState({display : mode}) ;
            //alert("nox")
        }
    }

    render(){
        return(
            <div className = "nav2">
                <ul className="list">
                    <li className = "nav2-top">
                        <div className="nav2-toggle" onClick = {this.toggleDisplay}></div>
                        <div className="top-logo"></div>
                    </li>
                    <li className= "nav2-item" style = {{display : this.state.display}}>
                        <a href="#section1" onClick = {this.toggleDisplay}>Home</a>
                    </li>
                    <li className= "nav2-item" style = {{display : this.state.display}}>
                        <a href="#section6" onClick = {this.toggleDisplay}>Today</a>
                    </li>
                    <li className= "nav2-item" style = {{display : this.state.display}}>
                        <a href="#section2" onClick = {this.toggleDisplay}>Food</a>
                    </li>
                    <li className= "nav2-item" style = {{display : this.state.display}}>
                        <a href="#section3" onClick = {this.toggleDisplay}>Coffee</a>
                    </li>
                    <li className= "nav2-item" style = {{display : this.state.display}}>
                        <a href="#section4" onClick = {this.toggleDisplay}>Map</a>
                    </li>
                    <li className= "nav2-item" style = {{display : this.state.display}}>
                        <a href="#section5" onClick = {this.toggleDisplay}>Staff</a>
                    </li>
                    <li className= "nav2-item" style = {{display : this.state.display}}>
                        <a href="#section7" onClick = {this.toggleDisplay}>Inside</a>
                    </li>
                    <li className= "nav2-item" style = {{display : this.state.display}}>
                        <a href="#section8" onClick = {this.toggleDisplay}>Delivery</a>
                    </li>
                    <li className= "nav2-item" style = {{display : this.state.display}}>
                        <a href="#section9" onClick = {this.toggleDisplay}>Feedback</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav2 ;