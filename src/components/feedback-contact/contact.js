import React , { Component } from 'react' ;
import General from '../media/general' ;

class Contact extends Component{
    render(){
        return(
            <div className = "contact">
            <h1 className = "contact-title">Contact</h1>
                <General data = {{link : "www.facebook.com" , logo : "https://image.flaticon.com/icons/svg/124/124010.svg" , data : "Planet Food Facebook"}}/>
                <General data = {{link : "www.instagram.com" , logo : "https://image.flaticon.com/icons/svg/174/174855.svg" , data : "Planet Food Instagram"}}/>
                <General data = {{link : "www.twitter.com" , logo : "https://image.flaticon.com/icons/svg/1051/1051280.svg" , data : "Planet Food Twitter"}}/>
                <General data = {{link : "" , logo : "https://image.flaticon.com/icons/svg/732/732200.svg" , data : "feedback@planetfood.com"}}/>
                <General data = {{link : "" , logo : "https://image.flaticon.com/icons/svg/9/9243.svg" , data : "73 568 214"}}/>
                <General data = {{link : "" , logo : "https://image.flaticon.com/icons/svg/0/191.svg" , data : "58 232 735"}}/>

            </div>
        )
    }
}

export default Contact ;