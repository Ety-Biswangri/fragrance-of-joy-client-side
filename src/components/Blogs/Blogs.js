import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <Container>
                <h2 className='my-5 text-center' style={{ color: "#01497c" }}>Blogs</h2>

                <div className='my-5 blog-cards'>
                    <Card className='blog-margin'>
                        <Card.Body className='blog-card'>
                            <Card.Title className='mb-4 question'>Difference between JavaScript and Node.js.</Card.Title>
                            <Card.Text>
                                <p>
                                    Differences between JavaScript and nodejs are given below:
                                </p>
                                <ul className='blog-ul'>
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
                    <Card className='blog-margin'>
                        <Card.Body className='blog-card'>
                            <Card.Title className='mb-4 question'>Differences between sql and nosql databases.</Card.Title>
                            <Card.Text>
                                <p>
                                    Differences between SQL and NoSQL databases are given below:
                                </p>
                                <ul className='blog-ul'>
                                    <li>
                                        SQL stands for Structured Query Language, are called as Relational Database Management System. Whereas NoSQL stands for Not SQL, are called as Non-relational Database System.
                                    </li>
                                    <li>
                                        SQL databases are table-based (with fixed rows and columns). On the other hand, NoSQL databases can be document, key-valu, graph based.
                                    </li>
                                    <li>
                                        SQL databases are the databases with a pre-defined schema. On the contrary, NoSQL databases use dynamic schema for unstructured data.
                                    </li>
                                    <li>
                                        Example of SQL database: MySQL, Oracle, Microsoft SQL Server, PostgreSQL.
                                        <br />
                                        Example of NoSQL database: MongoDB, CouchDB, DynamoDB.
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body className='blog-card'>
                            <Card.Title className='mb-4 question'>What is the purpose of jwt and how does it work?</Card.Title>
                            <Card.Text>
                                <p>
                                    The purpose of using JWT is for securing APIs.JWT is mainly used for authorization purposes. Without JWT user can not access the protected route.
                                    <br />
                                    <span style={{ display: "block" }} className="my-3">
                                        JWT stands for JSON Web Token. The working process of JWT is given below:
                                    </span>
                                    <ul className='blog-ul'>
                                        <li>
                                            User sign in with username and password.
                                        </li>
                                        <li>
                                            Authentication server creates a token for the user and sends the token to the user.
                                        </li>
                                        <li>
                                            The token is stored in the client side. When the user makes a request, he/she sends a copy of the stored token to the server.
                                        </li>
                                        <li>
                                            Server verifies the JWT signature before giving the authorization and responds to the user's request.
                                        </li>
                                    </ul>
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </Container>
        </div>
    );
};

export default Blogs;