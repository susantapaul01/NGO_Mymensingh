import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Registration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
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
        <Container
            fluid
            className="d-flex justify-content-center align-items-center vh-100"
        >
            <Form onSubmit={handleSubmit} className="p-4 border rounded bg-light w-100" style={{ maxWidth: '500px' }}>
                <h2 className="text-center mb-4">রেজিস্ট্রেশন করুন</h2>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formFirstName">
                        <Form.Label>ফার্স্ট নেম</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="ইন্টার ফার্স্ট নেম"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastName">
                        <Form.Label>লাষ্ট নেম</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="ইন্টার লাষ্ট নেম"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Row>

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

                <Form.Group controlId="formRole" className="mb-3">
                    <Form.Label>রোল</Form.Label>
                    <Form.Select name="role" value={formData.role} onChange={handleChange} required>
                        <option disabled value="">রোল নির্বাচন করুন</option>
                        <option value="Admin">এডমিন</option>
                        <option value="Co-Admin">কো-এডমিন</option>
                        <option value="User">ইউজার</option>
                    </Form.Select>
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
                <Button variant="primary" type="submit" className="w-100">
                    রেজিস্ট্রেশন সাবমিট 
                </Button>
            </Form>
        </Container>
    );
}

export default Registration;
