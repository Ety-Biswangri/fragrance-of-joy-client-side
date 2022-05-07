import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
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

    const sold = <span className='text-danger fw-bold'>Sold Out</span>
    const available = <span className='fw-bold text-success'>Available</span>

    const displayDescription = (description) => {
        return description.length < 100 ? description : description.slice(0, 97) + "...";
    }

    return (
        <div className='my-items'>
            <h2 className='text-center my-5'>My Total Items: {items.length}</h2>

            <div className="sliced-inventories-container my-4">
                {
                    items.map(item => <Container key={item._id}>
                        <CardGroup className='card-group-style'>
                            <Card key={item._id} className="card-container h-100">
                                <Card.Img variant="top" src={item.image} className="img-fluid image" style={{ height: '230px' }} />
                                <Card.Body>
                                    <Card.Title className='fw-bolder'>{item.name}</Card.Title>
                                    <Card.Text style={{ textAlign: "justify" }} title={item.description}>
                                        {
                                            displayDescription(item.description)
                                        }
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='card-points'> Price:</span> ${item.price}
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='card-points'>Quantity:</span> {item.quantity}
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='card-points'>Supplied By:</span> {item.supplierName}
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='card-points'>Product Status:</span> {item.quantity === 0 ? sold : available}
                                    </Card.Text>

                                    <div className='d-flex justify-content-center'>
                                        <Button className='card-button w-100 delete-button' onClick={() => handleDelete(item._id)}>Delete</Button>
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
