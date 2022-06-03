import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{
                backgroundColor: "#013a63"
            }}>
                <Container>
                    <Navbar.Brand className='fw-bold' as={Link} to="/">Fragrance of Joy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto">
                            <Nav.Link className='navbar-font' as={Link} to="/home">Home</Nav.Link>

                            {
                                user && <>
                                    <Nav.Link className='navbar-font' as={Link} to="/manageInventories">Manage Inventories</Nav.Link>

                                    <Nav.Link className='navbar-font' as={Link} to="/myItems">My Items</Nav.Link>

                                    <Nav.Link className='navbar-font' as={Link} to="/addItems">Add Items</Nav.Link>
                                </>
                            }

                            <Nav.Link className='navbar-font' as={Link} to="/blogs">Blogs</Nav.Link>

                            <Nav.Link className='navbar-font' as={Link} to="/aboutUs">Our Team</Nav.Link>

                            {
                                user
                                    ?
                                    <>
                                        <Button style={{ backgroundColor: "lightblue", color: "black", fontWeight: "600" }} onClick={() => signOut(auth)}>Log Out</Button>
                                    </>
                                    :
                                    <Link to="/login"><Button style={{ backgroundColor: "lightblue", color: "black", fontWeight: "600" }}>Login</Button></Link>
                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
};

export default Header;