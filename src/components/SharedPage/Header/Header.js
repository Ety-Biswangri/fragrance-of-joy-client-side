import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{
                backgroundColor: "#01497c"
            }}>
                <Container>
                    <Navbar.Brand as={Link} to="/">Fragnance of Joy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>

                            <Nav.Link as={Link} to="/manageInventories">Manage Inventories</Nav.Link>

                            {
                                user
                                    ?
                                    <>
                                        <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>

                                        <Nav.Link as={Link} to="/addItems">Add Items</Nav.Link>

                                        {/* <Nav.Link as={Link} to="/manageItems">Manage Items</Nav.Link> */}

                                        <Button style={{ backgroundColor: "lightblue", color: "black" }} onClick={() => signOut(auth)}>Log Out</Button>
                                    </>
                                    :
                                    <Link to="/login"><Button style={{ backgroundColor: "lightblue", color: "black" }}>Login</Button></Link>
                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
};

export default Header;