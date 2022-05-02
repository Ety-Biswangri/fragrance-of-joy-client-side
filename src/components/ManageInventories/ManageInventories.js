import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import Loading from '../SharedPage/Loading/Loading';

const ManageInventories = () => {
    const [inventories] = useInventories();
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='my-5'>
            <h2 className='my-5 text-center'>Inventories</h2>

            <div className='text-center'>
                <Link to="/addItems">
                    <Button>Add New Items</Button>
                </Link>
            </div>

            {
                inventories.length === 0 ?
                    <Loading></Loading>
                    :
                    ''
            }

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

                                <Button variant="primary" onClick={() => navigateToInventoryDetail(inventory._id)}>Update</Button>
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