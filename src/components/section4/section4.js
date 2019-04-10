import React , { Component } from 'react' ;
import Map from './map' ;
import './section4.css' ;

class Section4 extends Component{
    render(){
        const code = <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.276130641492!2d10.60177221456883!3d35.86674943015145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a10940edb23%3A0x5c78a57f3eb72178!2sSalon+de+th%C3%A9+La+Rambla!5e0!3m2!1sen!2sus!4v1554849028473!5m2!1sen!2sus"
            width="450"
            height="450"
            frameborder="0"
            style={{border : 0 }} 
            allowfullscreen>
        </iframe>
        return(
            <div className = "section4">
                <center>
                    <h1 className = "map-title"> Our Locations </h1>
                </center>
                <div className = "maps">
                    <Map location = "sousse" iframe = {code} className = "map"/>
                    <Map location = "sahloul" iframe = {code} className = "map" />
                </div>
            </div>
        )
    }
}

export default Section4 ;