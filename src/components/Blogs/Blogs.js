import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Container>
                <h2 className='my-5 text-center' style={{ color: "#01497c" }}>Blogs</h2>

                <div className='my-5'>
                    <Card className='mb-4'>
                        <Card.Body>
                            <Card.Title className='mb-4'>Difference between javascript and nodejs</Card.Title>
                            <Card.Text>
                                <p>
                                    Differences between JavaScript and nodejs are given below:
                                </p>
                                <ul>
                                    <li>
                                        JavaScript is a programming language and it runs in web browsers. On the other hand, Node.js is a JavaScript runtime environment.
                                    </li>
                                    <li>
                                        JavaScript is mainly used on the client-side (front-end). Whereas Node.js is mainly used on the server-side (back-end).
                                    </li>
                                    <li>
                                        JavaScript can run in any browser JavaScript engine such as Spider Monkey (Firefox), V8 (Google Chrome). On the contrary, Node.js runs only in V8 engine which is the Google Chrome JS engine.
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='mb-4'>
                        <Card.Body>
                            <Card.Title className='mb-4'>Differences between sql and nosql databases.</Card.Title>
                            <Card.Text>
                                Chief Excecutive Officer
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title className='mb-4'>What is the purpose of jwt and how does it work</Card.Title>
                            <Card.Text>
                                Chief Excecutive Officer
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </Container>
        </div>
    );
};

export default Blogs;