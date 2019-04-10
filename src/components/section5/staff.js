import React , { Component } from 'react' ;
import './section5.css' ;

class Staff extends Component{
    render(){
        return(
            <div className = "staff">
                <center>
                    <div className = "staff-pic">
                        <img src = {this.props.data.picture}/>
                    </div>
                    <div className = "staff-name">
                        <h3>{this.props.data.name}</h3>
                    </div>
                    <div className = "staff-job">
                        <h4>{this.props.data.job}</h4>
                    </div>
                </center>    
            </div>
        )
    }
}

export default Staff ;