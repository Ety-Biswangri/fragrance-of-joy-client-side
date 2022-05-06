import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { BsGoogle } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAccessToken from '../../../hooks/useAccessToken';
import Loading from '../../SharedPage/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [accessToken] = useAccessToken(user);

    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center'>{error?.message}</p>
    }

    if (loading) {
        return <Loading></Loading>;
    }

    if (accessToken) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: "1px", backgroundColor: "blue" }} className='w-25'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px", backgroundColor: "blue" }} className='w-25'></div>
            </div>
            {errorMessage}

            <div>
                <Button className='btn w-50 d-flex justify-content-center align-items-center mx-auto my-2' onClick={() => signInWithGoogle()}>
                    <BsGoogle className='fs-4'></BsGoogle>
                    <span className='px-2'>Google Sign In</span>
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;