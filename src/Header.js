import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {LinkContainer} from 'react-router-bootstrap'


// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'

// state = {
//   isOpen: false
// };

// toggleCollapse = () => {
//   this.setState({ isOpen: !this.state.isOpen });
// }

const Header = () => {
  return (
      <div>
        <Navbar className="navbar-main" variant="dark " sticky="top">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/my-subs">
              <Nav.Link>My Subs</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/new-sub">
              <Nav.Link>New Sub</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/account">
              <Nav.Link>Account</Nav.Link>
            </LinkContainer>
          </Nav>
          <LinkContainer to="/">
            <Navbar.Brand href="#home" className="navbar-brand mx-auto">
              SubTracked
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto">
          <LinkContainer to="/log-in">
              <Nav.Link>Log In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sign-up">
              <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
      </div>
  )
}

export default Header