import React , { Component } from 'react' ;
import { Card } from 'react-bootstrap' ;



class CardLocal extends Component{
    constructor(props){
        super(props) ;
    }
    render(){
        return(
            <Card className = "card">
                <Card.Img variant="top" src={this.props.data.picture + "/100px180"} />
                <Card.Body>
                    <Card.Title className = "food-name">{this.props.data.name}</Card.Title>
                    <Card.Text className = "food-name"> {this.props.data.price} </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default CardLocal ;