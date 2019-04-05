import React , { Component } from 'react' ;
import { Navbar } from 'react-bootstrap' ;
import { Nav } from 'react-bootstrap' ;
import { NavDropdown} from 'react-bootstrap' ;
import { Form } from 'react-bootstrap' ;
import { FormControl } from 'react-bootstrap' ;
import { Button } from 'react-bootstrap' ;

class NavBar extends Component {
    render(){
        return(
            <div>
                <center>
                    <Navbar style = {{backgroundColor : "#2b2828"}} bg="" expand="lg" fixed = "top">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <Nav.Link href = "#best-food"> Best Food</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </center>
            </div>
        )
    }
}

export default NavBar ;