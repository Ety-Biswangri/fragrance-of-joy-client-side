import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className='text-black'>Fragnance of Joy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home" className='text-black'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/manageInventories" className='text-black'>Manage Inventories</Nav.Link>
                        <button>Login</button>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;