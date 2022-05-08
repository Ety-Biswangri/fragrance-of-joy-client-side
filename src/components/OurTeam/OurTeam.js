import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OurTeam.css';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';

const OurTeam = () => {
    return (
        <div className='my-5'>
            <Container>
                <h2 className='text-center mb-4'>Team Members</h2>
                <div className='team-cards'>
                    <Card className='team-card'>
                        <Card.Img className='team-image img-fluid' variant="top" src="https://raw.githubusercontent.com/Ety-Biswangri/images/main/person4.jpg" />
                        <Card.Body>
                            <Card.Title>William Blake</Card.Title>
                            <Card.Text>
                                Chief Excecutive Officer
                            </Card.Text>
                            <Link to="#">
                                <BsLinkedin className='ms-2 fs-4'></BsLinkedin>
                                <GrFacebook className='ms-2 fs-4'></GrFacebook>
                                <BsTwitter className='ms-2 fs-4'></BsTwitter>
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
                                <BsLinkedin className='ms-2 fs-4'></BsLinkedin>
                            </Link>
                            <Link to="#">
                                <GrFacebook className='ms-2 fs-4'></GrFacebook>
                            </Link>
                            <Link to="#">
                                <BsTwitter className='ms-2 fs-4'></BsTwitter>
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
                                <BsLinkedin className='ms-2 fs-4'></BsLinkedin>
                                <GrFacebook className='ms-2 fs-4'></GrFacebook>
                                <BsTwitter className='ms-2 fs-4'></BsTwitter>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </Container>

        </div>
    );
};

export default OurTeam;