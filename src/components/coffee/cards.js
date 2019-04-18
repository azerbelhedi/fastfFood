import React , { Component } from 'react' ;
import Card2 from './card2' ;

class Cards extends Component{
    constructor(props){
        super(props) ;    
    }

    render(){
        let foodToRender = [] ;
        this.props.data.map(food => {
            foodToRender.push(<Card2  data = {food}/>)
        })
        
        return(
            <div className = "cards">
                {foodToRender}
            </div>
        )
    }
}

export default Cards ;