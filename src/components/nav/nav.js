import React , { Component } from 'react' ;
import { Navbar } from 'react-bootstrap' ;
import { Nav } from 'react-bootstrap' ;
import Container from 'react-bootstrap/Container' ;
import './nav.css' ;


const Title = () => {
    return(
        <div>
            <center>
                <div className = "logo2"></div>
            </center>
        </div>
    )
}


class NavBar extends Component {
    render(){
        return(
            <div>
                <Container>
                    <Navbar className = "nav"  bg="" expand="lg" fixed = "top" collapseOnSelect = {true}>
                        <Navbar.Brand href="top">
                            <Title/> 
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#section1">
                                    <h3 className = "nav-item"> Home </h3>
                                </Nav.Link>
                                <Nav.Link href="#section2" className = "nav-item">
                                    <h3 className = "nav-item"> Food </h3>
                                </Nav.Link>
                                <Nav.Link href = "#section3" className = "nav-item">
                                    <h3 className = "nav-item"> Coffee </h3>
                                </Nav.Link>
                                <Nav.Link href = "#section4" className = "nav-item">
                                    <h3 className = "nav-item"> Map </h3>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        )
    }
}

export default NavBar ;