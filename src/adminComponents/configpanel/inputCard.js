import React , { Component } from 'react' ;

class InputCard extends Component{
    constructor(props){
        super(props) ;
        this.state = {
            name : "" ,
            picture : "" ,
            price : 0 ,
            rate : 0 ,
            duration : 0
        }
    }
    render(){
        return(
            <div className="input-card">
                <label> name : </label>
                <input type="text" placeholder = "name"/>
                <hr/>
                <label> picture : </label>
                <input type="text" placeholder = "picture url"/>
                <hr/>
                <label> price (dnt) : </label>
                <input type="number" placeholder = "price eg 4.5"/>
                <hr/>
                <label> duration (min) : </label>
                <input type="text" placeholder = "duration "/>
                <hr/>
                <label> rate : </label>
                <input type="number" max = "5" min = "1" placeholder = "eg 5 "/>
            </div>    
        )
    }

}

export default InputCard ;