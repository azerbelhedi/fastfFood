import React , { Component } from 'react' ;
import './section6.css' ;

class SideFood extends Component{
    render(){
        return(
            <div className = "side-food">
                <h3 className = "food-nature">{this.props.data.foodNature}</h3>
                <h5 className = "food-desc">{this.props.data.foodDesc}</h5>
            </div>
        )
    }
}

export default SideFood ;