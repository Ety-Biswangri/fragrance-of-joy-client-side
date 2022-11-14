import React, { useEffect, useState } from 'react';

const useInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch("https://fragrance-of-joy.onrender.com/inventories")
            .then(res => res.json())
            .then(data => setInventories(data));
    }, []);

    return [inventories, setInventories];
}

export default useInventories;