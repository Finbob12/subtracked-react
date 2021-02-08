import React from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Account extends React.Component {
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

    componentDidMount() {
        console.log(this.props.state.user)
        this.setState({
            first_name: this.props.state.user.first_name,
            email: '',
            password: '',
            password_confirmation: ''
        });
        console.log(this.props.state)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {first_name, email, password} = this.state
        let user = {
            first_name: first_name,
            email: email,
            password: password
        }
    
        // axios.post(`http://localhost:3001/users/${user.id}`, {user}, {withCredentials: true})
        // .then(response => {
        //     if (response.data.logged_in) {
        //         this.props.handleLogin(response.data)
        //         this.redirect()                
        //     } else {
        //         this.setState({
        //         errors: response.data.errors
        //         })
        //     }
        // })
        // .catch(error => console.log('api errors:', error))
    };

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5 d-flex align-items-center">
                        <h1 className="form-heading">Edit Account Info</h1>
                    </div>
                    <Form className="col-md-6 offset-md-1">
                        <Form.Group controlId="acc-email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="acc-username">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group controlId="acc-password">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="acc-confirm-password">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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

export default Account
