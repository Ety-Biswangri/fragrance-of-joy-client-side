import React from 'react';
import { useForm } from 'react-hook-form';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='w-50 mx-auto my-5' style={{ minHeight: "50vh" }}>
            <h2 className='text-center'>Add New Items</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' type="text" className='my-2' {...register("name", { required: true, maxLength: 20 })} />

                <textarea placeholder='Description' className='mb-2' {...register("description", { required: true })} />

                <input placeholder='Price' type="number" className='mb-2' {...register("price", { required: true, maxLength: 20 })} />

                <input placeholder='Quantity' type="number" className='mb-2' {...register("quantity", { required: true, maxLength: 20 })} />

                <input placeholder='Supplier Name' type="text" className='mb-2' {...register("supplierName", { required: true, maxLength: 20 })} />

                <input placeholder='Image URL' type="text" className='mb-4' {...register("image", { required: true, maxLength: 20 })} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddItems;