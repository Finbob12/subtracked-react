import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'

// state = {
//   isOpen: false
// };

// toggleCollapse = () => {
//   this.setState({ isOpen: !this.state.isOpen });
// }

const NavbarPage = () => {
  return (
    <div>
      <Navbar className="navbar-main" variant="dark " sticky="top">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#my-subs">My Subs</Nav.Link>
          <Nav.Link href="#new-sub">New Sub</Nav.Link>
          <Nav.Link href="#account">Account</Nav.Link>
        </Nav>
        <Navbar.Brand href="#home" className="navbar-brand mx-auto">
          SubTracked
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#log">Log In/Out</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavbarPage