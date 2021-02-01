import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Account = () => {
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
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="acc-password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="acc-confirm-password">
                        <Form.Label>Confirm Password</Form.Label>
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

export default Account
