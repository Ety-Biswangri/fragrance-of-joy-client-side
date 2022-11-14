import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import './InventoryDetail.css';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    const { register, handleSubmit } = useForm();
    const [isReload, setIsReload] = useState(false);

    // console.log(inventory);

    useEffect(() => {
        fetch(`https://fragrance-of-joy.onrender.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [id, isReload]);

    const handleDelivered = (id) => {
        if (inventory.quantity < 1) {
            return;
        }

        const quantity = parseInt(inventory.quantity) - 1;
        const updateQuantity = { quantity };

        const url = `https://fragrance-of-joy.onrender.com/inventory/${id}`;

        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(result => {
                setIsReload(!isReload);
            })
    }

    const onSubmit = (data, event) => {
        // console.log(data);
        event.target.reset();

        const quantity = parseInt(data.quantity) + parseInt(inventory.quantity);
        const updateQuantity = { quantity };

        const url = `https://fragrance-of-joy.onrender.com/inventory/${id}`;

        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(result => {
                setIsReload(!isReload);
            })

    };

    const sold = <span className='text-danger fw-bold'>Sold Out</span>
    const available = <span className='fw-bold text-success'>Available</span>

    return (
        <div className='my-5'>
            <Container>
                <Card className='inventory-detail-card'>
                    <div className="d-md-flex justify-content-center align-items-center">
                        <div className='w-100'>
                            <img className='img-fluid inventory-detail-image' src={inventory.image} alt="" />
                        </div>
                        <div className='w-100'>
                            <Card.Body className='w-100'>
                                <Card.Title className='fw-bolder mb-3 text-center'>{inventory.name}</Card.Title>

                                <Card.Text className='text-center'> <span className='fw-bold'>Id:</span> {inventory._id}</Card.Text>

                                <Card.Text style={{ textAlign: "justify" }} >
                                    <span className='fw-bold'>Description:</span> {inventory.description}
                                </Card.Text>

                                <Card.Text>
                                    <span className='fw-bold'>Price:</span>
                                    <span style={{ color: "#cd8f18", fontWeight: "600" }}> ${inventory.price}</span>
                                </Card.Text>

                                <Card.Text>
                                    <span className='fw-bold'>Quantity:</span> {inventory.quantity}
                                </Card.Text>

                                <Card.Text>
                                    <span className='fw-bold'>Supplied By:</span> {inventory.supplierName}
                                </Card.Text>

                                <Card.Text> <span className='fw-bold'>Product Status:</span> {inventory.quantity === 0 ? sold : available}</Card.Text>

                                <Button onClick={() => handleDelivered(id)} style={{ backgroundColor: "#cbad20", marginBottom: "1rem", border: "none" }}>Delivered</Button>

                                <div>
                                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                                        <input placeholder='Enter quantity' min='0' type="number" className='mb-2' {...register("quantity", { required: true, maxLength: 20 })} />

                                        <input type="submit" style={{ backgroundColor: "#3bb630", border: "none", color: "white", padding: "0.2rem 0.5rem", marginLeft: "3px", borderRadius: "4px" }} value="Restock" />
                                    </form>
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <div className='text-center mt-5'>
                    <Link to="/manageInventories">
                        <Button style={{ backgroundColor: "#2a6f97", fontWeight: "640" }}>Manage Inventories</Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default InventoryDetail;