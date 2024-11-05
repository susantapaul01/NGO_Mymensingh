import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OtpVerity() {
    const [formData, setFormData] = useState({
        otp: ''
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
                {/* <h2 className="text-center mb-4">লগইন করুন</h2> */}
                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>ওটিপি (OTP) লিখুন</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="XXXXXX"
                        name="otp"
                        value={formData.otp}
                        onChange={handleChange}
                        required  
                    />
                </Form.Group>
                
                <Button variant="success" type="submit" className="w-100 mb-4">
                    সেন্ড
                </Button>
                <Nav className="">
                    <Nav.Link as={Link} to="/login" className='mx-auto link-danger link-offset-2 text-decoration-underline'>লগইন করুন</Nav.Link>
                </Nav>
            </Form>
        </Container>
    );
}

export default OtpVerity;