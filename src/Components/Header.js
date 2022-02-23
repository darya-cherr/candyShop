import React, {Component} from 'react';
import logo from './logo.png';
import {Button, Figure, Nav, Navbar, NavLink} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom";

function Header(){
    return (
       <>
           <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="px-5">
               <Navbar.Brand  className="mx-5">
                    <img src={logo}
                         height="60"
                         width="150"
                         className="mx-5"
                    />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
               <Navbar.Collapse id="responsive-navbar-nav" className="mx-auto">
                   <Nav className="mx-auto">
                        <Nav.Link className="me-5"> HOME</Nav.Link>
                        <Nav.Link className="me-5"> ABOUT US</Nav.Link>
                        <Nav.Link className="me-5"> PRODUCTS</Nav.Link>
                        <Nav.Link className="me-5"> CONTACTS</Nav.Link>
                       {/*<Nav.Link className="me-5"><Link to="/"> HOME</Link></Nav.Link>
                       <Nav.Link className="me-5"><Link to="/about"> ABOUT US</Link></Nav.Link>
                       <Nav.Link className="me-5"><Link to="/products"> PRODUCTS</Link></Nav.Link>
                       <Nav.Link className="me-5"><Link to="/contacts"> CONTACTS</Link></Nav.Link>*/}
                   </Nav>
                   <Nav className="me-5">
                       <Button variant="danger" className="me-5">Log In</Button>
                   </Nav>
               </Navbar.Collapse>
           </Navbar>
           <ColoredLine color="black" />

       </>
    );
}
const ColoredLine = ({ color }) => (
    <hr
     style={{
        color: '#000000',
        backgroundColor: '#000000',
        height: .7,
        borderColor : '#000000',
        marginTop: 0
    }}
    />
);

export default Header;