import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';

const AboutUs = () => {
    return (
        <div className='teams'>
            <Container>
                <h2 className='text-center mt-5 mb-4' style={{ color: "#01497c" }}>Team Members</h2>
                <div className='team-cards'>
                    <Card className='team-card'>
                        <Card.Img className='team-image img-fluid' variant="top" src="https://raw.githubusercontent.com/Ety-Biswangri/images/main/person4.jpg" />
                        <Card.Body>
                            <Card.Title>William Blake</Card.Title>
                            <Card.Text>
                                Chief Excecutive Officer
                            </Card.Text>
                            <Link to="#">
                                <BsLinkedin className='ms-2 fs-5'></BsLinkedin>
                                <GrFacebook className='ms-4 me-2 fs-5'></GrFacebook>
                                <BsTwitter className='ms-3 fs-5'></BsTwitter>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='team-card'>
                        <Card.Img className='img-fluid team-image' variant="top" src="https://raw.githubusercontent.com/Ety-Biswangri/images/main/person2.jpg" />
                        <Card.Body>
                            <Card.Title>Kety Duron</Card.Title>
                            <Card.Text>
                                Team Leader
                            </Card.Text>
                            <Link to="#">
                                <BsLinkedin className='ms-2 fs-5'></BsLinkedin>
                            </Link>
                            <Link to="#">
                                <GrFacebook className='ms-4 me-2 fs-5'></GrFacebook>
                            </Link>
                            <Link to="#">
                                <BsTwitter className='ms-3 fs-5'></BsTwitter>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='team-card'>
                        <Card.Img className='img-fluid team-image' variant="top" src="https://raw.githubusercontent.com/Ety-Biswangri/images/main/person5.jpg" />
                        <Card.Body>
                            <Card.Title>Olivia Morris</Card.Title>
                            <Card.Text>
                                Project Manager
                            </Card.Text>
                            <Link to="#">
                                <BsLinkedin className='ms-2 fs-5'></BsLinkedin>
                                <GrFacebook className='ms-4 me-2 fs-5'></GrFacebook>
                                <BsTwitter className='ms-3 fs-5'></BsTwitter>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='team-card'>
                        <Card.Img className='img-fluid team-image' variant="top" src="https://raw.githubusercontent.com/Ety-Biswangri/images/main/person6.jpg" />
                        <Card.Body>
                            <Card.Title>Amelia Kerr</Card.Title>
                            <Card.Text>
                                Marketing Head
                            </Card.Text>
                            <Link to="#">
                                <BsLinkedin className='ms-2 fs-5'></BsLinkedin>
                                <GrFacebook className='ms-4 me-2 fs-5'></GrFacebook>
                                <BsTwitter className='ms-3 fs-5'></BsTwitter>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='team-card'>
                        <Card.Img className='img-fluid team-image' variant="top" src="https://raw.githubusercontent.com/Ety-Biswangri/images/main/person3.jpg" />
                        <Card.Body>
                            <Card.Title>Emma Mackey</Card.Title>
                            <Card.Text>
                                Support Manager
                            </Card.Text>
                            <Link to="#">
                                <BsLinkedin className='ms-2 fs-5'></BsLinkedin>
                                <GrFacebook className='ms-4 me-2 fs-5'></GrFacebook>
                                <BsTwitter className='ms-3 fs-5'></BsTwitter>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </Container>

        </div>
    );
};

export default AboutUs;