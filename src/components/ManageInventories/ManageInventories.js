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

    const sold = <span className='text-danger fw-bold'>Sold Out</span>
    const available = <span className='fw-bold text-success'>Available</span>

    const displayDescription = (description) => {
        return description.length < 100 ? description : description.slice(0, 97) + "...";
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
            <h2 className='my-5 text-center' style={{ color: "#01497c" }}>Total Inventory Items: {inventories.length}</h2>

            <div className='text-center'>
                <Link to="/addItems">
                    <Button style={{ backgroundColor: "#3bb630", border: "none" }}>Add New Item</Button>
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
                            <Card key={inventory._id} className="card-container h-100">
                                <Card.Img variant="top" src={inventory.image} className="img-fluid image" style={{ height: '230px' }} />
                                <Card.Body>
                                    <Card.Title className='fw-bolder'>{inventory.name}</Card.Title>
                                    <Card.Text style={{ textAlign: "justify" }} title={inventory.description}>
                                        {
                                            displayDescription(inventory.description)
                                        }
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='card-points'> Price:</span> ${inventory.price}
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='card-points'>Quantity:</span> {inventory.quantity}
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='card-points'>Supplied By:</span> {inventory.supplierName}
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='card-points'>Product Status:</span> {inventory.quantity === 0 ? sold : available}
                                    </Card.Text>

                                    <div className='d-flex justify-content-center'>
                                        <Button style={{ marginRight: "6rem" }} className='card-button update-button' onClick={() => navigateToInventoryDetail(inventory._id)}>Update</Button>

                                        <button style={{ marginLeft: "6rem", padding: "0.47rem 0.6rem" }} className='card-button delete-button' onClick={() => handleDelete(inventory._id)}>Delete</button>
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
