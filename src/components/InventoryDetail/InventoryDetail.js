import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    // console.log(inventory);

    useEffect(() => {
        fetch(`https://mysterious-wildwood-65853.herokuapp.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [id]);

    return (
        <div className='my-5'>
            <Container>
                <Card key={inventory._id}>
                    <div className='mx-auto my-3'>
                        <img style={{ width: "25rem" }} className='img-fluid' src={inventory.image} alt="" />
                    </div>
                    <Card.Body className='text-center'>
                        <Card.Title>{inventory.name}</Card.Title>
                        <Card.Text>Product Id: {inventory._id}</Card.Text>
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
                        <Card.Text>Product Status: Sold</Card.Text>

                        <Button variant="primary">Delivered</Button>
                    </Card.Body>
                </Card>
                <div className='text-center mt-3'>
                    <Link to="/manageInventories">
                        <Button variant="success">Manage Inventories</Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default InventoryDetail;