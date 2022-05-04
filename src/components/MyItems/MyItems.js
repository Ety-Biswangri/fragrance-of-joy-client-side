import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItems.css';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `https://mysterious-wildwood-65853.herokuapp.com/inventories?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [user])


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
                    const remainingData = items.filter(item => item._id !== id);
                    setItems(remainingData);
                });
        }
    }

    return (
        <div className='my-items'>
            <h1 className='text-center my-5'>My Items</h1>
            <div className="sliced-inventories-container my-4">
                {
                    items.map(item => <Container>
                        <CardGroup style={{ height: "38rem" }}>
                            <Card key={item._id}
                                className="card-container h-100">
                                <Card.Img variant="top" src={item.image} className="img-fluid image" />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Card.Text>
                                        Price: ${item.price}
                                    </Card.Text>
                                    <Card.Text>
                                        Quantity: {item.quantity}
                                    </Card.Text>
                                    <Card.Text>
                                        Supplied By: {item.supplierName}
                                    </Card.Text>

                                    <div className='d-flex justify-content-center'>
                                        <Button style={{ marginRight: "6rem" }} variant="primary" className='card-button' onClick={() => navigateToInventoryDetail(item._id)}>Update</Button>

                                        <Button style={{ marginLeft: "6rem" }} className='card-button' variant="danger" onClick={() => handleDelete(item._id)}>Delete</Button>
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

export default MyItems;