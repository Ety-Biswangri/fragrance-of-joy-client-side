import React from 'react';
import './Footer.css';
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className='text-center text-white'>
                <p>All rights reserved &copy; {date}</p>
                <span>Visit us on</span>
                <br />
                <FaFacebookSquare></FaFacebookSquare>
                <GrInstagram className='ms-3'></GrInstagram>
                <FaTwitter className='ms-3'></FaTwitter>
            </div>
        </div>
    );
};

export default Footer;