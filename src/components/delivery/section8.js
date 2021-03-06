import React , { Component } from 'react' ;
import InnerDelivery , { DeliveryGeneral } from './inner-delivery' ;
import './section8.css' ;

class Delivery extends Component{
    render(){
        return(
            <div className = "section8">
                <center>
                    <h1 className = "delivery-title">
                        Hot Delivery Service
                    </h1>
                </center>
                <div className = "delivery-main">
                    <InnerDelivery data = {{day : 1 , location : "Sahloul" , price : "2DNT" , time : {start : "15" , end : "30"}}}/>
                    <InnerDelivery data = {{day : 1 , location : "Sousse" , price : "2DNT" , time : {start : "10" , end : "45"}}}/>
                    <InnerDelivery data = {{day : 1 , location : "Khzema" , price : "6DNT" , time : {start : "20" , end : "50"}}}/>
                    <InnerDelivery data = {{day : 0 , location : "Sahloul" , price : "5DNT" , time : {start : "15" , end : "30"}}}/>
                    <InnerDelivery data = {{day : 0 , location : "Sousse" , price : "5DNT" , time : {start : "10" , end : "45"}}}/>
                    <InnerDelivery data = {{day : 0 , location : "Khzema" , price : "6DNT" , time : {start : "30" , end : "60"}}}/>
                </div>
                <div className = "delivery-data">
                    <DeliveryGeneral data = {`Si le total de la commande est inférieur à 49DT.900 alors vous payez  10% de la somme de la commande.
                                              Si le total de la commande est supérieur à 50DT alors la livraison est gratuite.`} />
                </div>
            </div>
        )
    }
}

export default Delivery ;