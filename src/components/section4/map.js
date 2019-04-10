import React , { Component } from 'react' ;
import './section4.css' ;

class Map extends Component{
    render(){
        return(
            <div className = "map">
                <center>
                    <h1 className = "map-title">
                        {this.props.location}
                    </h1>
                </center>
                {this.props.iframe}    
            </div>
            ) ;
    }
}


export default Map ;

