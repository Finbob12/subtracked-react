import React, { Component } from 'react';
import {signIn} from '../services/authServices'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class LogIn extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        first_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        errors: ''
       };
    }
    
    // Keep track of changes to form fields
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault()
        // const {first_name, email, password} = this.state
        // let user = {
        //     first_name: first_name,
        //     email: email,
        //     password: password
        // }

        // Call signIn method from authServices in ../services
        signIn(this.state)
        .then(response => {
            // console.log(response)
            // if (response.data) {
            // console.log(this.props)
            this.props.handleLogin(response)
            // After successful login, redirect to 'My Subs' page (see below)
            this.redirect()                

            // } else {
            //     this.setState({
            //     errors: response.data.errors
            //     })
            // }
            // dispatch({type: 'setLoggedInUser', data: username})
			// dispatch({type: 'setToken', data: jwt})
        })
        .catch(error => console.log('api errors:', error)) 
    }
    
    // axios.post('http://localhost:3001/login', {user}, {withCredentials: true})

    //     .then(response => {
    //         if (response.data.logged_in) {
    //             this.props.handleLogin(response.data)
    //             this.redirect()                
    //         } else {
    //             this.setState({
    //             errors: response.data.errors
    //             })
    //         }
    //     })
    //     .catch(error => console.log('api errors:', error))    

    redirect = () => {
        this.props.history.push('/my-subs')
    }

    handleErrors = () => {
        return (
            <div>
                <ul>
                {this.state.errors.map(error => {
                    return <li key={error}>{error}</li>
                    })}
                </ul>
            </div>
        )
    };

    render() {
        const {first_name, email, password} = this.state 
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5 d-flex align-items-center">
                        <h1 className="form-heading">Log In</h1>
                    </div>
                    <Form onSubmit={this.handleSubmit} className="col-md-6 offset-md-1">
                        <Form.Group controlId="li-email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                placeholder="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                             />
                             <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="li-first-name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                placeholder="first name"
                                type="text"
                                name="first_name"
                                value={first_name}
                                onChange={this.handleChange}
                             />
                        </Form.Group>
                        <Form.Group controlId="li-password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                placeholder="password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                             />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default LogIn;

