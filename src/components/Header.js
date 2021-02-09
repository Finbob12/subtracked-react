import React from "react"
// import {handleLogout} from "../App"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {LinkContainer} from 'react-router-bootstrap'

const Header = (props) => {
    const handleClick = () => {
        this.handleLogout()
    }

    return (
        <div>
            <Navbar className="navbar-main" variant="dark " sticky="top">
            {props.state.isLoggedIn ? (
            <>
                <Nav className="mr-auto">
                <LinkContainer to="/my-subs">
                    <Nav.Link>My Subs</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/new-sub">
                    <Nav.Link>New Sub</Nav.Link>
                </LinkContainer>
                </Nav>
                <LinkContainer to="/home">
                    <Navbar.Brand href="#home" className="navbar-brand mx-auto">
                        SubTracked
                    </Navbar.Brand>
                </LinkContainer>
                <Nav className="ml-auto">
                    <LinkContainer to="/account">
                        <Nav.Link>Account</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/home" onClick={handleClick}>
                        <Nav.Link>Log Out</Nav.Link>
                    </LinkContainer>
                </Nav>
            </>
            ) : (
                <>
                    <Nav className="mr-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <LinkContainer to="/home">
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
                </>
            )}
            </Navbar>
        </div>
    )
}

export default Header