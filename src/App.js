import React , { Component } from 'react' ;
import {BrowserRouter as Router , Link , Route , Switch } from 'react-router-dom' ;
import Public from './public' ;
import Admin from './Admin' ;

const Error = ({match}) => {
    return(
        <h1>404 Page not found !</h1>
    )
}

const RickPurge = () => {
    return(
        <div>
            <h1>You Son Of A B**ch </h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GY4yJoSSMZM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

class App extends Component{
    constructor(props){
        super(props) ;
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path = "/" component = {Public}/>
                    <Route path = "/admin" component = {Admin}/>
                    <Route path = "/extrafood" component = {RickPurge}/>
                    <Route component = {Error}/>
                </Switch>
            </Router>
        )
    }
}

export default App ;