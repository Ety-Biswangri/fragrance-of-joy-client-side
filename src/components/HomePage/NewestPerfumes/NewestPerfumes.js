import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import useInventories from '../../../hooks/useInventories';
import './NewestPerfumes.css';

const NewestPerfumes = () => {
    const [inventories] = useInventories();
    const slicedPerfumes = inventories.slice(-4);

    return (
        <div className='latest-perfume'>
            <h2>Latest Perfumes</h2>
            <div className="sliced-inventories-container">
                {
                    slicedPerfumes.map(inventory => <Container key={inventory._id}>
                        <CardGroup className='text-center'>
                            <Card>
                                <Card.Img variant="top" src={inventory.image} className="img-fluid" style={{ height: '230px' }} />
                                <Card.Body>
                                    <Card.Title>{inventory.name}</Card.Title>
                                    <Card.Text>
                                        <span> Price:</span> ${inventory.price}
                                    </Card.Text>
                                    <Card.Text>
                                        <span >Quantity:</span> {inventory.quantity}
                                    </Card.Text>
                                    <Card.Text>
                                        <span>Supplied By:</span> {inventory.supplierName}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Container>)
                }
            </div>
        </div>
    );
};

export default NewestPerfumes;