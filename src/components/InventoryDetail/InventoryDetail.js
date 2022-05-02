import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    console.log(inventory);

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [id]);

    return (
        <div>
            <h1>Inventory Detail:{inventory.name}</h1>
        </div>
    );
};

export default InventoryDetail;