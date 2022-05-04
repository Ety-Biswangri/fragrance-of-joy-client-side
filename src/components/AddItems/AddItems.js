import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        console.log(data)
        const url = `https://mysterious-wildwood-65853.herokuapp.com/inventories`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='w-50 mx-auto my-5' style={{ minHeight: "50vh" }}>
            <h2 className='text-center'>Add New Items</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' type="text" className='my-2' {...register("name", { required: true, maxLength: 50 })} />

                <input placeholder='Email' type="email" className='my-2' {...register("email")} readOnly value={user?.email} />

                <textarea placeholder='Description (max 100 characters)' className='mb-2' {...register("description", { required: true, maxLength: 100 })} />

                <input placeholder='Price' type="number" className='mb-2' {...register("price", { required: true, maxLength: 20 })} />

                <input placeholder='Quantity' type="number" className='mb-2' {...register("quantity", { required: true, maxLength: 20 })} />

                <input placeholder='Supplier Name' type="text" className='mb-2' {...register("supplierName", { required: true, maxLength: 40 })} />

                <input placeholder='Image URL' type="text" className='mb-4' {...register("image", { required: true })} />

                <input type="submit" value="Add Items" />
            </form>
        </div>
    );
};

export default AddItems;