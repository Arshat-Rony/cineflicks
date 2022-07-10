import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PrimaryBtn from '../../../common/PrimaryBtn/PrimaryBtn';
import './Banner.scss'
const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className="banner">
            <h4>Welcome Back !</h4>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <button onClick={() => navigate('/login')} className='primary__btn'>Finish Sign up</button>
        </div>
    );
};

export default Banner;