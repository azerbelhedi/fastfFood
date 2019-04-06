import React , { Component } from 'react' ;
import { Navbar } from 'react-bootstrap' ;
import { Nav } from 'react-bootstrap' ;

class Subnav extends Component{
    render(){
        return(
            <React.Fragment>
                <center>
                    <Navbar className = "sub-nav"  bg="" expand = {true}  collapseOnSelect = {true}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#section1">
                                        <h3 className = "nav-item"> ENTRÉES </h3>
                                    </Nav.Link>
                                    <Nav.Link href="#section2" className = "nav-item">
                                        <h3 className = "nav-item"> SPÉCIALITÉS DU CHEF </h3>
                                    </Nav.Link>
                                    <Nav.Link href = "#best-food" className = "nav-item">
                                        <h3 className = "nav-item"> PIZZA et PASTA  </h3>
                                    </Nav.Link>
                                    <Nav.Link href = "#best-food" className = "nav-item">
                                        <h3 className = "nav-item"> CALZONE et PANINI </h3>
                                    </Nav.Link>
                                    <Nav.Link href = "#best-food" className = "nav-item">
                                        <h3 className = "nav-item">HAMBURGERS </h3>
                                    </Nav.Link>
                                   
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                </center>
            </React.Fragment>
        )
    }
}

export default Subnav ;