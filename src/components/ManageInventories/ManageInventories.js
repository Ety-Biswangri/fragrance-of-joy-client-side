import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';

const ManageInventories = () => {
    const [inventories] = useInventories();
    return (
        <div className='my-5'>
            <h2 className='my-5 text-center'>Inventories</h2>

            <div className='text-center'>
                <Link to="/addItems">
                    <Button>Add New Items</Button>
                </Link>
            </div>

            <div className="sliced-inventories-container my-4">
                {
                    inventories.map(inventory => <Container>
                        <Card key={inventory._id} className="card">
                            <Card.Img variant="top" src={inventory.image} className="img-fluid image" />
                            <Card.Body>
                                <Card.Title>{inventory.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Text>
                                    Price: ${inventory.price}
                                </Card.Text>
                                <Card.Text>
                                    Quantity: {inventory.quantity}
                                </Card.Text>
                                <Card.Text>
                                    Supplied By: {inventory.supplierName}
                                </Card.Text>

                                <Button variant="primary">Update</Button>
                                <span className='ms-3'>
                                    <Button variant="danger">Delete</Button>
                                </span>
                            </Card.Body>
                        </Card>
                    </Container>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;