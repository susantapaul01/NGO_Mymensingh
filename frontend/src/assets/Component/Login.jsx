import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <Container fluid className="d-flex justify-content-center align-items-center vh-100" >
            <Form onSubmit={handleSubmit} className="p-4 border rounded bg-light w-100" style={{ maxWidth: '500px' }} >
                <h2 className="text-center mb-4">লগইন করুন</h2>
                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>ইমেইল</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="ইন্টার ইমেইল"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required  
                    />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-4">
                    <Form.Label>পাসওয়ার্ড</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="ইন্টার পাসওয়ার্ড"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="success" type="submit" className="w-100 mb-4">
                      লগইন করুন
                </Button>
                <Nav className="">
                    <Nav.Link as={Link} to="/email-verity" className='mx-auto link-danger link-offset-2 text-decoration-underline'>পাসওয়ার্ড ভুলে গিয়েছি</Nav.Link>
                </Nav>
            </Form>
        </Container>
    );
}

export default Login;
