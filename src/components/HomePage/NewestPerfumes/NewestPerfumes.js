import React from 'react';
import { Card, CardGroup, Container, Carousel } from 'react-bootstrap';
import useInventories from '../../../hooks/useInventories';
import './NewestPerfumes.css';

const NewestPerfumes = () => {
    const [inventories] = useInventories();
    const slicedPerfumes = inventories.slice(-4);

    return (
        <div className='latest-perfume'>
            <h2>Latest Perfumes</h2>
            <Container>
                <Carousel className="carouselItem">
                    {
                        slicedPerfumes.map(inventory => <Carousel.Item key={inventory._id} >
                            <Card className='text-center'>
                                <Card.Img variant="top" src={inventory.image} className="img-fluid" style={{ height: '20rem' }} />
                                <Card.Body className='mb-3'>
                                    <Card.Title className='my-3 fw-bolder fs-4'>{inventory.name}</Card.Title>
                                    <Card.Text className='fs-5'>
                                        <span className='fw-bold'> Price:</span> <span style={{ color: "#c0930c" }}>${inventory.price}</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='fw-bold'>Quantity:</span> {inventory.quantity}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>)
                    }
                </Carousel>
            </Container>
        </div >
    );
};

export default NewestPerfumes;