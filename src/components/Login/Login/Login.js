import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../SharedPage/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    // console.log(loading)

    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail
        (auth);

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center'>{error?.message}</p>
    }

    if (loading) {
        return <Loading></Loading>;
    }

    if (user) {
        const url = `http://localhost:5000/login`;
        // console.log(user?.user?.email);

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user?.user?.email
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                localStorage.setItem('accessToken', data.token);
                navigate(from, { replace: true });
            });
    }

    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Email Sent");
        }
        else {
            toast("Please provide your email");
        }
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h1>Please Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required onChange={handleEmailChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required autoComplete='off' onChange={handlePasswordChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {errorMessage}

            <p className='mt-3 text-center'>Don't have an account? <Link to="/register" className='text-decoration-none'> Create an account!</Link></p>

            <p className='mt-3 text-center'>Forget Password? <button className='btn btn-link text-decoration-none' onClick={handleResetPassword}> Reset Password</button></p>

            <div>
                <SocialLogin></SocialLogin>
            </div>
            <div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;