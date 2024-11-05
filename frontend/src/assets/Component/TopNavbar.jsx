import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Dropdown, Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const TopNavbar = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to="/" className='text-secondary'>হোম</Nav.Link>
                        <Nav.Link as={Link} to="/all-ngo-frame" className='text-secondary'>এনজিও</Nav.Link>
                    </Nav>
                    {/* <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                    <Nav>
                        <Nav.Link as={Link} to="/login" className='secondary'>লগইন</Nav.Link>
                        <Nav.Link as={Link} to="/registration" className='secondary'>রেজিস্ট্রেশন</Nav.Link>
                        <Nav.Link as={Button} className='secondary'>লগ আউট</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default TopNavbar