import React , { Component } from 'react' ;
import CardLocal from './card' ;

class Cards extends Component{
    constructor(props){
        super(props) ;
        this.state = {
            food : [
                {
                    name : "Coffee azer" ,
                    picture : "https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale" ,
                    price : 2300 ,
                    duration : 3 ,
                    rate : 5
                } ,
                {
                    name : "Coffee azer" ,
                    picture : "https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale" ,
                    price : 2300 ,
                    duration : 3 ,
                    rate : 5
                } ,
                {
                    name : "Coffee azer" ,
                    picture : "https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale" ,
                    price : 2300 ,
                    duration : 3 ,
                    rate : 5
                } ,
                {
                    name : "Coffee azer" ,
                    picture : "https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale" ,
                    price : 2300 ,
                    duration : 3 ,
                    rate : 5
                } ,
                {
                    name : "Coffee azer" ,
                    picture : "https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale" ,
                    price : 2300 ,
                    duration : 3 ,
                    rate : 5
                } ,
                {
                    name : "Coffee azer" ,
                    picture : "https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale" ,
                    price : 2300 ,
                    duration : 3 ,
                    rate : 5
                } ,
                {
                    name : "Coffee azer" ,
                    picture : "https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale" ,
                    price : 2300 ,
                    duration : 3 ,
                    rate : 5
                } ,
                {
                    name : "Coffee azer" ,
                    picture : "https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale" ,
                    price : 2300 ,
                    duration : 3 ,
                    rate : 5
                }
            ]
        }
    }
    render(){
        let foodToRender = [] ;
        this.state.food.map(food => {
            foodToRender.push(<CardLocal  data = {food}/>)
        })
        return(
            <div className = "cards">
                {foodToRender}
            </div>
        )
    }
}

export default Cards ;