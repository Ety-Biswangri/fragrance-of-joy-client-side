import React from 'react';
import { Button } from 'react-bootstrap';
import { BsGoogle } from 'react-icons/bs';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: "1px", backgroundColor: "blue" }} className='w-25'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px", backgroundColor: "blue" }} className='w-25'></div>
            </div>

            <div>
                <Button className='btn w-50 d-flex justify-content-center align-items-center mx-auto my-2'>
                    <BsGoogle className='fs-4'></BsGoogle>
                    <span className='px-2'>Google Sign In</span>
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;