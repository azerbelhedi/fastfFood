import React , { Component } from 'react' ;
import './section1.css' ;
import Slide from './slide' ;

const Title = () => {
    return(
        <div>
            <center>
                <div className = "logo"></div>
            </center>
        </div>
    )
}

class Home extends Component{
    render(){
        return(
            <div className = "section1">
                <Title/>
                <Slide/>
            </div>
        )
    }
}

export default Home ; 