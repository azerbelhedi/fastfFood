import React , { Component } from 'react' ;
import './section9.css' ;

class Feedback extends Component{
    render(){
        return(
            <div className = "feedback">    
                <form>
                    <div class = "block">
                        <h1> Name </h1>
                        <input placeholder = "name"/>
                    </div>
                    <div class = "block">
                        <h1> E-mail </h1>
                        <input type = "email" placeholder = "eg : email@emial.com"/>
                    </div>
                    <div class = "block">
                        <h1> Message </h1>
                        <textarea></textarea>
                    </div>
                    <div class = "block">
                        <input className = "submit" type = "submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Feedback ;