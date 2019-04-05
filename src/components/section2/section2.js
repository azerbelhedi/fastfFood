import React , { Component } from 'react' ;
import './section2.css' ;

const Title2 = () => {
    return (<div>
        <center>
            <h1 className = "title"> our plates </h1>
        </center>
    </div>)
}

class Section2 extends Component{
    render(){
        return(
            <div className = "section2">
                <Title2 />
            </div>
        )
    }
}

export default Section2 ;