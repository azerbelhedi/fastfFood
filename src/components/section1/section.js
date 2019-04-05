import React , { Component } from 'react' ;
import './section1.css' ;
import Slide from './slide' ;

const Title = () => {
    return(
        <div>
            <center>
                <div className = "logo"></div>
            </center>
            <center className = "title">Planet Food</center>
        </div>
    )
}

class Section1 extends Component{
    render(){
        return(
            <div className = "section1">
                {/* <Title/> */}
                <Slide/>
            </div>
        )
    }
}

export default Section1 ; 