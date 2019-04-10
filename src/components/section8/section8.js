import React , { Component } from 'react' ;
import Delivery from './delivery' ;

class Section8 extends Component{
    render(){
        return(
            <div classNAme = "section8">
                <center>
                    <h1 className = "delivery-title">
                        Hot Delivery Service
                    </h1>
                </center>
                <div className = "delivery-main">
                    <Delivery/>
                    <Delivery/>
                </div>
            </div>
        )
    }
}

export default Section8 ;