import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Loading from '../../SharedPage/Loading/Loading';
import useAccessToken from '../../../hooks/useAccessToken';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const [accessToken] = useAccessToken(user);

    const handleNameChange = event => {
        setName(event.target.value);
    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = event => {
        setConfirmPassword(event.target.value);
    }

    const handleRegister = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center'>{error?.message}</p>
    }

    if (loading) {
        return <Loading></Loading>;
    }

    if (accessToken) {
        navigate('/home');
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h1>Please Register</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" required onChange={handleNameChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required onChange={handleEmailChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required onChange={handlePasswordChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required onChange={handleConfirmPasswordChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {errorMessage}

            <p className='mt-3 text-center'>Already have an account? <Link to="/login" className='text-decoration-none'>Login!</Link></p>

            <div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Registration;