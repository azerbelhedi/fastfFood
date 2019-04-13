import React , { Component } from 'react' ;
import './section8.css' ;

const night = {
    backgroundImage : "url(https://images2.alphacoders.com/234/thumb-1920-234780.jpg)" ,
    backgroundSize :"cover"
}

const day = {
    backgroundImage : "url(data:image/jpeg;base64,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)" ,
    backgroundSize :"cover"
}

class InnerDelivery extends Component{
    render(){
        return(
            <div className = "delivery">
                <div className = "location" style = {this.props.data.day ? day : night }>
                    <div>{this.props.data.location}</div>
                    <div className = "day-mode">{this.props.data.day ? "Day" : "Night" }</div>
                </div>
                <div className = "price">
                    {this.props.data.price}
                </div>
                <div className = "time">
                    {`between ${this.props.data.time.start} Minutes and ${this.props.data.time.end} Minutes`}
                </div>
            </div>   
        )
    }
}

class DeliveryGeneral extends Component{
    render(){
        return(
            <div className = "delivery-general">
                <div className = "pic">
                    <img src = "https://bikky.com/wp-content/uploads/bikky-delivery-services.jpg"></img>
                </div>
                <div className = "delivery-data">
                    {this.props.data}
                </div>
            </div>
        )
    }
}

export default InnerDelivery ;
export { DeliveryGeneral };
