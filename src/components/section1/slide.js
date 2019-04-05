import React , { Component } from 'react' ;
import './section1.css' ;

class Slide extends Component{
    constructor(props){
        super(props) ;
        this.state = {
            words : ["Coffee" , "Pizza" , "Plates"] ,
            index : 0 
        }
        this.run() ;
    }

    run(){
        setInterval(() => {
            let newState = this.state ;
            newState.index = this.state.index + 1 ;
            if(newState.index >= this.state.words.length){
                newState.index = 0 ;
            }
            this.setState(newState) ;
        } , 2000)
    }

    render(){
        return(
            <div>
                <center>
                    <h1 className = "title slide"> Best <span> {this.state.words[this.state.index]} </span> </h1>
                </center>
            </div>
        )
    }
}

export default Slide ;