import React from 'react'
import Banner from "../Banner/Banner";
import Hero from '../Hero/Hero';
import "./Home.scss"
const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Hero></Hero>
        </div>
    );
};

export default Home;