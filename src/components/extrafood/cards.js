import React , { Component } from 'react' ;
import CardLocal from './card' ;
import Card2 from './card2' ;


class Cards extends Component{
    constructor(props){
        super(props) ;
        this.state = {
            food : [
                {
                    name : "Makloub" ,
                    picture : "https://pizzeriayai.files.wordpress.com/2016/04/1652145_1655069722_n.jpg?w=1531&h=1077" ,
                    price : 5000 ,
                    duration : 12 ,
                    rate : 4.3
                } ,
                {
                    name : "Makloub" ,
                    picture : "https://www.lasultanemag.com/wp-content/uploads/2017/03/mlawi-1024x643.jpg" ,
                    price : 4100 ,
                    duration : 8 ,
                    rate : 4.3
                } ,
                {
                    name : "Makloub" ,
                    picture : "https://pizzeriayai.files.wordpress.com/2016/04/1652145_1655069722_n.jpg?w=1531&h=1077" ,
                    price : 5000 ,
                    duration : 12 ,
                    rate : 4.3
                } ,
                {
                    name : "Makloub" ,
                    picture : "https://pizzeriayai.files.wordpress.com/2016/04/1652145_1655069722_n.jpg?w=1531&h=1077" ,
                    price : 5000 ,
                    duration : 12 ,
                    rate : 4.3
                } ,
                {
                    name : "Makloub" ,
                    picture : "https://pizzeriayai.files.wordpress.com/2016/04/1652145_1655069722_n.jpg?w=1531&h=1077" ,
                    price : 5000 ,
                    duration : 12 ,
                    rate : 4.3
                } ,
                {
                    name : "Makloub" ,
                    picture : "https://pizzeriayai.files.wordpress.com/2016/04/1652145_1655069722_n.jpg?w=1531&h=1077" ,
                    price : 5000 ,
                    duration : 12 ,
                    rate : 4.3
                } ,
                {
                    name : "Makloub" ,
                    picture : "https://pizzeriayai.files.wordpress.com/2016/04/1652145_1655069722_n.jpg?w=1531&h=1077" ,
                    price : 5000 ,
                    duration : 12 ,
                    rate : 4.3
                }
            ]
        }
    }
    render(){
        let foodToRender = [] ;
        this.state.food.map(food => {
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