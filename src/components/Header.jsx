import React from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="py-3
       shadow-sm bg-white">
        <Container fluid>
          <Navbar.Brand to="#" className="fw-bold fs-4">La Collection</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="products">Products</Nav.Link>
              <Nav.Link to="about">About</Nav.Link>
              <Nav.Link to="contact">Contact</Nav.Link>
             
             
            </Nav>

             <div className="buttons">
                <NavLink to="login" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1" aria-hidden="true"></i>Login</NavLink>
                <NavLink to="register" className="btn btn-outline-dark"><i className="fa fa-user-plus me-1" aria-hidden="true"></i>Register</NavLink>
                <NavLink to="cart" className="btn btn-outline-dark"><i className="fa fa-shopping" aria-hidden="true"></i>Cart 0</NavLink>
          
          
             </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
