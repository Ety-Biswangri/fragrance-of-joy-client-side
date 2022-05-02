import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const useInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch("https://mysterious-wildwood-65853.herokuapp.com/inventories")
            .then(res => res.json())
            .then(data => setInventories(data));
    }, []);

    return [inventories, setInventories];
}

export default useInventories;