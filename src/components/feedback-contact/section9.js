import React , { Component } from 'react' ;
import Feedback from './feedback' ;
import Contact from './contact' ;

import './section9.css' ;

class FeedbackContact extends Component{
    render(){
        return(
            <div className = "section9">
                <h1 className = "section9-title"> Give Us Your Feedback </h1>
                <div className = "feedback-contact">
                    <Feedback/>
                    <Contact/>
                </div>
            </div>
        )
    }
}

export default FeedbackContact ;