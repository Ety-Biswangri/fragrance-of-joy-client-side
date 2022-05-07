import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import Loading from '../SharedPage/Loading/Loading';
import './ManageInventories.css';

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories();
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }

    const handleDelete = id => {
        const confirmation = window.confirm("Are you sure to delete the item?");

        if (confirmation) {
            fetch(`https://mysterious-wildwood-65853.herokuapp.com/inventory/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remainingData = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remainingData);
                });
        }
    }

    return (
        <div className='my-5'>
            <h2 className='my-5 text-center'>Total Number of Items: {inventories.length}</h2>

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
                    inventories.map(inventory => <Container key={inventory._id}>
                        <CardGroup className='card-group-style'>
                            <Card
                                className="card-container h-100">
                                <Card.Img variant="top" src={inventory.image} className="img-fluid image" style={{ height: '230px' }} />
                                <Card.Body>
                                    <Card.Title>{inventory.name}</Card.Title>
                                    <Card.Text>
                                        {inventory.description}
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
                                    <Card.Text>Product Status: {inventory.quantity === 0 ? "Sold Out" : 'Available'}</Card.Text>

                                    <div className='d-flex justify-content-center'>
                                        <Button style={{ marginRight: "6rem" }} variant="primary" className='card-button' onClick={() => navigateToInventoryDetail(inventory._id)}>Update</Button>

                                        <Button style={{ marginLeft: "6rem" }} className='card-button' variant="danger" onClick={() => handleDelete(inventory._id)}>Delete</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Container>
                    )
                }
            </div>
        </div>
    );
};

export default ManageInventories;