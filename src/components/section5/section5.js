import React , { Component } from "react" ;
import Staff from './staff' ;

class Section5 extends Component{
    constructor(props){
        super(props) ;
        this.state = {
            staffData : [
                {name : "azer" , job : "tayeb sdfsd fds" , picture : "http://taplate.com/images/cheff.jpg"} ,
                {name : "azer2" , job : "tayeb2 sdfs sdfs" , picture : "data:image/jpeg;base64,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"} ,
                {name : "azer3" , job : "tayeb3 sdfsd dsf" , picture : "https://i.pinimg.com/originals/3d/49/24/3d49249306eb28e5003aa9d46bc62f1f.jpg"}
            ]
        }
    }
    render(){
        return(
            <div className = "section5">
                <center>
                    <h1 className = "staff-title">Our great Staff</h1>
                </center>
                <div className = "staff-section">
                    {this.state.staffData.map(data => {
                        return <Staff data = {data} />
                    })}
                </div>
            </div>
        )
    }
}

export default Section5 ;