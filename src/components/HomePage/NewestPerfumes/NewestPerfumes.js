import React from 'react';
import { Card, CardGroup, Container, Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import './NewestPerfumes.css';

const NewestPerfumes = () => {
    const [inventories] = useInventories();
    const slicedPerfumes = inventories.slice(-4);
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='latest-perfume'>
            <h2 style={{ color: "#01497c" }}>Latest Perfumes</h2>
            <Container>
                <Carousel className="carouselItem">
                    {
                        slicedPerfumes.map(inventory => <Carousel.Item key={inventory._id} >
                            <Card className='text-center'>
                                <Card.Img variant="top" src={inventory.image} className="img-fluid latest-perfume-image" style={{ height: '20rem' }} />
                                <Card.Body className='mb-3'>
                                    <Card.Title className='my-3 fw-bolder fs-4'>{inventory.name}</Card.Title>
                                    <Card.Text className='fs-5'>
                                        <span className='fw-bold'>Price:</span>  <span style={{ color: "#cd8f18", fontWeight: "600" }}> ${inventory.price}</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='fw-bold'>Quantity:</span> {inventory.quantity}
                                    </Card.Text>

                                    <div className='d-flex justify-content-center'>
                                        <Button className='card-button w-50 update-button' onClick={() => navigateToInventoryDetail(inventory._id)}>Update</Button>
                                    </div>
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