import React from 'react';
import logo from './logo.png';
import {Button, Nav, Navbar, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom";
import styled from "styled-components"
import Glide from "@glidejs/glide";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";


const Styles = styled.div `
  a, .navbar-nav, .nav-link 
  { color: #000000;
    font-size: 110%;
    text-decoration: none;
    font-weight: normal;
    font-family: Candara;
    &:hover {
      font-weight: bold;
    }
  }
  .button{
    color: white;
  }

  .shadow1 {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  }
`

function Header(){
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
       <>
          <Styles>
           <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="shadow1">
               <Container>
               <Navbar.Brand  className="mx-5">
                    <img src={logo}
                         height="60"
                         width="150"
                    />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
               <Navbar.Collapse id="responsive-navbar-nav" className="mx-auto ms-5">
                   <Nav className="mx-auto ">
                       <Nav.Link className="me-5"><Link to="/"> HOME</Link></Nav.Link>
                       <Nav.Link className="me-5"><Link to="/about"> ABOUT US</Link></Nav.Link>
                       <Nav.Link className="me-5"><Link to="/products"> PRODUCTS</Link></Nav.Link>
                       <Nav.Link className="me-5"><Link to="/contacts"> CONTACTS</Link></Nav.Link>
                   </Nav>
                   <Nav className="me-5">
                       {isAuth &&  <Button variant="danger" className="me-5" onClick={() => dispatch(logout())}><Link to="/authorization" className="button">Log Out</Link></Button>}
                       {!isAuth &&  <Button variant="danger" className="me-5"><Link to="/authorization" className="button">Log In</Link></Button>}
                   </Nav>
               </Navbar.Collapse>
               </Container>
           </Navbar>
          </Styles>
           <ColoredLine color="black" />
       </>
    );
}
const ColoredLine = ({ color }) => (
    <hr
     style={{
        color: '#000000',
        backgroundColor: '#000000',
        height: 2,
        borderColor : '#000000',
        marginTop: 0,
        marginBottom: 0,
    }}
    />
);


export default Header;