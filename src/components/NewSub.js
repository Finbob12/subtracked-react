import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NewSub = () => {
    return (
    <div className="container mt-3">
        <div className="row">
        <div className="col-md-5 d-flex align-items-center">
            <h1 className="form-heading">Add a new subscription!</h1>
        </div>
            <Form className="col-md-6 offset-md-1">
                <Form.Group controlId="name">
                    <Form.Label>Subscription Name</Form.Label>
                    <Form.Control type="text" placeholder="Search as user types" />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Description just for you to keep track of what this subscription is" />
                </Form.Group>
                <Form.Group controlId="cycle">
                    <Form.Label>Cycle</Form.Label>
                    <Form.Control as="select">
                        <option>Weekly</option>
                        <option>Fortnightly</option>
                        <option>Month</option>
                        <option>Quarterly</option>
                        <option>Yearly</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="first-payment">
                    <Form.Label>First Payment</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group controlId="last-payment">
                    <Form.Label>Last Payment</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Button variant="primary" type="submit">
                        Submit
                </Button>
            </Form>
        </div>
    </div>
    )
}

export default NewSub
