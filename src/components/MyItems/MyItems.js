import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../SharedPage/Loading/Loading';
import './MyItems.css';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {

        const getMyItems = async () => {
            const url = `https://mysterious-wildwood-65853.herokuapp.com/items?email=${user?.email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setItems(data);
            }
            catch (error) {
                // console.log(error.message);
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }

        getMyItems();

    }, [user])

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
            <h1 className='text-center my-5'>My Items: {items.length}</h1>

            <div className="sliced-inventories-container my-4">
                {
                    items.map(item => <Container key={item._id}>
                        <CardGroup className='card-group-style'>
                            <Card key={item._id}
                                className="card-container h-100">
                                <Card.Img variant="top" src={item.image} className="img-fluid image" style={{ height: '230px' }} />
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
                                    <Card.Text>Product Status: {item.quantity === 0 ? "Sold Out" : 'Available'}</Card.Text>

                                    <div className='d-flex justify-content-center'>
                                        <Button className='card-button w-100' variant="danger" onClick={() => handleDelete(item._id)}>Delete</Button>
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