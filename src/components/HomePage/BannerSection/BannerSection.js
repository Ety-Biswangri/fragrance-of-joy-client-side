import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/perfume-banner1.jpg';
import banner2 from '../../../images/perfume-banner2.jpg';
import banner3 from '../../../images/perfume-banner3.jpg';
import './BannerSection.css';

const BannerSection = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item className='image-background'>
                    <img style={{ height: "35rem" }}
                        className="d-block w-100 fluid slide-image"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='slide-caption'>
                        <h2 >Collection of Best Perfumes</h2>
                        <div className='text-center'>
                            <Link to="/addItems">
                                <Button style={{ backgroundColor: "#a9d6e5", fontWeight: "600", color: "Black" }}>Add New Perfume</Button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='image-background'>
                    <img style={{ height: "35rem" }}
                        className="d-block w-100 fluid slide-image"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='slide-caption'>
                        <h2>Exclusive Perfumes Item</h2>
                        <div className='text-center'>
                            <Link to="/addItems">
                                <Button style={{ backgroundColor: "#a9d6e5", fontWeight: "600", color: "Black" }}>Add New Perfume</Button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item className='image-background'>
                    <img style={{ height: "35rem" }}
                        className="d-block w-100 fluid slide-image"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='slide-caption'>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>
    );
};

export default BannerSection;