import React from 'react';
import { Carousel } from 'react-bootstrap';
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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='image-background'>
                    <img style={{ height: "35rem" }}
                        className="d-block w-100 fluid slide-image"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='slide-caption'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='image-background'>
                    <img style={{ height: "35rem" }}
                        className="d-block w-100 fluid slide-image"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='slide-caption'>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BannerSection;