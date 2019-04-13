import React , { Component } from "react" ;
import SideFood from './side-food' ;
import './section6.css' ;

class Today extends Component{
    render(){
        return(
            <div className = "section6">
                <div className = "today-title">
                    <center>
                        <h1>The Meal Of The Day</h1>
                    </center>
                </div>
                <div className = "main-today">
                    <div className = "pic">
                        <img src = "https://static01.nyt.com/images/2015/07/27/dining/27SPAGHETTI/27SPAGHETTI-superJumbo.jpg" />
                    </div>
                    <div className = "data">
                        <h4 className="side-food-title">Monday  15  2019</h4>
                        <SideFood data = {{foodNature : "Entrée" , foodDesc : "eza ea zeaz zaeaze zae zaez azezae"}} />
                        <SideFood data = {{foodNature : "Principal" , foodDesc : "dqsd sqdqsd qsdqsd qsdsq dsqd"}}/>
                        <SideFood data = {{foodNature : "Price" , foodDesc : "23.000 DNT"}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Today ;